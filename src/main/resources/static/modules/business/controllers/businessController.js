(function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/business',{
            templateUrl: '/modules/business/views/businessDetails.html',
            controller: 'businessController'
        });
  });
          
  app.controller('businessController', function ($scope) {
    $scope.headingTitle = "User List";
    $scope.addressDetails = [{
        'street1': '',
        'street2': '',
        'street3': '',
        'suburb': '',
        'postalcode': '',
        'city': '',
        'country': ''
      }];

    $scope.addNew = function () {
      $scope.addressDetails.push({
        'street1': '',
        'street2': '',
        'street3': '',
        'suburb': '',
        'postalcode': '',
        'city': '',
        'country': ''
      });
    };

    $scope.remove = function () {
      var newDataList = [];
      $scope.selectedAll = false;
      angular.forEach($scope.addressDetails, function (selected) {
        if (!selected.selected) {
          newDataList.push(selected);
        }
      });
      $scope.addressDetails = newDataList;
    };

    $scope.checkAll = function () {
      if (!$scope.selectedAll) {
        $scope.selectedAll = true;
      } else {
        $scope.selectedAll = false;
      }
      angular.forEach($scope.addressDetails, function (addressDetails) {
        addressDetails.selected = $scope.selectedAll;
      });
    };
    $scope.save = function () {

    };
  });

})(angular.module('forms.controller.business', ['ngRoute','ngResource']));