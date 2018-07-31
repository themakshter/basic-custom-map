# Contributing

New contributions to the library are always welcome, but please follow these guidelines below

## Code

In general formatting, please follow the EditorConfig guidelines for the project. You should be only editing code `/src` folder.

In terms of TypeScript, we use TSLint with the basic settings except two rule changes: `quotemark` is set to use `single-quotes` (`''`) and `interface-name` is set to `never-prefix` (i.e., we never prefix our interfaces with `I`). We have set up TSLint to check for code issues and calling `npm run build` should automatically run the linter. Otherwise, you can also run `npm run lint` to just run the linter.

## Building

Please run `npm run build` to generate the UMD versions of the library, bundle and the minified versions.

## Demo

We provide a nice and interactive demo for the library. This can be run by calling `npm run demo` which will run the lint, compile the files and then run a simple `http-server` before routing to the index page.

## Commit guidelines

Please follow the [seven rules of a greate Git commit message](https://chris.beams.io/posts/git-commit/). This means clean, consistent and understandable history. It would also be preferable that you squash your commits into one before submitting a final Pull Request, but that can also be done by us when we merge in your code.

## Bugs and Issues

Please create [issues](https://github.com/PCs4KIDS/basic-custom-map/issues) for any bugs in the code. Well structured, detailed bug reports are hugely valuable for the project.

Guidelines for reporting bugs:

- Check the issue search to see if it has already been reported
- Isolate the problem to a simple test case
- Please include steps to reproduce it. You can use the `demo` folder from this repository to set it up.

Please provide any additional details associated with the bug, if it's browser or screen density specific, or only happens with a certain configuration or data.
