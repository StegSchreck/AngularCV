<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV

This project serves the purpose of having a simple, self-hosted online-CV outside of LinkedIn, Xing, etc.

For a live demo, you can visit [cv.schreck.berlin](http://cv.schreck.berlin), for which this project was created initially.


## Third party stuff 

It uses [Angular 4](https://angular.io/) and the [Material Design components for Angular](https://material.angular.io/).
Furthermore, the following third-party sources are included:
* [Roboto](https://fonts.google.com/specimen/Roboto)
* [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)
* [IcoMoon Free](https://icomoon.io/#preview-free)
* [jsPDF](https://github.com/MrRio/jsPDF)

The images in the `/src/assets/img/item-thumbnails` directory in this repository are property of their respective right owners and do not fall under the license of this repository. They're included for show-case purposes.

## Configuration

The CV items for the experience, education, projects and volunteering sections are configured in a JSON format in `/src/app/cv-item/cv-item.data.ts`.
Please notice the division of the education section, which is applied here. This enables you to re-arrange the the sections to your likings.

In the end, this is just an example of how it can be done. Feel free to take it as a template and adjust everything to your needs.

### Set your own data

Here is what you will have to change in order to adapt this project for yourself.

* `src/app/cv-item/cv-items.data.ts` contains all the configurable data for the page
  * You can use the current version as a template, but you will need to replace the data with your own
  * There are different use cases configured, so you can see different sets of data, which will be displayed differently in the rendered page
  * Some fields are required, for others there are checks in the frontend. Please try it yourself
  * I recommend sorting the items by descending end-date, so the newest item will be shown on top
* Replace `src/assets/img/avatar.jpg` with your profile picture (avatar)
* Replace `src/assets/img/cover.jpg` with an image for your overview page, imagine it as a kind of book cover
* Please delete all images in `src/assets/img/item-thumbnails` and add the ones you need (depending on what you configure in `src/app/cv-item/cv-items.data.ts`)
* Please delete all files in `src/assets/attachments` and add the ones you need (depending on what you configure in `src/app/cv-item/cv-items.data.ts`)
* Replace `src/favicon.ico`, it contains the icon your browser displays in the task bar

In order to comply with the license of this project and the third-party elements in it, please leave the "About" section unchanged as well as the link to it in the footer.

## Angular basics

See the [Angular basic guide](ANGULAR.md) for the basics. For more information, visit the [Angular 4](https://angular.io/) website.

## Deployment to production

<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV_Deployment.png" width="450px">
</p>

After you cloned/forked this project and adjusted it to your needs (and configuring with your data), you might want to deploy it in order to make it available to anyone.

See my [deployment guide](DEPLOYMENT.md) for a possible way how to achieve this with [Amazon Web Services (AWS)](https://aws.amazon.com/).

### Another (cheaper) way: Uberspace

I am also using [Uberspace](https://uberspace.de/) for private purposes. This is a lightweight server where you can pay as you like. The reccomandation is to pay about 5 - 10 € per month, minimum is 1 € per month. They have a good [wiki](https://wiki.uberspace.de/start) (but only in German so far) for most of the needs you might have.

In order to deploy AngularCV to Uberspace, you will have to perform the following steps:

1. Register a domain somewhere
1. Configure your new domain at your uberspace: https://wiki.uberspace.de/domain:verwalten
1. configure the newer nodejs version and install Angular CLI
```
echo 'export PATH=/package/host/localhost/nodejs-8/bin:$PATH' >> ~/.bash_profile  # use the newer nodejs version, as this is not the default
source ~/.bash_profile  # immediately apply the above change
npm install @angular/cli
```
1. Deploy you AngularJS app
```
cd ~
git clone git@github.com:YoutGithubAccount/AngularCV.git
cd ~/AngularCV
ng build -prod  # build the app for production environment
cd ~/AngularCV/dist
cp -r ./* ~/html/  # copy built app artifacts to web root directory
```
  see more here: https://wiki.uberspace.de/start:web
1. In order to make the direct links and brwoser page refresh work add this content to the new file `~/html/.htaccess/`:
```
    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} -s [OR]
    RewriteCond %{REQUEST_FILENAME} -l [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^.*$ - [NC,L]

    RewriteRule ^(.*) /index.html [NC,L]
```
