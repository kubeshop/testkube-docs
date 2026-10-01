# Open Source Licensing FAQ

This FAQ explains how Testkube Open Source is licensed, including the MIT license and the Testkube Community License (TCL) for open source Runner functionality. For the commercial model based on users, seats, and runners, see [Commercial Licensing](/articles/licensing).

## Licenses

Testkube software is distributed under two primary licenses:

- **MIT License (MIT)**: A permissive open-source license that allows for broad freedom in usage and modification.
- **Testkube Community License (TCL)**: A custom license designed to protect the Testkube community and ecosystem, covering specific advanced features.

## The Testkube Runner {#the-testkube-agent}

The Testkube Runner is open-source and free to use in [standalone mode](/articles/install/standalone-agent). Free runner features are
licensed under the MIT license, but some runner features are subject to the TCL - see the [Runner Overview](/articles/install/standalone-agent#overview) for
more information on the differences between Open Source and Commercial features.

## Commercial Functionality in the Codebase

All functionality provided by the Testkube Control Plane and specific functionality provided by the Testkube Runner require a paid license from Testkube (see [pricing](https://testkube.io/pricing)).
Commercial functionality included in the Testkube Runner is licensed under the TCL. This FAQ describes the Open Source licenses used for those components; commercial usage limits are described in [Commercial Licensing](/articles/licensing).

:::note
You can find any feature's license by checking the code's file header in the Testkube repository.
:::

### What is the TCL License?

The Testkube Community License (TCL) is a custom license created by Testkube to cover certain aspects of the
Testkube software. It was inspired by the [CockroachDB Community License](https://www.cockroachlabs.com/docs/stable/licensing-faqs#ccl) and designed to ensure that
advanced features and proprietary extensions remain available and maintained for the community while allowing
Testkube to sustain its development through commercial offerings.

### Why does Testkube have a dual-licensing scheme with MIT / TCL?

Testkube uses a dual license model to balance open source community participation with the ability to fund continued
development. Most Runner functionality is available under the permissive MIT license, while advanced features
require a commercial license. This allows the community to benefit from an open source project while providing a sustainability model.

### How does the TCL license apply to the Testkube Runner? {#how-does-the-tcl-license-apply-to-the-testkube-agent}

Testkube Runner functionality is available under the MIT license, allowing free usage, modification and distribution. However,
advanced pro features are covered under the more restrictive TCL. Contributions back to Testkube Runner are welcomed, but
modifications to TCL-licensed components may require reaching out to Testkube first.

### Can I use the Testkube Runner for free? {#can-i-use-the-testkube-agent-for-free}

Yes, the Testkube Runner can be used for free. The majority of Testkube's runner functionalities are available under the MIT license,
which allows for free usage, modification, and distribution.

### Does the TCL license restrict my usage of the Testkube Runner? {#does-the-tcl-license-restrict-my-usage-of-the-testkube-agent}

No, the TCL license only applies to specific advanced features marked as "Pro" in the codebase. It does not restrict
usage of the MIT-licensed open source components.

### Can I make changes to the Testkube Runner source code for my own usage? {#can-i-make-changes-to-the-testkube-agent-source-code-for-my-own-usage}

Yes, you are free to make changes to Testkube execution capabilitys licensed under the MIT license for your own use.
For components under the TCL, you must adhere to the terms of that license, which include restrictions on redistribution
or commercial use, for this we advise you to reach out to us first.

### Can I make contributions back to the Testkube Runner? {#can-i-make-contributions-back-to-the-testkube-agent}

Yes! Contributions are welcomed, whether bug fixes, enhancements or documentation. As long as you retain the existing
MIT license, contributions can be made freely.

## Feature Licensing

The table below shows how certain Runner features in the [Testkube GitHub repository](https://github.com/kubeshop/testkube) are licensed:

| Feature            |                                                     Core/MIT                                                     |      Pro/TCL       |
| :----------------- | :--------------------------------------------------------------------------------------------------------------: | :----------------: |
| Tests *            |                                                :white_check_mark:                                                |                    |
| Basic Testsuites * |                                                :white_check_mark:                                                |                    |
| Triggers           |                                                :white_check_mark:                                                |                    |
| Executors *        |                                                :white_check_mark:                                                |                    |
| Webhooks           |                                                :white_check_mark:                                                |                    |
| Sources *          |                                                :white_check_mark:                                                |                    |
| Test Workflows     | :white_check_mark: - with [Limitations](/articles/install/standalone-agent#agent-limitations-in-standalone-mode) | :white_check_mark: |

- = deprecated functionality - [Read More](legacy-features)
