# Testkube Licensing FAQ

Testkube's software licensing is designed to be transparent and to support both open source and commercial use cases. 
This document aims to address common questions related to our licensing model.

## Licenses

Testkube software is distributed under two primary licenses:
- **MIT License (MIT)**: A permissive open-source license that allows for broad freedom in usage and modification.
- **Testkube Community License (TCL)**: A custom license designed to protect the Testkube community and ecosystem, covering specific advanced features.

## The Testkube Agent

The Testkube Agent is open-source and free to use in [standalone mode](/articles/install/standalone-agent). Free agent features are
licensed under the MIT license, but some agent features are subject to the TCL - see the [Agent Overview](/articles/install/standalone-agent#overview) for
more information on the differences between Open Source and Commercial features.

## Testkube Commercial

All functionality provided by the Testkube Control Plane and specific functionality provided by the Testkube Agent 
([Read More](/articles/open-source-or-pro)) require a paid license from Testkube (see [pricing](https://testkube.io/pricing)).
Commercial functionality included in the Testkube Agent is licensed under the TCL.

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
development. Most Agent functionality is available under the permissive MIT license, while advanced features 
require a commercial license. This allows the community to benefit from an open source project while providing a sustainability model.

### How does the TCL license apply to the Testkube Agent?

Testkube Agent functionality is available under the MIT license, allowing free usage, modification and distribution. However, 
advanced pro features are covered under the more restrictive TCL. Contributions back to Testkube Agent are welcomed, but 
modifications to TCL-licensed components may require reaching out to Testkube first.

### Can I use the Testkube Agent for free?

Yes, the Testkube Agent can be used for free. The majority of Testkube's agent functionalities are available under the MIT license, 
which allows for free usage, modification, and distribution.

### Does the TCL license restrict my usage of the Testkube Agent?

No, the TCL license only applies to specific advanced features marked as "Pro" in the codebase. It does not restrict 
usage of the MIT-licensed open source components.

### Can I make changes to the Testkube Agent source code for my own usage?

Yes, you are free to make changes to Testkube Agent components licensed under the MIT license for your own use. 
For components under the TCL, you must adhere to the terms of that license, which include restrictions on redistribution 
or commercial use, for this we advise you to reach out to us first.

### Can I make contributions back to the Testkube Agent?

Yes! Contributions are welcomed, whether bug fixes, enhancements or documentation. As long as you retain the existing
MIT license, contributions can be made freely.

## Feature Licensing

The table below shows how certain Agent features in the [Testkube GitHub repository](https://github.com/kubeshop/testkube) are licensed:

| Feature            |                                                     Core/MIT                                                     |      Pro/TCL       |
|:-------------------|:----------------------------------------------------------------------------------------------------------------:|:------------------:|
| Tests *            |                                                :white_check_mark:                                                |                    |
| Basic Testsuites * |                                                :white_check_mark:                                                |                    |
| Triggers           |                                                :white_check_mark:                                                |                    |
| Executors *        |                                                :white_check_mark:                                                |                    |
| Webhooks           |                                                :white_check_mark:                                                |                    |
| Sources *          |                                                :white_check_mark:                                                |                    |
| Test Workflows     | :white_check_mark: - with [Limitations](/articles/install/standalone-agent#agent-limitations-in-standalone-mode) | :white_check_mark: |

* = deprecated functionality - [Read More](legacy-features)
