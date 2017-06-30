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
    self.addUnit = addUnit;
    self.addWargear = addWargear;
    self.removeUnit = removeUnit;
    self.removeWargear = removeWargear;
    self.removeList = removeList;
    self.listTotal = listTotal;



    init();



    function init() {
      if (!$localStorage.lists) {
        $localStorage.lists = [];
      }

      if (!$localStorage.listsId) {
        $localStorage.listsId = 1;
      }

      if (!$localStorage.unitId) {
        $localStorage.unitId = 1;
      }

      if (!$localStorage.wargearId) {
        $localStorage.wargearId = 1;
      }
    }

    function addList() {
      $localStorage.lists.push({
        id: $localStorage.listsId,
        name: 'Unnamed list',
        units: [
          {
            id: $localStorage.unitId,
            name: 'Tactical squad',
            points: 70,
            type: 'Troop',
            wargear: []
          }
        ]
      });

      $localStorage.listsId++;
    }

    function addUnit(listId) {
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == listId) {
          $localStorage.lists[index].units.push({
            id: $localStorage.unitId,
            name: 'Tactical squad',
            points: 70,
            type: 'Troop',
            wargear: []
          });

          $localStorage.unitId++;

          delete lists;
          return false;
        }
      });
    }

    function addWargear(listId, unitId) {
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == listId) {
          var tmplistid = index;
          var units = $localStorage.lists[index].units;

          units.forEach(function(unit, index) {
            if (unit.id == unitId) {
              $localStorage.lists[tmplistid].units[index].wargear.push({
                id: $localStorage.wargearId,
                name: 'Flamer',
                points: 10
              });

              $localStorage.wargearId++;

              delete lists;
              delete units;
              return false;
            }
          });
        }
      });
    }

    function removeUnit(listId, unitId) {
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == listId) {
          var tmplistid = index;
          var units = $localStorage.lists[index].units;

          units.forEach(function(unit, index) {
            if (unit.id == unitId) {
              $localStorage.lists[tmplistid].units.splice(index, 1);

              delete lists;
              delete units;
              return false;
            }
          });
        }
      });
    }

    function removeWargear(listId, unitId, wargearId) {
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == listId) {
          var tmplistid = index;
          var units = $localStorage.lists[index].units;

          units.forEach(function(unit, index) {
            if (unit.id == unitId) {
              var tmpunits = index;
              var wargear = $localStorage.lists[tmplistid].units[index].wargear;

              wargear.forEach(function(item, index) {
                if (item.id == wargearId) {
                  $localStorage.lists[tmplistid].units[tmpunits].wargear.splice(index, 1);

                  delete lists;
                  delete units;
                  delete wargear;
                  return false;
                }
              });
            }
          });
        }
      });
    }

    function removeList(id) {
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == id) {
          $localStorage.lists.splice(index, 1);

          delete lists;
          return false;
        }
      });
    }

    function listTotal(id) {
      var lists = $localStorage.lists;
      var total = 0;

      lists.forEach(function(list, index) {
        if (list.id == id) {
          var tmplistid = index;
          var units = $localStorage.lists[index].units;

          units.forEach(function(unit, index) {
            total = total + unit.points;

            var wargear = $localStorage.lists[tmplistid].units[index].wargear;

            wargear.forEach(function(item) {
              total = total + item.points;
            });
          });
        }
      });

      delete lists;
      delete units;
      delete wargear;

      return total;
    }
  }

})();