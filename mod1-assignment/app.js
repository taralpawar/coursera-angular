(function () {
  "use strict";
  angular
    .module("myFirstApp", [])
    .controller("myController", function ($scope) {
      $scope.lunchItems = "";
      $scope.message = "";

      $scope.checkLunch = function () {
        const str = $scope.lunchItems;
        if (str == "") {
          $scope.message = "Enter atleast one item";
        } else {
          const items = str.split(",");
          console.log(items);
          var num = 0;

          for (var i = 0; i < items.length; i++) {
            if (items[i] != "" && items[i] != " ") {
              num += 1;
            }
          }
          console.log(num);
          if (num > 3) {
            $scope.message = "Too much!";
          } else {
            $scope.message = "Enjoy!";
          }
        }
      };
    });
})();
