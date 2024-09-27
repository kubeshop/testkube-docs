# Deprecations

Software deprecation refers to the process of phasing out or discontinuing support for a particular software feature. This decision is typically made by software developers or vendors due to various reasons, such as, security concerns, outdated technology, or the introduction of more efficient alternatives.

Usually, if possible and reasonable we try to keep backward compatibility.

## List of Testkube Deprecations

### Since `v1.16.16` Internal `/results` Route 

The reason for deprecation was a Fiber (https://gofiber.io/) security update disallowing the use of `Mount` in a simple way. 
Also **route** is not used by Testkube internally anymore.

As a workaround users who want to configure their own ingresses should use the `/` route instead.
