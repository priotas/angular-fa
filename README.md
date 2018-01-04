# Fontaweseome SVG icons for AngularJS

[![Build Status](https://travis-ci.org/priotas/angular-fa.svg?branch=master)](https://travis-ci.org/priotas/angular-fa)

# Installation

```
yarn add  @priotas/angular-fa
```

```
npm install --save @priotas/angular-fa
```

# Usage

```JS
// JS
import angular from 'angular';
import angularFa from 'angular-fa';
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