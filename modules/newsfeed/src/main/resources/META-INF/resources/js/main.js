(function (win) {
  // Your Controller Methods
  var NewsFeedController = function ($http) {
      var vm = this;

      vm.results = [];

      $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts'
      }).success(function(data, status) {
        vm.results = data;
      });
  };

  // Manage Your Dependencies Here
  NewsFeedController.$inject = ['$http'];

  // Inject Controller in Controllers Module
  win.MainApp.Controllers
    .controller('NewsFeedController', NewsFeedController);
}(window));
