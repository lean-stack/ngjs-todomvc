(function (){

  function pluralizeFilterFactory() {

    return function(input, count) {
      return count === 1 ? input : input + 's';
    }
  }

  angular.module('todos.app')
    .filter('pluralize', pluralizeFilterFactory);

})();
