{{- define "gvList" -}}
{{- $groupVersions := . -}}

<head>
  <meta name="og:type" content="reference-doc" />
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
