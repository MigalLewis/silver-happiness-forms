(function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/funding',{
            templateUrl: '/modules/business/views/funding.html'
        });
  });
         
app.controller('fundingController', function ($scope) {
  $scope.headingTitle = "User List";
  $scope.financeRequired = '';
  $scope.financeApplied = '';
  $scope.statusList = ['Approved', 'Regretted', 'In process'];
  $scope.fundingItemTypeList = ['Equipement', 'System Enhancement', 'System Developement', 'Commisioning', 'Instalations', 'Other'];
  $scope.sponsors = [{
      'name': "",
      'status': '',
      'amount': '',
      'comment': ''
    }];
  $scope.fundintItems = [{
      'name': "",
      'description': '',
      'type': '',
      'amount': ''
    }];

  $scope.addNewSponser = function () {
    $scope.sponsors.push({
      'name': "",
      'status': '',
      'amount': '',
      'comment': ''
    });
  };

  $scope.removeSponser = function () {
    var newDataList = [];
    $scope.selectedAll = false;
    angular.forEach($scope.sponsors, function (selected) {
      if (!selected.selected) {
        newDataList.push(selected);
      }
    });
    $scope.sponsors = newDataList;
  };

  $scope.checkAllSponser = function () {
    if (!$scope.selectedAll) {
      $scope.selectedAll = true;
    } else {
      $scope.selectedAll = false;
    }
    angular.forEach($scope.sponsors, function (sponsors) {
      sponsors.selected = $scope.selectedAll;
    });
  };

  $scope.addNewFundingItem = function () {
    $scope.fundintItems.push({
      'name': "",
      'description': '',
      'type': '',
      'amount': ''
    });
  };

  $scope.removeFundingItem = function () {
    var newDataList = [];
    $scope.selectedAll = false;
    angular.forEach($scope.fundintItems, function (selected) {
      if (!selected.selected) {
        newDataList.push(selected);
      }
    });
    $scope.fundintItems = newDataList;
  };

  $scope.checkAllFundingItem = function () {
    if (!$scope.selectedAll) {
      $scope.selectedAll = true;
    } else {
      $scope.selectedAll = false;
    }
    angular.forEach($scope.fundintItems, function (fundintItems) {
      fundintItems.selected = $scope.selectedAll;
    });
  };

  $scope.save = function () {

  };
});
})(angular.module('forms.controller.funding', ['ngRoute','ngResource']));

