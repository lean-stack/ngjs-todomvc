(function (){

  function MainController($scope) {

    // Model Properties
    $scope.newTitle    = '';
    $scope.todos       = [];
    $scope.editedTodo  = null;
    $scope.editedTitle = ''

    // Calculated Properties
    $scope.activeCount = function () {};
    $scope.hasCompletedItems = function () {};
    $scope.hasActiveItems = function () {};

    // Controller Logic
    $scope.createTodo = function () {};
    $scope.removeTodo = function () {};
    $scope.beginEdit = function () {};
    $scope.cancelEdit = function () {};
    $scope.commitEdit = function () {};
  }

  angular.module('todos.app')
    .controller('MainController', MainController);

})();
