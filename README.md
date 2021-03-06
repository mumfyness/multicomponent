# Multicomponent 
## The Multicomponent project was designed to exercise different react development methods.
### Adding and displaying photos in the Content page and implementing navigation via a Navbar and Sidbar page.

# _Notes for Keeping Node/React Up to Date_

## Node should be installed

node --version should be >= 17.0.0
npm --version should be >= 8.1.0

## Install the React module, create-react-app

npm install -g create-react-app

## When setting up a new project repository 
### **Run npm install globally**
>npm install -global react reactdom react-scripts

>npm update -global  _{**update your node react install**}_

>npm install _{**install to local repo**}_

>npm install react reactdom react-scripts

### **Create a simple react app**
>npx create-react-app simpleapp

#### **_Completed running npx create-react-app simpleapp!_**

##### _Output suggests these steps to follow:_

>  npm start

##### **_Starts the development server_**

> npm run build

##### **_Creats an optimized production build. Bundles the app into static files for production.
The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment_**

### **_Run project tests_**

>  npm test

##### **_Starts the test runner._**

> npm run eject

##### **_Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!_**

> na

## **Using GitHub CLI to add locale repo to GitHub online**
> gh auth login -p ssh/http -h github.com -w

### **Using gh cli, add locale repo to GitHub online**

> gh repo create simpletoggle --private/public --source C:\repos\TetraDigital\react\simpletoggle --remote git@github.com/mumfyness/simpletoggle --push

### **This only created the repo but did not upload source files {if without --push}.** 

### You can manually add local git project files by going to your GitHub repository in a browser or try to do it using gh **_the GitHub CLI_**.

### To create a repository interactively, use `gh repo create` with no arguments.

### To create a remote repository from an existing local repository, cd into source directory and specify the source directory with `--source=.`
By default, the remote repository name will be the name of the source directory.
Pass `--push` to push any local commits to the new repository.

> gh repo create simpleapp --[public/private] --source=. --push

### Setup tracking of develop branch

> git push --set-upstream origin develop

## **Use GitHub pages to deploy your project to GitHub.io online**
### Open your package.json and add a homepage field for your project:
### For your GitHub project page:
> "homepage": "https://myusername.github.io/my-app",
### Or a GitHub user page:
> "homepage": "https://myusername.github.io",
### Install gh-pages and add deploy to scripts in package.json
### To publish it at https://myusername.github.io/my-app, run:
> npm install --save gh-pages
> ###  Add the following scripts in your package.json:
"scripts": {
+ "predeploy": "npm run build", -- add
+ "deploy": "gh-pages -d build", -- add
+ "start": "react-scripts start",
+ "build": "react-scripts build",
### If you are deploying to a GitHub user page instead of a project page, you'll need to make one additional modification:
### 1. Tweak your package.json scripts to push deployments to master:
"scripts": {
"predeploy": "npm run build",
- "deploy": "gh-pages -d build", --remove
+ "deploy": "gh-pages -b master -d build", -- add
