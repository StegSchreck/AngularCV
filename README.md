<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV

This project serves the purpose of having a simple, self-hosted online-CV outside of LinkedIn, Xing, etc.

For a live demo, please visit [cv.schreck.berlin](http://cv.schreck.berlin).


## Third party stuff 

It uses [AngularJS 4](https://angular.io/) and the [Material Design components for Angular](https://material.angular.io/).
Furthermore, the following third-party fonts are included:
* [Roboto](https://fonts.google.com/specimen/Roboto)
* [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)
* [IcoMoon Free](https://icomoon.io/#preview-free)

The images in the `/src/assets/img/item-thumbnails` directory in this repository are property of their respective right owners and do not fall under the license of this repository. They're included for show-case purposes.

## Configuration

The CV items for the experience, education, projects and volunteering sections are configured in a JSON format in `/src/app/cv-item/cv-item.data.ts`.
Please notice the division of the education section, which is applied here. This enables you to re-arrange the the sections to your likings.

In the end, this is just an example of how it can be done. Feel free to take it as a template and adjust everything to your needs.

## AngularJS basics

See the [AngularJS basic guide](ANGULARJS.md) for the basics. For more information, visit the [AngularJS 4](https://angular.io/) website.

## Deployment to production

After you cloned/forked this project and adjusted it to your needs (and configuring with your data), you might want to deploy it in order to make it available to anyone.

See my [deployment guide](DEPLOYMENT.md) for a possible way how to achieve this with [Amazon Web Services (AWS)](https://aws.amazon.com/).
