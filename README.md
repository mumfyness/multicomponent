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

##### _**NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html**_

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
Use `--push` to push any local commits to the new repository.

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
### You're deployment of GitHub Pages includes the compressed build directory. 
### You must add '-p 2' to include a depth copy to pick up the static directory and contents.
###  Add the following scripts in your package.json:
"scripts": {
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -p 2 -d build",
+ "start": "react-scripts start",
+ "build": "react-scripts build",

### If you want to push deployments to a different remote branch _{i.e.: your master branch}_ do this.
+ "deploy": "gh-pages -b master -p 2 -d build",
