# AngularWebcomponent Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Introduction

To run the demo : 

// Build web-component locally
 * ng build --project webcomponent
// copy dist files to demo project as assets
 * copy /dist/webcomponent/browser/*.js|*.css /projects/demo/src/assets/webcomponent/ and rename files wy removing hashes to get main.js, polyfills.js, styles.css
// run demo project that simply load and display the web-component
 * ng serve --projects demo
// Display in browser :-)
 * test on http://localhost:4200

## Explanation

The project is a proof of concept of building web component with Angular and Clarity Design UX library.
Even if it's quite easy to build web component with Angular, the fact is that with Clarity, we always 
embed too many CSS. 
A web component should only embed required CSS in a scoped way to prevent side-effect from main application, 
and side-effect of the web component styles to the main application.

For instance, the web component embed all CSS, or nothing (depending the way of doing this), and there is 
side-effect everywhere.

To reproduce the problem, you can `npm i http-server`, then `cd http-server/case-1`, and finally run `http-server`.
Open the served host and see that the alert component is not well rendered. Styles are missing whereas the assets/webcomponent/main.js is 1,52Mb and contain all clarity css (which is not what i want).

You can also test use case 2 `cd http-server/case-2` and run http-server to see that the alert is well displayed but the css are loaded globally to the window.

### Case 1

#### angular.json
* demo project : angular.json > demo > styles : no clarity styles
* webcomponent project : angular.json > webcomponent > styles : no clarity styles

#### *.component.ts
* demo app component : no styles included
* webcomponent alert component : styles included like this `styleUrl : ['../../../../node_modules/@clr/ui/clr-ui.min.css']`

#### Result

Web component rendered in html, but without any style => crappy, and even if the main.js is heavy because of css (it took all clr-ui css) it doesn't work

#### Test it

from folder http-server/case-1 run http-server or any other simple web server and open index.html from served files

### Case 2

#### angular.json
* demo project : angular.json > demo > styles : clarity styles
* webcomponent project : angular.json > webcomponent > styles : no clarity styles

#### *.component.ts
* demo app component : no styles included
* webcomponent alert component : no styles included

#### Result
Web component rendered in html, styled finely. But it's sad because the main window is also using Clarity Design css whereas it don't want to. 

#### Test it
from folder http-server/case-2 run http-server or any other simple web server and open index.html from served files

### Case 3

#### angular.json
* demo project : angular.json > demo > styles : no clarity styles
* webcomponent project : angular.json > webcomponent > styles : no clarity styles

#### *.component.ts
* demo app component : no styles included
* webcomponent alert component : 
  * styles included like this `styleUrl : ['../../../../node_modules/@clr/ui/clr-ui.min.css']`
  * encapsulation decoration set to ViewEncapsulation.ShadowDom

#### Result

Web component rendered in html, styled almost finely : only font is crappy and seems to de default browser font.
The size of the main.js is lighter than case2 (1,2Mb vs 1,5Mb) but it's still too heavy versus case-1 : 247kb and because i only need styles for clr-alert. 
But it seems that main window has no problem with Clarity Design and can use safely it's own styles

#### Test it

from folder http-server/case-3 run http-server or any other simple web server and open index.html from served files

### Aim

* demo app should be able to use any UX library or CSS, and import the AlertComponent that should embed only needed style to display Clarity Design AlertComponent, and should not hurt the main windows style
