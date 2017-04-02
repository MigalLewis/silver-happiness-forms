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

app.controller('projectsController', function ($scope) {
  $scope.headingTitle = "Roles List";
});

