TEKKL Core - An Angular / Symfony application skeleton for the web, iOS and Android
=====
[![Build Status](https://travis-ci.org/Tekkl/tekkl-core.svg?branch=master)](https://travis-ci.org/Tekkl/tekkl-core)

TEKKL Core is a project that aims to solve one mission: Create an Angular / Symfony application skeleton that enables you to create web, iOS and Android applications that can be packaged and distributed to as many servers as possible.

## Installation

1. Clone or Download the Package from [GitHub](https://github.com/Tekkl/tekkl-core)
2. Install all PHP dependencies running `composer install` (If you don't have Composer installed on your machinge, [see this manual](https://getcomposer.org/doc/00-intro.md))
3. Install all npm dependencies running `npm install` (If you don't have npm installed on your machine, [see this manual](http://blog.npmjs.org/post/85484771375/how-to-install-npm))
4. Build the application by running `gulp build`

### Database Setup

5. Enter your database credentials in `engine/config/parameters.yml`
6. If you haven't done so already, create the DATABASE you specified with `$ bin/console doctrine:database:create`
7. Create the database schema (create the tables) with `$ bin/console doctrine:schema:create`

### JWT Authentication Setup

You need to create an application specific keypair your application uses to create JSON Web Tokens for your user authentication

8. Create a new directory `$ mkdir -p var/jwt`
9. Create the private key `$ openssl genrsa -passout pass:$JWT_PASSPHRASE -out var/jwt/private.pem -aes256 4096`
10. Create the public key `$ openssl rsa -pubout -passin pass:$JWT_PASSPHRASE -in var/jwt/private.pem -out var/jwt/public.pem`

## Why use the combination Angular / Symfony / NativeScript

We can only answer this question by frist turning it upside down. Why are we doing this? We created TEKKL core to create an application skeleton that empowers developers to rapidly create powerful Angular applications that have a need to communicate to backend services, using a RESTful API. We realized that the most time consuming tasks in these projects have nothing to do with the core mission of those projects at all. You need to think about a robust project architecture, you need to implement authentication mechamisms, you need to confgure firewalls, setup routing, etc. So we thought, why not create a core skeleton, so you can focus on the good stuff?

So why do we use [Angular](https://angular.io)? Angular applications are modular, support web components and make it easy to create rich and easy to use user interfaces.

Why do we need [Symfony](http://symfony.com)? Symfony applications are modular, the framework has a great reputation of being stable and promoting good coding standards, and it's written in PHP. Since applications using TEKKL core are supposed to be distributable to many server environments, PHP is a good choice. No other server language enjoys support by so many hosting providers. 

Finally why use [NativeScript](https://www.nativescript.org) instead of other frameworks like [ionic](https://ionicframework.com/)? We really don't know yet. Currently we prefer the philosophy of NativeScript over the one of ionic. But this might change in the future. We are just getting started.
