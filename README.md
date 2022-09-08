# Multicomponent 
## The Multicomponent project was designed to exercise different react development methods.
### Adding and displaying photos in the Content page and implementing navigation via Navbar and Sidbar pages.

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

### **Create a simple react project app**
>npx create-react-app simpleprojapp

#### **_Completed running npx create-react-app simpleprojapp!_**

##### _Output suggests these steps to follow:_

>  npm start

##### **_Starts the development server_**

> npm run build

##### **_Creats an optimized production build._**
##### Bundles the app into static files for production.
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

> gh repo create projectname --{private/public} --source projectpath --remote git@github.com/ghusername/projectname --push

### **If you don't include {--push}, this will only create the repo but not upload source files.** 

### You can manually add local git project files by going to your GitHub repository in a browser or try to do it using gh **_the GitHub CLI_**.

### To create a repository interactively, use `gh repo create` with no arguments, _{I don't prefer this method}_

### To create a remote repository from an existing local repository, 
cd into source directory and specify the source directory with `--source=.`
By default, the remote repository name will be the name of the source directory.
Pass `--push` to push any local commits to the new repository.

> gh repo create projectname --{public/private} --source=. --push

### Setup tracking of develop branch
> git checkout -b develop
> git push --set-upstream origin develop

## **Use GitHub pages to deploy your project to GitHub.io online**
### Open your package.json and add a homepage field for your project:
### For your GitHub project page:
> "homepage": "https://ghusername.github.io/projectname",
### Or a GitHub user page:
> "homepage": "https://ghusername.github.io/projectapp",
### Install gh-pages and add deploy to scripts in package.json
### To publish it at https://ghusername.github.io/projectapp, run:
> npm install --save gh-pages
> ###  Add the following scripts in your package.json:
"scripts": {
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -d build",
+ "start": "react-scripts start",
+ "build": "react-scripts build",
### If you are deploying to GitHub pages including build directory, 
### you'll want to make add '-p 2' to pick up the static directory and contents.
"scripts": {
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -p 2 -d build",
### This tweak will push deployments to your master branch.
+ "deploy": "gh-pages -b master -p 2 -d build",
