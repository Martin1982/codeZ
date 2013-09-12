# codeZ - In browser coding tool #

## About ##
codeZ is a package that makes it possible to code in the cloud. At the moment the software is still in pre-alpha stage and totally unuseable. As soon as the main functionality has been implemented an alpha release will be packaged.

## Requirements ##
* Chrome 29+ (Due to FileSystem API usage)

If you don't want to use any Chrome flags you can setup a webserver with the `httpdocs` folder for your webroot.
If you don't want to use a self-installed webserver you can use Vagrant, these are the requirements:
* VirtualBox 4.2.x+
* Vagrant 1.2.x+

## Using Vagrant ##
Vagrant is all about making it easy to setup a development environment that is equal on any machine.
Getting up and running is as easy as running the following commands from the root of the project:

```
cd devvm
vagrant up
```

After the process finishes you can open a browser on your local machine and go to http://localhost:8945 and the application will load.

## Contributing ##
Even though codeZ makes use of a lot of packages via Bower there is still a lot of work, if you support this idea and you'd like to get it up and running faster feel free to fork and send in those pull requests.