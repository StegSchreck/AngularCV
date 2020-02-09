<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/AngularCV/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV
After you forked this project and adjusted it to your needs (configured with your data), you might want to deploy it in order to make it available to everyone.

## Deployment on Uberspace
I am using [Uberspace](https://uberspace.de/) for private purposes. This is a lightweight server where you can pay as you like. The recommendation is to pay about 5 - 10 € per month, minimum is 1 € per month. They have a good [wiki](https://manual.uberspace.de/) for most of the needs you might have.

In order to deploy AngularCV to Uberspace, you will have to perform the following steps:
1.  Register a domain somewhere
2.  Register an [Uberspace](https://uberspace.de/) account
3.  Configure your new domain at your Uberspace, see [their wiki](https://manual.uberspace.de/web-domains.html)
4.  Configure the newer nodejs version and install Angular CLI
    ```sh
    echo 'export PATH=/package/host/localhost/nodejs-8/bin:$PATH' >> ~/.bash_profile  # use the newer nodejs version, as this is not the default
    source ~/.bash_profile  # immediately apply the above change
    npm install @angular/cli
    ```
5.  Deploy your AngularJS app
    ```sh
    cd ~
    git clone git@github.com:YoutGithubAccount/AngularCV.git
    cd ~/AngularCV
    ng build -prod --output-path=~/html/  # build the app for production environment and copy the result to the web root directory
    ```
    * (Optional) **Automate the deployment**
      In order to always show the newest version, you can add a cron job to perform the above steps
      * Add the following lines to `~/bin/deploy_cv.sh`, e.g. by `vim ~/bin/deploy_cv.sh`:
        ```sh
        #!/bin/bash
        
        source ~/.bash_profile
  
        pushd ~/AngularCV
        
        git co -- .   # ignore local changes
        git pull      # get the new stuff
        npm install   # install changes made to package.json
        ng build --prod --aot --output-path=~/html/  # build the app for production environment and copy the result to the web root directory
        
        popd
        ```
      * Make the script executable via `chmod +x ~/bin/deploy_cv.sh` and add the following line to the crontab
        ```sh
        # Deploy AngularCV
        @daily ~/bin/deploy_cv.sh
        ``` 
    * see more here about website hosting at the [Uberspace wiki](https://manual.uberspace.de/web-documentroot.html)
6.  In order to make the direct links and browser page refresh work add this content to the new file `~/html/.htaccess`:
    ```
        RewriteEngine on
        RewriteCond %{REQUEST_FILENAME} -s [OR]
        RewriteCond %{REQUEST_FILENAME} -l [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^.*$ - [NC,L]
    
        RewriteRule ^(.*) /index.html [NC,L]
    ```
    If you chose to automate the deployment (see step before), you should save a copy of this file somewhere (e.g. at `~/.htaccess-for-AngularCV`) and add this line at the end of `~/bin/deploy_cv.sh`:
    ```sh
    cp ~/.htaccess-for-AngularCV ~/html/.htaccess
    ```
