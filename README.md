# Fontaweseome SVG icons for AngularJS

[![Build Status](https://travis-ci.org/priotas/angular-fa.svg?branch=master)](https://travis-ci.org/priotas/angular-fa)


# Installation

Minimum AngularJs Version is ```1.5```. Does not work with Angular ```>=2```.

```
yarn add  @priotas/angular-fa
```

```
npm install --save @priotas/angular-fa
```

# Usage

The component does not package the icons itself. It relies on the ```@fortawesome/fontawesome``` package to be installed. The desired available icons must be made available by using the ```fontawesome.library.add()``` method.

----

**See**: 

* https://fontawesome.com/how-to-use/use-with-node-js#using-the-library
* https://fontawesome.com/how-to-use/use-with-node-js#tree-shaking

----
**Example**: 

```JS
// JS
import angular from 'angular';
import angularFa from '@priotas/angular-fa';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(solid, brands);

angular.module('my-app', [ angularFa ]);

```

```HTML
<!--HTML -->
<fa-icon prefix="fab" icon="github" flip="vertical" pulse="true"></fa-icon> 
```
