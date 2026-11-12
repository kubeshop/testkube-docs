import React, { useEffect, useRef, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import styles from "./styles.module.css";
import { CLAUDE_LOGO_COLOR, CLAUDE_LOGO_PATH, OPENAI_LOGO_PATH } from "./logos";

/**
 * The "Copy page" button and its menu, shown to the right of a page title.
 *
 * It relies on the Markdown version of each page that the llms-txt plugin
 * writes at the page's URL plus ".md". Pages without one (see
 * `customFields.markdownExcludePrefixes`) do not get the menu.
 */

const logo = (path, color = "currentColor") => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
);

const AI_TOOLS = [
  {
    name: "Claude",
    url: "https://claude.ai/new?q=",
    logo: logo(CLAUDE_LOGO_PATH, CLAUDE_LOGO_COLOR),
  },
  {
    name: "ChatGPT",
    url: "https://chatgpt.com/?q=",
    logo: logo(OPENAI_LOGO_PATH),
  },
];

const icon = (children) => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CopyIcon = () =>
  icon(
    <>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </>
  );
const CheckIcon = () => icon(<path d="M5 12l5 5L20 7" />);
const ChevronIcon = () => icon(<path d="M6 9l6 6 6-6" />);
const LinkIcon = () =>
  icon(
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  );
const ExternalIcon = () =>
  icon(
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  );
export default function PageActions() {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = useDoc();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(null);
  const container = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (!container.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const { permalink } = metadata;
  const excluded = siteConfig.customFields?.markdownExcludePrefixes ?? [];
  if (excluded.some((prefix) => permalink.startsWith(prefix))) return null;

  // Same origin, so that it also works on a preview deployment.
  const markdownPath = `${permalink === "/" ? "/index" : permalink}.md`;
  // The public URL, which an AI tool can fetch.
  const publicMarkdownUrl = siteConfig.url.replace(/\/$/, "") + markdownPath;
  const prompt = `Help me understand this documentation page: ${publicMarkdownUrl}`;

  const flash = (what) => {
    setCopied(what);
    setTimeout(() => setCopied(null), 2000);
  };
  const copyPage = async () => {
    const markdown = fetch(markdownPath).then((response) => {
      if (!response.ok) throw new Error(String(response.status));
      return response.text();
    });
    try {
      if (typeof ClipboardItem !== "undefined" && navigator.clipboard.write) {
        // Safari allows a clipboard write only directly in the click handler,
        // so it is handed a promise for the text that is still loading.
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/plain": markdown.then(
              (text) => new Blob([text], { type: "text/plain" })
            ),
          }),
        ]);
      } else {
        await navigator.clipboard.writeText(await markdown);
      }
      flash("page");
    } catch {
      flash("failed");
    }
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + window.location.pathname
      );
      flash("link");
    } catch {
      flash("failed");
    }
    setOpen(false);
  };

  const copyLabel =
    copied === "page"
      ? "Copied"
      : copied === "failed"
        ? "Copy failed"
        : "Copy page";

  return (
    <div className={styles.pageActions} ref={container}>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.main}
          onClick={copyPage}
          title="Copy this page as Markdown"
        >
          {copied === "page" ? <CheckIcon /> : <CopyIcon />}
          <span aria-live="polite">{copyLabel}</span>
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="More page actions"
          onClick={() => setOpen(!open)}
        >
          <ChevronIcon />
        </button>
      </div>
      {open && (
        <div className={styles.menu} role="menu">
          <button
            type="button"
            role="menuitem"
            className={styles.item}
            onClick={copyLink}
          >
            <LinkIcon />
            Copy link to page
          </button>
          <a
            role="menuitem"
            className={styles.item}
            href={markdownPath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <ExternalIcon />
            Open Markdown page
          </a>
          {AI_TOOLS.map((tool) => (
            <a
              key={tool.name}
              role="menuitem"
              className={styles.item}
              href={tool.url + encodeURIComponent(prompt)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              {tool.logo}
              Use in {tool.name}
            </a>
          ))}
        </div>
      )}
      {copied === "link" && (
        <span className={styles.srOnly} aria-live="polite">
          Link copied
        </span>
      )}
    </div>
  );
}
