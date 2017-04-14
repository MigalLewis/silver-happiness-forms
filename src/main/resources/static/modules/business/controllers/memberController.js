(function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/members', {
      templateUrl: '/modules/business/views/members.html',
      controller: 'memberController'
    });
  });

  app.controller("memberController", function ($scope) {
    $scope.titlelist = ['Mr', 'Mrs', 'Miss'];
    $scope.ethnitylist = ['Black', 'Coulard', 'Indian', 'White'];
    $scope.personalDetails = [{
        'title': '',
        'fname': '',
        'lname': '',
        'idnumber': '',
        'ethnity': '',
        'cnumber': '',
        'email': ''
      }];

    $scope.addNew = function () {
      $scope.personalDetails.push({
        'title': '',
        'fname': '',
        'lname': '',
        'idnumber': '',
        'ethnity': '',
        'cnumber': '',
        'email': ''
      });
    };

    $scope.remove = function () {
      var newDataList = [];
      $scope.selectedAll = false;
      angular.forEach($scope.personalDetails, function (selected) {
        if (!selected.selected) {
          newDataList.push(selected);
        }
      });
      $scope.personalDetails = newDataList;
    };

    $scope.checkAll = function () {
      if (!$scope.selectedAll) {
        $scope.selectedAll = true;
      } else {
        $scope.selectedAll = false;
      }
      angular.forEach($scope.personalDetails, function (personalDetails) {
        personalDetails.selected = $scope.selectedAll;
      });
    };

    $scope.save = function () {

    };
  });
})(angular.module('forms.controller.member', ['ngRoute', 'ngResource']));

