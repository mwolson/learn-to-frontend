# Computer Setup

## Windows instructions

Install node.js for Windows (LTS edition, x64):
https://nodejs.org/dist/v8.11.1/node-v8.11.1-x64.msi

Install Git for Windows:
https://git-scm.com/download/win

Using the default installation settings for Git is fine.

Install yarn (choose "Stable" version):
https://yarnpkg.com/lang/en/docs/install/#windows-stable

Install Hyper:
https://hyper.is/#installation

Download and install Visual Studio Code:
https://code.visualstudio.com/

Open Visual Studio Code. Choose "File -> Open File". Click on the location bar and type `%HOME%` and hit Enter. Select the `.hyper.js` file and open it. Find the `shell:` line and make sure it looks like this:

```sh
    shell: 'C:\\Program Files\\Git\\bin\\bash.exe',
```

## OS X instructions

Open the App Store and install XCode.

Open the Terminal app and run these commands:

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install nodejs
brew install yarn
```

Download and install Visual Studio Code:
https://code.visualstudio.com/

## Visual Studio Code setup

After installing Visual Studio Code, install the following plugins:

```
Auto Close Tag
Code Spell Checker
Color Highlight
Debugger for Chrome
EditorConfig for VS Code
ES7 React/Redux/React-Native/JS snippets
ESLint
explorer-excluded-files
Git History (git log)
Git Lens
gitignore
React Component
stylelint
SVG
```

Then change these settings by doing <kbd>Command+Shift+P</kbd> and choosing `Preferences: Open User Settings`:

```json
{
  "css.validate": false,
  "editor.cursorBlinking": "solid",
  "editor.folding": false,
  "editor.fontSize": 15,
  "editor.renderLineHighlight": "all",
  "editor.scrollBeyondLastLine": false,
  "editor.tabSize": 2,
  "editor.wordWrapColumn": 120,
  "eslint.autoFixOnSave": true,
  "files.autoSave": "onFocusChange",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "flow.runOnAllFiles": true,
  "gitlens.blame.line.enabled": false,
  "gitlens.codeLens.enabled": false,
  "javascript.validate.enable": false,
  "scss.validate": false,
  "search.useIgnoreFilesByDefault": true,
  "stylelint.enable": true,
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "window.restoreFullscreen": true,
  "workbench.colorCustomizations": {
    "editor.lineHighlightBackground": "#2e333d"
  },
  "workbench.startupEditor": "none"
}
```

Then type <kbd>Command+Shift+P</kbd> and choose `Shell Command: Install 'code' command in PATH`.

Then install eslint globally so certain editor features will work:
```sh
npm install -g eslint
```

## CodeSandbox

CodeSandbox is a way to write code using only a website, without a special editor like the ones we installed. Use it if you are borrowing someone else's computer. Note that it is slower than an installed editor.

Open CodeSandbox. We'll use it for interactive programming:
https://codesandbox.io/

Click the "Open React" button. You might have to wait for it to appear.
