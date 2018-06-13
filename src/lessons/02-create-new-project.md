# Lesson 2: Create a New React Project

## Setup

Register for a free account on GitHub:
https://github.com/join

Then click on the `+` icon at the top right of the page, and click on `New repository`. For `Repository name`, use `website`. Don't modify the other fields, and click the `Create repository` button.

Configure Git by running this in Terminal or Hyper, replacing the name and email address with your name and email address:

```sh
git config --global user.name "Mijeong Han"
git config --global user.email "email@address.com"
```

Create a new React project, replacing `myusername` with your GitHub username:

```sh
cd ~/Projects
npx create-react-app website
cd website
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:myusername/website.git
git push --set-upstream origin master
```

Open Visual Studio Code (VSCode), do `File -> Add Folder to Workspace`, and choose the `Projects/website` folder.

Open the `.gitignore` file (use <kbd>Command+P</kbd> to find it quickly) and add this line to the end of the file:

```
.vscode
```

Open your `package.json` file and add a `homepage` field for your project underneath the `"private": true` line, replacing `myusername` with your GitHub username:

```
  "private": true,
  "homepage": "https://myusername.github.io/website/",
```

Also in `package.json`, add the following `predeploy` and `deploy` lines just after the `scripts` line:

```
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

Add the `gh-pages` module so that we can publish your website to GitHub:

```sh
yarn add -D gh-pages
```

Click on the Source Control icon in VSCode. If the pane closes, then click the icon again to open it.

![Source Control Icon](../../public/img/source-control-icon.png)

In the `WEBSITE - Git` area of VSCode, hover on the `Changes` line and then click on the `+` icon, as shown in this picture:

![Stage All Icon](../../public/img/git_stage_all.gif)

Find the `Message` input area. Type `Configure gh-pages` into it. This is a commit message that describes what you did. Type <kbd>Command+Enter</kbd> to commit the change.

Go back to the terminal and run this to upload your website to GitHub:

```sh
git push
yarn run deploy
```

Open https://myusername.github.io/website/ in Chrome, replacing `myusername`. You should see an example `Welcome to React` website.

Now let's make the deployment happen automatically whenever we run `git push`. To do this, install `husky`:

```sh
yarn add -D husky@next
```

Edit `package.json` and add the following lines after the `homepage` line:

```
  "husky": {
    "hooks": {
      "pre-push": "npm run deploy"
    }
  },
```

Now commit the changes using VSCode using the commit message `Configure husky`, and then run this in the Terminal:

```sh
git push
```
