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

  function MainController($localStorage, $document, $timeout) {
    var self = this;

    self.$storage = $localStorage;
    self.lists = $localStorage.lists;
    self.copyModeActive = false;
    self.copyModeList = null;

    self.addList = addList;
    self.addUnit = addUnit;
    self.addWargear = addWargear;
    self.removeUnit = removeUnit;
    self.removeWargear = removeWargear;
    self.removeList = removeList;
    self.listTotal = listTotal;
    self.copyMode = copyMode;
    self.exitCopyMode = exitCopyMode;
    self.duplicateList = duplicateList;
    self.scrollTo = scrollTo;



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

      stickybits('.sidebar');
    }

    function addList() {
      $localStorage.lists.push({
        id: $localStorage.listsId,
        name: 'List name',
        units: []
      });

      addUnit($localStorage.listsId);
      addUnit($localStorage.listsId);
      addUnit($localStorage.listsId);

      $localStorage.listsId++;
    }

    function addUnit(listId) {
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == listId) {
          $localStorage.lists[index].units.push({
            id: $localStorage.unitId,
            name: '',
            points: null,
            type: '',
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
                name: '',
                points: 0
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
                  delete tmplistid;
                  delete tmpunits;
                  return false;
                }
              });
            }
          });
        }
      });
    }

    function removeList(id) {
      var result = confirm("Are you sure you want to delete this list?");
      if (result) {
        var lists = $localStorage.lists;

        lists.forEach(function(list, index) {
          if (list.id == id) {
            $localStorage.lists.splice(index, 1);

            delete lists;
            return false;
          }
        });
      }

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

    function copyMode(listId) {
      self.copyModeActive = true;
      var lists = $localStorage.lists;

      lists.forEach(function(list, index) {
        if (list.id == listId) {
          self.copyModeList = list;
          return false;
        }
      });
    }

    function exitCopyMode() {
      self.copyModeActive = false;

      $timeout(function() {
        self.copyModeList = null;
      }, 250)
    }

    function duplicateList(id) {
      var lists = $localStorage.lists,
          newListId = $localStorage.listsId;
      $localStorage.listsId++;


      lists.forEach(function(list, index) {
        if (list.id == id) {
          var newList = angular.copy(list);
          newList.id = newListId;

          $localStorage.lists.push(newList);
          return false;
        }
      });
    }

    function scrollTo(id) {
      $document.scrollToElementAnimated(angular.element('#' + id), 40);
    }
  }

  MainController.$inject = [ '$localStorage', '$document', '$timeout' ];

})();