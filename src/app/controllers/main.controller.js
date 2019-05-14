(function (){

  function MainController($scope) {

    // Model Properties
    $scope.newTitle    = '';
    $scope.todos       = [];
    $scope.editedTodo  = null;
    $scope.editedTitle = ''
    $scope.routingImplemented = false;

    // Calculated Properties

    $scope.hasTodos = function () {
      return $scope.todos.length > 0;
    };

    $scope.activeCount = function () {
      return $scope.todos.reduce( function (count, t) { return t.completed ? count : count +1 }, 0);
    };

    $scope.hasCompletedItems = function () {
      // Bang! Polyfill for find/findIndex or manually:
      for(var ix = 0; ix < $scope.todos.length; ix++) {
        if ($scope.todos[ix].completed === true) return true;
      }
      return false;
    };

    $scope.hasActiveItems = function () {
      // Bang! Polyfill for find/findIndex or manually:
      for(var ix = 0; ix < $scope.todos.length; ix++) {
        if ($scope.todos[ix].completed === false) return true;
      }
      return false;
    };

    // Controller Logic

    var lastId = 0;
    $scope.createTodo = function () {
       // ng-model properties are trimmed by default
      if ($scope.newTitle.length > 0) {
        var todo = { id: ++lastId, title: $scope.newTitle, completed: false };
        $scope.todos.push(todo);
        $scope.newTitle = '';
      }
    };

    $scope.removeTodo = function (todo) {
      var todoIx = $scope.todos.indexOf(todo);
      $scope.todos.splice(todoIx, 1);
    };

    $scope.beginEdit = function () {};
    $scope.cancelEdit = function () {};
    $scope.commitEdit = function () {};
  }

  angular.module('todos.app')
    .controller('MainController', MainController);

})();
