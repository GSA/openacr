This document is about how to contribute to the GSA's OpenACR. This process looks a bit different depending on whether you're a GSA employee or not. Here's what you can find in this doc:

- [Public contributions](#public-contributions)
- [GSA contributions](#gsa-contributions)
  - [Branches](#branches)
  - [Front end architecture](#front-end-architecture)
  - [Standards and benchmarks](#standards-and-benchmarks)
- [Public domain](#public-domain)

No matter who you are, if you spot an error, omission, or bug, you're welcome to open an issue in this repo!

Before contributing, we encourage you to read our CONTRIBUTING policy (you are here), our [LICENSE.md](LICENSE.md), and our [README.md](README.md).

## Public contributions

We're so glad you're thinking about contributing to an GSA open source project! If you're unsure about anything, just submit an issue with your question. The worst that can happen is you'll be politely asked to change something. We love all friendly contributions.

We want to ensure a welcoming environment for all of our projects. Our staff follow the [TTS Code of Conduct](https://handbook.tts.gsa.gov/code-of-conduct/) and all contributors should do the same.

- If you see an error or have feedback, the best way to let us know is to file an issue.
- To contribute a specific change, contributors will need to fork this repository.

### Contribution guidelines

OpenACR is maintained by the General Services Administration (GSA). We encourage contributions consistent with the project's principles:

- Be free and open source.
- Be accessible, and meet or exceed the requirements of Section 508.
- Have good multilingual support.
- Encourage continuous improvement — strive to be better, not necessarily perfect.

We accept pull requests that improve OpenACR and align with these principles. We review all contributions for code quality and consistency and we may reject contributions that do not meet our standards for code quality or conform to our principles. We will evaluate all contributions for the following aspects of code quality:

- Compiles without errors
- Passes code scanning and continuous integration tests
- Follows security, privacy & accessibility best practices
- Is legible and understandable
- Is consistent with the existing codebase

Any contributors will be responsible for updating `AUTHORS.txt` and `CONTRIBUTORS.txt` as necessary. We'll review these files as part of the code review process.

[`AUTHORS.txt`](AUTHORS.txt) is the official list of project authors for copyright purposes.

[`CONTRIBUTORS.txt`](CONTRIBUTORS.txt) is the list of people who have contributed to this project, and includes those not listed in `AUTHORS.txt` because they are not copyright authors. For example, company employees may be listed here because their company holds the copyright and is listed in `AUTHORS.txt`.

We may request changes from the author for any contributions that do not pass this evaluation. Contributions that do not pass this evaluation may be rejected. If you're unsure about anything, just ask.

## GSA contributions

### Branches

Any GSA team member should be able to make a branch of the site and submit a pull request. Doing so will also generate a preview URL we can use to inspect your changes. Please do not submit a pull request from a fork of the site, because that does not permit us to inspect your changes.

- Submit **new design work, content changes, and features** as pull requests to the `dev` branch. This will allow us to test and review batches of changes before deploying them.

**The `master`, `staging`, and `production` branches are protected.** Only administrators of the repo can push directly to those branches.

### Submitting pull requests

To fill out the template, please start by attaching any issues your PR addresses. If the PR changes are not associated with an issue, please leave a brief message detailing what was wrong with the site before, and how it _should_ be.

Complete the PR message by detailing all fixes and tagging GitHub users who should review the work, with a note about what they should be reviewing. In general:

- If you are not an admin, tag someone who you would like to review and merge your PR
- If you are an admin for the repo, you are responsible for merging your own PRs **after they have been reviewed and approved by someone else on the team**
- If you have been asked to review a PR, leave a clear message indicating your approval, either through the formal PR review feature or by commenting (at the very least, with a note saying `LGTM`, or "Looks good to me")
- If your PR includes many small, incremental commits, consider squashing them

### Front end architecture

We default to using [semantic HTML5](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

#### CSS

CSS methodology is inherited from the WDS, which inherits mostly from the [18f front end guide](https://pages.18f.gov/frontend/css-coding-styleguide/architecture/).

- Use [18F modifed BEM naming convention](https://pages.18f.gov/frontend/css-coding-styleguide/naming/)
- Componentized CSS: start with tag rules and only becomes more specific as necessary, using component classes

#### JavaScript

- Ruby gems is used for front end dependency management

## Accessibility

To test the site locally for accessibility errors.

## Standards and benchmarks

### Device and browser support

- The website supports the latest modern web browsers
- The website should be designed with a mobile-first approach

### Performance

Most events should load in under a second.

## Public domain

For detailed license information, see [LICENSE](LICENSE.md).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
