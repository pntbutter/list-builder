/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  //MainController.$inject = ['ngStorage'];


  function MainController($scope, $localStorage) {
    var self = this;

    self.$storage = $localStorage;


    self.addList = addList;
    self.removeList = removeList;



    init();



    function init() {
      if (!$localStorage.lists) {
        $localStorage.lists = [];
      }

      if (!$localStorage.listsId) {
        $localStorage.listsId = 1;
      }
    }

    function addList() {
      if (!$localStorage.lists) {
        $localStorage.lists = [];
      }

      $localStorage.listsId = $localStorage.listsId + 1;

      $localStorage.lists.push({
        id: $localStorage.listsId,
        name: 'Unnamed list',
        units: {
          name: 'Tactical squad',
          points: 70,
          type: 'Troop',
          wargear: [
            {
              name: '+5 marines',
              points: 70
            },
            {
              name: 'Rocket launcher',
              points: 15
            },
            {
              name: 'Flamer',
              points: 10
            }
          ]
        }
      });
    }

    function removeList(id) {
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == id) {
          $localStorage.lists.splice(index, 1);
        }
      });
    }
  }

})();