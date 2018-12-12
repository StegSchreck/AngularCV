<p align="center">
  <img
src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV.png"
width="300px">
</p>

# AngularCV

<p align="center">
  <img
src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV_Deployment.png"
width="450px">
</p>

## Deployment to production

After you cloned/forked this project and adjusted it to your needs (and configuring with
you data), you might want to deploy it in order to make it available to anyone.

This is a little guide of how to deploy this Angular project to Github Pages using
the Angular CLI tool. You still can deploy it in a different way. This is only a
suggestion.


### Step 0: Install angular-cli-ghpages


```sh
$ npm i angular-cli-ghpages --save-dev
```

### Step 1: Compile your Angular app into /dist


```sh
$ ng build && ng build --prod
```

### Step 2: Set your URL

```sh
$ ng build --prod --base-href https://mellab.github.io/AngularCV/
```

This command will set your base-href which is the URL of the site were running our
application to. When creating the URL the format is as follows:


`https:// (your GitHub handle) .github.io/ (your repo name) /`

Don't forget the slash at the end or esle it won't work.

### Step 3: Deploy the project with a build from dist folder

```sh
$ npx ngh
```
