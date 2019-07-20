# Contributing to AngularCV
Thank you for taking the time to read this document! Your interest in contributing to this project is highly appreciated.

#### Table Of Contents
[Code of Conduct](#code-of-conduct)
[Reporting Bugs](#reporting-bugs)
[Suggesting Enhancements](#suggesting-enhancements)
[Submitting Changes](#submitting-changes)
[Coding Conventions](#coding-conventions)

## Code of Conduct
his project and everyone participating in it is governed by the project's [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Reporting Bugs
Perform a [cursory search](https://github.com/search?l=&q=is%3Aissue+repo%3AStegSchreck%2FAngularCV&type=Issues) to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

Bugs are tracked as [GitHub issues](https://github.com/StegSchreck/AngularCV/issues). Create a new issue and provide the requested information to make it easier to work on the subject.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots or animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened.
* **Specify which version of AngularCV you're using.** 
* **Specify the name and version of the OS you're using.**

## Suggesting Enhancements
Enhancement suggestions are tracked as [GitHub issues](https://github.com/StegSchreck/AngularCV/issues). Create an issue on the repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most users.
* **Specify which version of AngularCV you're using.** 
* **Specify the name and version of the OS you're using.**

## Submitting Changes
Please send a [GitHub Pull Request](https://github.com/StegSchreck/AngularCV/pull/new/master) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). We can always use more test coverage. Please follow the coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

### Git Commit Messages
Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### Coding Conventions
The project contains a linting configuration at `tslint.json`. In order to check if your proposed changes are compliant with that configuration, you can run `npm run lint`.

Please make sure that you adapt the existing tests if necessary or write new ones. The unit tests can be executed locally by running `npm run test`.
The end-to-end tests can be executed by running `npm run e2e`. If you are running a server locally (with `npm run start`), you might need to adapt the port. In this case your would need to run the command using the Angular CLI directly: `ng e2e --port 4201`.
