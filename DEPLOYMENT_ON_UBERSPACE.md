<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV

## Deployment on Uberspace

I am also using [Uberspace](https://uberspace.de/) for private purposes. This is a lightweight server where you can pay as you like. The recommendation is to pay about 5 - 10 € per month, minimum is 1 € per month. They have a good [wiki](https://wiki.uberspace.de/start) (but only in German so far) for most of the needs you might have.

In order to deploy AngularCV to Uberspace, you will have to perform the following steps:

1. Register a domain somewhere
1. Configure your new domain at your Uberspace, see [their wiki](https://wiki.uberspace.de/domain:verwalten)
1. Configure the newer nodejs version and install Angular CLI
    ```
    echo 'export PATH=/package/host/localhost/nodejs-8/bin:$PATH' >> ~/.bash_profile  # use the newer nodejs version, as this is not the default
    source ~/.bash_profile  # immediately apply the above change
    npm install @angular/cli
    ```
1. Deploy your AngularJS app
    ```
    cd ~
    git clone git@github.com:YoutGithubAccount/AngularCV.git
    cd ~/AngularCV
    ng build -prod  # build the app for production environment
    cd ~/AngularCV/dist
    cp -r ./* ~/html/  # copy built app artifacts to web root directory
    ```
    see more here about website hosting at the [Uberspace wiki](https://wiki.uberspace.de/start:web)
1. In order to make the direct links and brwoser page refresh work add this content to the new file `~/html/.htaccess/`:
    ```
        RewriteEngine on
        RewriteCond %{REQUEST_FILENAME} -s [OR]
        RewriteCond %{REQUEST_FILENAME} -l [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^.*$ - [NC,L]
    
        RewriteRule ^(.*) /index.html [NC,L]
    ```
