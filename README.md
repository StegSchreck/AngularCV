<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/AngularCV/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV
[![Build Status](https://github.com/StegSchreck/AngularCV/workflows/CI/badge.svg)](https://github.com/StegSchreck/AngularCV/actions?query=workflow%3ACI)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dcb96592805143aa8cc1de99b1e9f836)](https://www.codacy.com/app/StegSchreck/AngularCV?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=StegSchreck/AngularCV&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/dcb96592805143aa8cc1de99b1e9f836)](https://www.codacy.com/app/StegSchreck/AngularCV?utm_source=github.com&utm_medium=referral&utm_content=StegSchreck/AngularCV&utm_campaign=Badge_Coverage)
[![License](https://img.shields.io/github/license/StegSchreck/AngularCV.svg)](https://github.com/StegSchreck/AngularCV/blob/master/LICENSE)
[![Latest Release](https://img.shields.io/github/release/StegSchreck/AngularCV.svg?logo=github)](https://github.com/StegSchreck/AngularCV/releases)

This project serves the purpose of having a simple, self-hosted online-CV outside of LinkedIn, Xing, etc.

For a live demo, you can visit [cv.schreck.berlin](https://cv.schreck.berlin), for which this project was created initially.

## Configuration
The data for the experience, education, publications, projects, volunteering, and contact sections are configured in a JSON format in `/src/app/cv-item/data/cv-items.data.*.ts`.
Please notice the division of the education and publications section, which is applied here. This enables you to re-arrange the the sections to your likings.

In the end, this is just an example of how it can be done. Feel free to take it as a template and adjust everything to your needs.

### Set Your Own Data
Here is what you will have to change in order to adapt this project for yourself.

* `src/app/cv-item/data/cv-items.data.*.ts` contains all the configurable content data for the page
  * You can use the current version as a template, but you will need to replace the data with your own
  * There are different use cases configured, so you can see different sets of data, which will be displayed differently in the rendered page
  * Some fields are required, for others there are checks in the frontend. Please try it yourself
  * I recommend sorting the items by descending end-date, so the newest item will be shown on top
* Replace `src/assets/img/avatar.jpg` with your profile picture (avatar)
* Replace `src/assets/img/cover.jpg` with an image for your overview page, imagine it as a kind of book cover
* Please delete all images in `src/assets/img/item-thumbnails` and add the ones you need (depending on what you configure in `src/app/cv-item/data/cv-items.data.*.ts`)
* Please delete all files in `src/assets/attachments` and add the ones you need (depending on what you configure in `src/app/cv-item/data/cv-items.data.*.ts`)
* Replace `src/favicon.ico`, it contains the icon your browser displays in the task bar

In order to comply with the license of this project and the third-party elements in it, please leave the "About" section unchanged as well as the link to it in the footer.

### Feature Toggles
AngularCV offers some feature toggles (a.k.a. feature switches) to adjust the experience of the website. However, some features are part of the basic functionality and should not be deactivated and thus do not have a feature toggle, e.g. the work experience tab.
The feature toggles are defined in `src/app/feature-toggle/feature-toggles.data.ts`. Currently, these feature toggles are implemented:
* `downloadable_pdf`: whether to offer a PDF version of the data (download button will be placed in the header and on the contact page)
* `tab_publications`: whether to shot the "publications" tab
* `tab_projects`: whether to shot the "projects" tab
* `tab_volunteering`: whether to shot the "volunteering" tab
* `contact_show_about_section`: whether to show the "about this website" section on the contact page
* `contact_email_link`: whether to link the email address on the contact page with `mailto:`
* `contact_email_remove_at_sign`: whether to replace the `@` sign when displaying the email address on the contact page (in order to make it harder to scrape for a crawler)
* `default_language`: which language to use for the navigation menu entries, page titles, etc.
* `localization`: whether to offer the visitor of the website to switch the localization language

### Localization
By switching the `default_language` feature toggle (see above), you can define which language to choose for navigation menu entries, page titles, etc. You can also let the user switch the language by activating the `localization` feature toggle. You will still need to adjust your data in `src/app/cv-item/data/cv-items.data.*.ts` to adapt the same language, where `*` is a placeholder for the language you defined as default language before. 

#### Add data for another language
To add additional languages you need to perform three steps. If you would like to add support for Italian for example it would be this:
* Create a new file in `src/app/cv-item/data/` with the name `cv-items.data.it.ts` (`it` in the filename stands for Italian)
  * the easiest way would be to copy an existing file, e.g. `cv-items.data.en.ts` (containing the English version)
  * translate all the items in the file for the new language
  * you could also choose to show different items or in a different order - but this is not recommended 
* Adjust `src/app/cv-item/data/cv-items.data.ts` to let the application know about the new language you added
* In `src/app/l10n/l10n.data.ts`, copy one if the existing sections (e.g. `EN` for English) to a new section `IT` and translate all texts (not the keys!). For Italian this is actually already done.

## Angular Basics
See the [Angular basic guide](ANGULAR.md) for the basics. For more information, visit the [Angular](https://angular.io/) website.

## Deployment to Production
<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/AngularCV/master/src/assets/img/AngularCV_Deployment.png" width="450px">
</p>

After you cloned/forked this project and adjusted it to your needs (configured with your data), you might want to deploy it in order to make it available to anyone.

See my [AWS deployment guide](DEPLOYMENT_ON_AWS.md) for a possible way how to achieve this with [Amazon Web Services (AWS)](https://aws.amazon.com/).

Alternatively, you can use [Uberspace](https://uberspace.de/), see the corresponding [Uberspace deployment guide](DEPLOYMENT_ON_UBERSPACE.md).

As another option, you can use [GitHub Pages](https://pages.github.com/), see the corresponding [GitHub Pages deployment guide](DEPLOYMENT_ON_GITHUB_PAGES.md).

Similar, you can also use [GitLab Pages](https://pages.github.com/). For this, see the corresponding [GitLab Pages deployment guide](DEPLOYMENT_ON_GITLAB_PAGES.md).

## Acknowledgments
This project uses a free license for WebStorm by benefiting from [JetBrains](https://www.jetbrains.com/?from=AngularCV)' open source community support program.

<p align="center">
  <a href="https://www.jetbrains.com/?from=AngularCV" alt="JetBrains" target="_blank"><img src="https://raw.githubusercontent.com/StegSchreck/AngularCV/master/src/assets/img/item-thumbnails/jetbrains.png" width="100px"></a>
</p>

### Third Party Stuff
This project uses [Angular](https://angular.io/) and the [Material Design components for Angular](https://material.angular.io/).
Furthermore, the following third-party sources are included:
* [Roboto](https://fonts.google.com/specimen/Roboto)
* [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)
* [IcoMoon Free](https://icomoon.io/#preview-free)
* [SimpleIcons](https://simpleicons.org/)
* [jsPDF](https://github.com/MrRio/jsPDF)

The images in the `/src/assets/img/item-thumbnails` directory in this repository are property of their respective right owners and do not fall under the license of this repository. They're included for show-case purposes.
