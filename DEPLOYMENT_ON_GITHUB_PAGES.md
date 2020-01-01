<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/AngularCV/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV
Thanks to [mellab](https://github.com/mellab) for writing this documentation.

After you forked this project and adjusted it to your needs (configured with your data), you might want to deploy it in order to make it available to everyone.

## Deployment to GitHub Pages
This is a little guide of how to deploy this Angular project to [GitHub Pages](https://pages.github.com/) using the Angular CLI tool. You still can deploy it in a different way. This is only a suggestion.

### Step 0: Install `angular-cli-ghpages`
```sh
npm install angular-cli-ghpages --save-dev
```

### Step 1: Compile your Angular app into `/dist`
```sh
ng build && ng build --prod
```

### Step 2: Set your URL
Adapt this with your GitHub account name.
```sh
ng build --prod --base-href https://<YoutGithubAccount>.github.io/AngularCV/
```

This command will set your base-href which is the URL of the site were running our application to. When creating the URL the format is as follows:
`https://<YoutGithubAccount>.github.io/AngularCV/`

Don't forget the slash at the end or else it won't work.

### Step 3: Deploy the project with a build from `/dist` folder
```sh
npx ngh
```

## Alternative using GitHub Actions workflow
If you like to use GitHub Actions, you can uncomment the deploy job in the `.github/workflows/CI.yml` file in this project, which includes:
- lint the files
- execute tests
- build
- create a GitHub Release (tags only)
- deploy to GitHub Pages (master branch only)
  In this case I am using a separate repository for the code and the deployed website. You can also configure this to be in the same repo.

