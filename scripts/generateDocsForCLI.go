package main

import (
	"log"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands"
	"github.com/spf13/cobra/doc"
)

func main() {
	root := commands.RootCmd
	root.DisableAutoGenTag = true

	err := doc.GenMarkdownTree(root, "./docs/cli")
	if err != nil {
		log.Fatal(err)
	}
}
