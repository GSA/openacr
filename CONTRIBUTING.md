This document is about how to contribute to the gsa.gov OpenACR template. This process looks a bit different depending on whether you're a member of the public, an GSA employee, or a member of the outreach or site team. Here's what you can find in this doc:

- [Public contributions](#public-contributions)
- [GSA contributions](#gsa-contributions)
  - [Branches](#branches)
  - [Front end architecture](#front-end-architecture)
  - [Standards and benchmarks](#standards-and-benchmarks)
- [Public domain](#public-domain)

No matter who you are, if you spot an error, omission, or bug, you're welcome to open an issue in this repo!

## Public contributions

We're so glad you're thinking about contributing to an GSA open source project! If you're unsure about anything, just submit an issue with your question. The worst that can happen is you'll be politely asked to change something. We love all friendly contributions.

We want to ensure a welcoming environment for all of our projects. Our staff follow the [TTS Code of Conduct](https://handbook.tts.gsa.gov/code-of-conduct/) and all contributors should do the same.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

- If you see an error or have feedback, the best way to let us know is to file an issue.
- To contribute a specific change to the site, outside contributors will need to fork this repo.

## GSA contributions

### Branches

Any GSA team member should be able to make a branch of the site and submit a pull request. Doing so will also generate a preview URL we can use to inspect your changes. Please do not submit a pull request from a fork of the site, because that does not permit us to inspect your changes.

Because new blog posts are published several times a week, we use several branches to manage parallel work in a predictable way:

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

Each of the following events should load in under a second:

- Time to blog post image
- Time to main image and callout text
- Time until first blog post title shows up on page with all blog posts

## Public domain

For detailed license information, see [LICENSE](LICENSE.md).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
