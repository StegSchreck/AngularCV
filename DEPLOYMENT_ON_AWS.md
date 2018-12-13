<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV.png" width="300px">
</p>

# AngularCV
<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV_Deployment.png" width="450px">
</p>

## Deployment to production
After you cloned/forked this project and adjusted it to your needs (and configuring with your data), you might want to deploy it in order to make it available to anyone.

This is a little guide of how to deploy this Angular project to AWS using an AWS CodePipeline and a S3 Bucket. You still can deploy it in a different way. This is only a suggestion.

### Step 0: Create a domain
You will most likely want to access the Angular app through a proper domain (e.g. `yourdomain.tld`) or sub-domain (e.g. `cv.yourdomain.tld`) instead of the S3 url (e.g. `http://yourbucketname.s3-website.eu-central-1.amazonaws.com/`).
Please go to your favorite domain provider and request a new domain or sub-domain for this purpose.
You will adjust the `CNAME` of that domain later on.

### Step 1: Create AWS resources

<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV_AWS_CodePipeline.png" width="435px">
</p>

You need a free account for [Amazon Web Services (AWS)](https://aws.amazon.com/).

:exclamation: Please be aware, that the resources you are going to create in the upcoming guideline will cause some costs to your AWS account.

#### Step 1a: Create a S3 bucket
The S3 bucket will host your app.

* Open the [Amazon S3](https://s3.console.aws.amazon.com/s3/home) section and click on "Create"
* Name the bucket like the url through which it will be accessed later, e.g. `yourdomain.tld` or `cv.yourdomain.tld`
  * This depends on what you did in step 0 (see above)
* Leave everything else to the prefilled values
* Go to the properties of the S3 bucket you just created and select  "Static Website Hosting"
  * Both, the _index document_ and the _error document_ should be set to `index.html`
* Attach a policy for external access (otherwise nobody would see your website)
  * Go to permissions and click "Bucket Policy"
  * Paste the following policy into the policy editor
  ```json
  {
  	"Version": "2012-10-17",
  	"Statement": [
  		{
  			"Sid": "2",
  			"Effect": "Allow",
  			"Principal": "*",
  			"Action": "s3:GetObject",
  			"Resource": "arn:aws:s3:::cv.yourdomain.tld/*"
  		}
  	]
  }
  ```
  * Adjust the line `"Resource": "arn:aws:s3:::cv.yourdomain.tld/*"` with your domain

#### Step 1b: Configure automated deployment with AWS CodePipeline and AWS CodeBuild
This will create an automated pipeline, which will deploy any changes you do to your repository. 

* Update the `buildspec.yml` in the repository with the name ofm the S3 bucket you previously created
* In AWS, go to the "[CodePipeline](https://eu-central-1.console.aws.amazon.com/codepipeline/home)" section
* Click on "Create" and select a name for your pipeline, e.g. `AngularCVDeployPipeline`
* Select the source "GitHub" and the branch you want to deploy (e.g. `master`)
  * You will have to allow AWS access to your GitHub now
* In the next step, choose "AWS CodeBuild" as build provider
* Select "create a new build project" and name it, e.g. `AngularCVBuild`
* For the environment image, we will use the default one (`Use an image managed by AWS CodeBuild`)
* Select an Operating System - currently, the only available option is `Ubuntu`
* Select `Node.js` as runtime (as we are building an Angular app) with version `aws/codebuild/nodejs:7.0.0`
* For the build specification, we want to use the afore mentioned `buildspec.yml`
* Create a service role for your account, e.g. `code-build-AngularCVBuild-service-role` (you can leave the generated value)
* Click "Save build project" and then "Next step"
* Add the permissions to that role to allow CodeBuild to push the build artifacts to the S3 bucket:
  * Open the "[IAM](https://console.aws.amazon.com/iam/home)" section in a new tab and edit the role, that you just created above (`code-build-AngularCVBuild-service-role`)
  * For convenience, I am going to add full S3 access to that role, but you should just allow access to that specific S3 bucket that you are using
    * Go to Permissions and click "Attach Policy"
    * Add `AmazonS3FullAccess`
* Now, we can continue with the CodePipeline
* In the next step, we select `no deployment` as deployment provider
  * The artifacts are already deployed to S3 by the following line in the `buildspec.yml`:

    `    - aws s3 cp dist s3://${S3_BUCKET} --recursive`
    
* Finally, you will have to create a AWS Service Role
  * Click "Create" and name it e.g. `AWS-CodePipeline-Service-AngularCV`
  * Leave the default values for the other fields
* In the next step you can review your settings
  * After creating the Pipeline, it will start to run automatically and your AngularCV app will be deployed to your S3 bucket

### Step 2: Adjust your domain settings
For the domain, you created previously, adjust the settings in order point it to the S3 bucket
* Go to the DNS settings at your domain provider
  * You can also use [AWS Route53](https://console.aws.amazon.com/route53/home) as DNS, which is easy to use, but that's a different story
* Add a `CNAME` record for the (sub-)domain you want to point to the AngularCV app pointing to the S3 url
  * e.g. `http://cv.yourdomain.tld.s3-website.eu-central-1.amazonaws.com`
* The propagation of the DNS settings might take some minutes

### Step 3: (optional) Use HTTPS with AWS CloudFront distributions and AWS Certificates

<p align="center">
  <img src="https://github.com/StegSchreck/AngularCV/blob/master/src/assets/img/AngularCV_AWS_CloudFront.png" width="435px">
</p>

You can configure a [AWS CloudFront](https://console.aws.amazon.com/cloudfront/home) distribution in order to offer your Angular website with HTTPS.
During this, we will [create a free SSL certificate in AWS](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request.html). 
The latter will only work, if you have access to the mails sent to one of the addresses used by AWS.
Remember, that this is just a basic guide. 
I recommend further reading for all AWS resources you are going to create in order to find the best suited configuration settings for your needs.

#### Step 3a: Create a free SSL certificate in AWS
* Go to the "[AWS Certificate Manager](https://console.aws.amazon.com/acm/home?region=us-east-1#/)" section in the region `US East (N. Virginia)` 
  * The certificate will only be suitable for CloudFront, if it lies in the US East region!
* Click on "Get Started" or "Request a certificate" (depending if you already have one or not)
* Enter the domain name(s) you need, e.g. `yourdomain.tld` and `cv.yourdomain.tld`
* Click on "Review an Request"
* Accept the request from the email you just received

#### Step 3b: Create the CloudFront distribution
* Go to the "[CloudFront](https://console.aws.amazon.com/cloudfront/home)" section in AWS
* Click on "Create Distribution" and select "Web" as distribution method
* Select the S3 bucket you previously created as "Origin Domain Name" from the displayed suggestions
* You can leave the generated "Origin ID"
* I recommend choosing `Redirect HTTP to HTTPS` in "Viewer Protocol Policy"
* Scroll down to "Distribution Settings"
* Choose the price class for your needs (the more locations you enable, the higher the price)
* Set the "Alternative Domain Names (CNAMEs)" to your domain, e.g. `cv.yourdomain.tld`
* Select "Custom SSL Certificate" and choose the SSL Certificate you previously created
* Enter `index.html` in "Default Root Object"
* Leave the other settings as they are
* Click on "Create Distribution"
  * it might take some minutes for it to be created
* Finally, you will need to adjust the `CNAME` of your domain to the CloudFront URL

#### Step 3c: Handling Page Refresh Events
If one of your visitors is e.g. on the "Contact" section of your AngularCV app and refreshes the page, he will get an error from CloudFront.
This is caused by the fact, that the browser now tries to access the path `/contact`, which is not existing.
In order ro make this work, follow these steps:
* Select the CloudFront distribution you just created and go to the "Error Pages" tab
* Click "Create Custom Error Response"
* Select HTTP Code `403: Forbidden` in "HTTP Error Code"
* "Customize Error Response": yes
* Enter `/index.html`in "Response Page Path"
* HTTP Code `200: OK` in "HTTP Response Code"
* repeat this for the HTTP Code `404: Not Found`

Now, also the deeplinks to the sections (`/experience`, `/contact`, etc.) should work like you expect them to.

### References
* https://www.linkedin.com/pulse/create-angular-app-using-deploy-aws-suite-andr%C3%A9s-casta%C3%B1o
* https://rynop.com/2017/04/20/howto-serve-angular2-app-from-s3-and-cloudfront-with-free-https/
