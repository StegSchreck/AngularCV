<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/AngularCV/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV
After you forked this project and adjusted it to your needs (configured with your data), you might want to deploy it in order to make it available to everyone.

I created an overview of GitHub projects as my [GitLab Page](https://stegschreck.gitlab.io/).

## Deployment to GitLab Pages
This is a little guide of how to deploy this React project to [GitLab Pages](https://about.gitlab.com/product/pages/). You still can deploy it in a different way. This is only a suggestion.

### Step 0: Create a Repository
Assuming you want to use this for a user GitLab Page and not a project GitLab Page, you will need to create a dedicated repository with a special name.

At GitLab create a repository named `<YourGitLabUserName>.gitlab.io` (or fork this repository into a new repository with that name in your namespace). After cloning this repository locally, you can set that as the new remote repository.

### Step 1: Adjust the `.gitlab-ci.yml` and `package.json` configuration
In the `.gitlab-ci.yml`, uncomment the deploy stage at the bottom

### Step 2: Deploy
Just push the content of your fork/clone directly to the newly created repository. The `.gitlab-ci.yml` will take care of the rest. (You have to make sure GitLab CI runners are enabled, which they should by default)
