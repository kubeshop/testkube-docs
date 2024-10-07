{{- define "gvList" -}}
{{- $groupVersions := . -}}

<head>
  <meta name="og:type" content="legacy-doc" />
</head>

# API Reference

## Packages
{{- range $groupVersions }}
- {{ markdownRenderGVLink . }}
{{- end }}

{{ range $groupVersions }}
{{ template "gvDetails" . }}
{{ end }}

{{- end -}}
