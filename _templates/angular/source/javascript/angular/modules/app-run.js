'use strict';
// Set up our main application module
// @param: String -> Module name as supplied to the ng-app directive wich we use for auto bootstrapping the app
// @param: Array -> Array of dependencies, we inject the ngRoute(used to set up routing) and ngAnimate(used for animation) modules. In other words the module depends on the injected modules to function properly
// @return: Angular module -> Angular module which exposes the module API
angular.module(<%= computedProjectName %>.Config.computedName)
// Call the config method on the module API to configure the module on run time.
// @param: Function -> runFunction to register work which needs to be done on module run. This method is the closest to an main method and usually contains code which is hard to unit test.
.run(function _ngModuleRun () {

});