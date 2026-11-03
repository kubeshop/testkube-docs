// Mirrors the published items of the Webflow "Release Announcements" CMS collection into
// static/release-announcements.json, served at https://docs.testkube.io/release-announcements.json.
// The Testkube frontend reads that file instead of calling Webflow directly.
//
// Values are copied verbatim; validation and sanitization are left to the consumer.
// Runs hourly via .github/workflows/sync-release-announcements.yaml. To run locally:
//
//   WEBFLOW_API_TOKEN=<token with cms:read> WEBFLOW_COLLECTION_ID=<collection id> \
//     npm run sync-release-announcements
//
// - On an API error the script exits non-zero and leaves the file untouched.
// - When Webflow returns no published items the file is also left untouched, so an
//   announcement unpublished as the last item has to be removed from the file by hand.
import * as fs from "fs";
import * as path from "path";

const OUTPUT_FILE = path.join(
  __dirname,
  "../../static/release-announcements.json"
);
const PAGE_SIZE = 100;

interface WebflowItem {
  id: string;
  fieldData: Record<string, unknown>;
}

interface WebflowItemsResponse {
  items: WebflowItem[];
  pagination: { limit: number; offset: number; total: number };
}

interface ReleaseAnnouncement {
  id: string;
  title: unknown;
  version: unknown;
  publishDate: unknown;
  summary: unknown;
  body: unknown;
  link: unknown;
}

// fetch all published (live) items, page by page
async function fetchLiveItems(
  token: string,
  collectionId: string
): Promise<WebflowItem[]> {
  const items: WebflowItem[] = [];
  for (let offset = 0; ; offset += PAGE_SIZE) {
    const url = `https://api.webflow.com/v2/collections/${collectionId}/items/live?limit=${PAGE_SIZE}&offset=${offset}`;
    const response = await fetch(url, {
      headers: { Authorization: "Bearer " + token },
    });
    if (!response.ok) {
      throw new Error(
        `Webflow API returned ${response.status}: ${await response.text()}`
      );
    }

    const page = (await response.json()) as WebflowItemsResponse;
    items.push(...page.items);
    if (page.items.length === 0 || items.length >= page.pagination.total) {
      return items;
    }
  }
}

// map the Webflow field slugs to stable names, so a field rename in Webflow doesn't leak to consumers
function toAnnouncement(item: WebflowItem): ReleaseAnnouncement {
  const fields = item.fieldData;
  return {
    id: item.id,
    title: fields["name"] ?? null,
    version: fields["release-version-e-g-2-x-x"] ?? null,
    publishDate: fields["publish-date"] ?? null,
    summary: fields["short-summary"] ?? null,
    body: fields["body"] ?? null,
    link: fields["link-to-full-release-notes-changelog"] ?? null,
  };
}

// newest first, with a stable tie-break so the file only changes when the content does
function compareAnnouncements(
  a: ReleaseAnnouncement,
  b: ReleaseAnnouncement
): number {
  return (
    String(b.publishDate ?? "").localeCompare(String(a.publishDate ?? "")) ||
    a.id.localeCompare(b.id)
  );
}

async function main() {
  const token = process.env.WEBFLOW_API_TOKEN;
  const collectionId = process.env.WEBFLOW_COLLECTION_ID;
  if (!token || !collectionId) {
    throw new Error("WEBFLOW_API_TOKEN and WEBFLOW_COLLECTION_ID must be set");
  }

  const items = await fetchLiveItems(token, collectionId);
  if (items.length === 0) {
    console.log(
      "::warning::Webflow returned no published release announcements, keeping the existing file"
    );
    return;
  }

  const announcements = items.map(toAnnouncement).sort(compareAnnouncements);
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify({ announcements }, null, 2) + "\n"
  );
  console.log(
    `Wrote ${announcements.length} release announcement(s) to ${OUTPUT_FILE}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
