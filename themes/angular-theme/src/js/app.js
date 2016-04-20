(function (win) {
  //
  // Application Main File
  //

  //
  // These Modules Will be Shared Between Portlets.
  // This is the setup for all custom modules.
  //
  win.MainApp.Controllers = angular.module(appName + ".controllers", []);
  win.MainApp.Directives = angular.module(appName + ".directives", []);
  win.MainApp.Services = angular.module(appName + ".services", []);
  win.MainApp.Filters = angular.module(appName + ".filters", []);

  //
  // Setup Common Modules
  //
  angular
    .module(appName, [
      appName + ".controllers"
      , appName + ".directives"
      , appName + ".services"
      , appName + ".filters"]);

  angular
    .module(appName).config([function () {
      //
      // Custom Providers and Common Config goes here
      //

    }]).run(['$log', function ($log) {
      $log.debug("[Liferay/Angular] Initializing " + appName + "...");
    }]);
}(window));
