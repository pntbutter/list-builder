angular.module("boilerplate").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html lang=en ng-csp ng-app=boilerplate><head><base href=\"/\"><meta charset=utf-8><meta http-equiv=x-ua-compatible content=\"ie=edge\"><title>Simple army list-builder</title><meta name=description content=\"Simple army list-builder\"><meta name=HandheldFriendly content=True><meta name=MobileOptimized content=320><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link href=\"https://fonts.googleapis.com/css?family=PT+Sans:400,700\" rel=stylesheet><link rel=stylesheet href=bower_components/OwlCarousel/owl-carousel/owl.carousel.css><link rel=stylesheet type=text/css href=styles/style.css></head><body class=main-wrapper><main-nav></main-nav><div data-ng-view class=container></div></body><script type=text/javascript src=js/nonangular/jquery-1.11.2.min.js></script><script type=text/javascript src=js/nonangular/lodash.min.js></script><script type=text/javascript src=js/scripts.js></script><script type=text/javascript src=bower_components/OwlCarousel/owl-carousel/owl.carousel.min.js></script><script type=text/javascript src=bower_components/stickybits/dist/stickybits.min.js></script><script type=text/javascript src=bower_components/angular/angular.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/ngstorage/ngStorage.min.js></script><script type=text/javascript src=bower_components/angular-sanitize/angular-sanitize.js></script><script type=text/javascript src=bower_components/angular-elastic-input/dist/angular-elastic-input.min.js></script><script type=text/javascript src=bower_components/angular-scroll/angular-scroll.min.js></script><script type=text/javascript src=app/app.js></script><script type=text/javascript src=app/config.js></script><script type=text/javascript src=components/services/LocalStorage.service.js></script><script type=text/javascript src=components/services/queryService.service.js></script><script type=text/javascript src=components/directives/main.nav.directive.js></script><script type=text/javascript src=components/directives/responsive.nav.directive.js></script><script type=text/javascript src=components/directives/owl.slider.directive.js></script><script type=text/javascript src=app/factory.js></script><script type=text/javascript src=app/controller.js></script><script>\n	    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n	    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n	    e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n	    e.src=\'https://www.google-analytics.com/analytics.js\';\n	    r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\n	    ga(\'create\',\'UA-XXXXX-X\',\'auto\');ga(\'send\',\'pageview\');\n	</script></html>");
$templateCache.put("views/404.html","<div class=text-center><h4>Page Not Found</h4><h1>404</h1></div>");
$templateCache.put("views/contact.html","<h2>Contact</h2><div class=\"container cf\"><div><p>Copyright (C) 2015 Jozef Butko<br><a href=http://www.jozefbutko.com/resume>www.jozefbutko.com/resume</a><br><a href=http://www.github.com/jbutko>www.github.com/jbutko</a><br><a href=http://www.twitter.com/jozefbutko>@jozefbutko</a></p></div></div>");
$templateCache.put("views/home.html","<main class=lists ng-class=\"{ \'copymode-active\': main.copyModeActive }\"><div class=no-lists ng-class=\"{ \'active\': main.$storage.lists.length == 0 }\"><h1>You currently don\'t have any lists</h1><button class=btn ng-click=main.addList()>Create one</button></div><div class=list ng-repeat=\"list in main.$storage.lists track by $index\"><header class=list-header id={{list.id}}><input class=list-name type=text placeholder=\"List name\" ng-model=list.name> <span class=list-total>{{main.listTotal(list.id)}}</span></header><ul class=units><li class=unit ng-repeat=\"unit in list.units\"><div class=move-container><div ng-click=\"main.moveUnitUp(list.id, unit.id)\"><svg width=18 height=18 viewbox=\"0 0 1792 1792\" xmlns=http://www.w3.org/2000/svg><path d=\"M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z\"></path></svg></div><div ng-click=\"main.moveUnitDown(list.id, unit.id)\"><svg width=18 height=18 viewbox=\"0 0 1792 1792\" xmlns=http://www.w3.org/2000/svg><path d=\"M1675 832q0 53-37 90l-651 652q-39 37-91 37-53 0-90-37l-651-652q-38-36-38-90 0-53 38-91l74-75q39-37 91-37 53 0 90 37l294 294v-704q0-52 38-90t90-38h128q52 0 90 38t38 90v704l294-294q37-37 90-37 52 0 91 37l75 75q37 39 37 91z\"></path></svg></div></div><input class=unit-type type=text ng-model=unit.type placeholder=\"Unit type\" ng-class=\"{\'empty\': unit.type.length < 0}\" pu-elastic-input> <input class=unit-name type=text ng-model=unit.name placeholder=\"Unit name\" pu-elastic-input> <span class=\"delete delete-unit\" ng-click=\"main.removeUnit(list.id, unit.id)\"><svg width=20 height=20 viewbox=\"0 0 1792 1792\" xmlns=http://www.w3.org/2000/svg><path d=\"M1344 960v-128q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v128q0 26 19 45t45 19h768q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"></path></svg></span> <input class=\"points unit-points\" type=number min=0 placeholder=0 ng-model=unit.points pu-elastic-input><ul class=wargear-items><li class=wargear-item ng-repeat=\"item in unit.wargear\"><input class=wargear-name type=text ng-model=item.name placeholder=\"Wargear name\" pu-elastic-input> <span class=\"delete delete-wargear\" ng-click=\"main.removeWargear(list.id, unit.id, item.id)\"><svg width=16 height=16 viewbox=\"0 0 1792 1792\" xmlns=http://www.w3.org/2000/svg><path d=\"M1344 960v-128q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v128q0 26 19 45t45 19h768q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"></path></svg></span> <input class=\"points wargear-points\" type=number placeholder=0 ng-model=item.points pu-elastic-input></li><li><button class=btn-icon ng-click=\"main.addWargear(list.id, unit.id)\" tabindex=-1><svg width=16 height=16 viewbox=\"0 0 1792 1792\" xmlns=http://www.w3.org/2000/svg><path d=\"M1344 960v-128q0-26-19-45t-45-19h-256v-256q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v256h-256q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45v-256h256q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"></path></svg></button></li></ul></li></ul><footer class=list-footer><button class=btn ng-click=main.addUnit(list.id)>Add unit</button> <button class=btn ng-click=main.copyMode(list.id)>Copy mode</button> <button class=btn ng-click=main.duplicateList(list.id)>Duplicate</button> <button class=\"btn btn-warning\" ng-click=main.removeList(list.id) style=\"float: right;\">Remove list</button></footer></div></main><aside class=sidebar ng-if=\"!main.copyModeActive && main.$storage.lists.length > 0\"><ul class=list-nav><li ng-repeat=\"list in main.$storage.lists track by $index\">&raquo; <a ng-click=main.scrollTo(list.id)>{{list.name}}</a></li></ul><button class=btn ng-click=main.addList()>Add list</button></aside><section class=copy-mode-container ng-class=\"{ \'copymode-active\': main.copyModeActive }\"><div class=container><div class=close-copy-mode ng-click=main.exitCopyMode()>Exit</div><h3>{{main.copyModeList.name}} - <strong>{{main.listTotal(main.copyModeList.id)}}p</strong></h3><span ng-repeat=\"unit in main.copyModeList.units\">{{unit.type}} - {{unit.name}} - <strong>{{unit.points}}p</strong><br><span ng-repeat=\"wargear in unit.wargear\"><small>{{wargear.name}} - <strong>{{wargear.points}}p</strong></small><br></span><br></span></div></section>");
$templateCache.put("views/setup.html","<div class=\"container cf\"><div><h2>Download</h2><code>bower install angularjs-boilerplate</code><br>or<br><code>git clone https://github.com/jbutko/AngularJS-Boilerplate.git</code><br><h2>1. Setup</h2><code>npm install</code><br>- install all npm and bower dependencies<br><small><strong>Note:</strong> If npm install fails during dependency installation it will be likely caused by gulp-imagemin. In that case remove gulp-imagemin dependency from package.json, run npm install again and then install gulp-imagemin separately with following command: npm install gulp-imagemin --save-dev</small><h2>2. Watch files</h2><code>gulp</code><br>- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync<h2>3. Build production version</h2><code>gulp build</code><br>- this will process following tasks:<br>* clean _build folder<br>* compile SASS files, minify and uncss compiled css<br>* copy and optimize images<br>* minify and copy all HTML files into $templateCache<br>* build index.html<br>* minify and copy all JS files<br>* copy fonts<br>* show build folder size<br><h2>4. Start webserver without watch task</h2><code>gulp server</code><h2>5. Start webserver from build folder</h2><code>gulp server-build</code></div></div>");
$templateCache.put("components/directives/main-nav.html","<header class=header role=banner itemscope itemtype=http://schema.org/WPHeader><div id=inner-header class=\"wrap container cf\"><h1 id=logo class=\"text-hide h1 pull-left\" itemscope itemtype=http://schema.org/Organization><a href=\"#/\" rel=nofollow><img></a></h1><responsive-nav></responsive-nav><nav role=navigation class=\"main-nav text-center\" itemscope itemtype=http://schema.org/SiteNavigationElement><ul class=\"menu cf\"><li><a href=#/home>Home</a></li><li><a href=#/setup>Setup</a></li><li><a href=#/contact>Contact</a></li></ul></nav></div></header><div class=responsive-wrapper><ul class=\"cf responsive-nav option-set\"><li><a href=#/home>Home</a></li><li><a href=#/setup>Setup</a></li><li><a href=#/contact>Contact</a></li></ul></div>");
$templateCache.put("components/directives/responsive-nav.html","<a href=# class=hamburger></a>");}]);