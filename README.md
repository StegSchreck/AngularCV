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

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment to production

After you cloned/forked this project and adjusted it to your needs (and configuring with you data), you might want to deploy it in order to make it available to anyone.

See my [deployment guide](DEPLOYMENT.md) for a possible way how to achieve this.
