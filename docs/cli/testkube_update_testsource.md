## testkube update testsource

Update TestSource

### Synopsis

Update TestSource Custom Resource

```
testkube update testsource [flags]
```

### Options

```
  -f, --file string                          source file - will be read from stdin if not specified
      --git-auth-type string                 auth type for git requests one of basic|header (default "basic")
      --git-branch string                    if uri is git repository we can set additional branch parameter
      --git-certificate-secret string        if git repository is private we can use certificate as an auth parameter stored in a kubernetes secret name
      --git-commit string                    if uri is git repository we can use commit id (sha) parameter
      --git-path string                      if repository is big we need to define additional path to directory/file to checkout partially
      --git-token string                     if git repository is private we can use token as an auth parameter
      --git-token-secret stringToString      git token secret in a form of secret_name1=secret_key1 for private repository (default [])
      --git-uri string                       Git repository uri
      --git-username string                  if git repository is private we can use username as an auth parameter
      --git-username-secret stringToString   git username secret in a form of secret_name1=secret_key1 for private repository (default [])
      --git-working-dir string               if repository contains multiple directories with tests (like monorepo) and one starting directory we can set working directory parameter
  -h, --help                                 help for testsource
  -l, --label stringToString                 label key value pair: --label key1=value1 (default [])
  -n, --name string                          unique test source name - mandatory
      --source-type string                   source type of test one of string|file-uri|git
  -u, --uri string                           URI which should be called to get test content
```

### SEE ALSO

* [testkube update](testkube_update.md)	 - Update resource

