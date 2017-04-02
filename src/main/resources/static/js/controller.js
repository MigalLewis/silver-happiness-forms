app.controller('businessController', function ($scope) {
  $scope.headingTitle = "User List";
  $scope.addressDetails = [
    {
      'street1': 'barbara rd',
      'street2': '',
      'street3': '',
      'suburb': 'woodmere',
      'postalcode': '1401',
      'city': 'Germiston',
      'country': 'South Africa'
    }
  ];
  $scope.addNew = function (details) {
    $scope.addressDetails.push({
      'street1': details.street1,
      'street2': details.street2,
      'street3': details.street3,
      'suburb': details.suburb,
      'postalcode': details.postalcode,
      'city': details.city,
      'country': details.country
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
});
app.controller("memberController",  function ($scope) {
    $scope.titlelist = ['Mr', 'Mrs', 'Miss'];
    $scope.ethnitylist = ['Black', 'Coulard', 'Indian', 'White'];
    $scope.personalDetails = [
      {
        'title': "Mr",
        'fname': 'Muhammed',
        'lname': 'Shanid',
        'idnumber': '9007055078089',
        'ethnity': 'Indian',
        'cnumber': '0795028226',
        'email': 'shanid@shanid.com'
      },
      {
        'title': "Mr",
        'fname': 'John',
        'lname': 'Abraham',
        'ethnity': 'White',
        'idnumber': '9007055078089',
        'cnumber': '0795028226',
        'email': 'john@john.com'
      },
      {
        'title': "Mr",
        'fname': 'Roy',
        'lname': 'Mathew',
        'ethnity': 'White',
        'idnumber': '9007055078089',
        'cnumber': '0795028226',
        'email': 'roy@roy.com'
      }];

    $scope.addNew = function (details) {
      $scope.personalDetails.push({
        'title': details.title,
        'fname': details.fname,
        'lname': details.lname,
        'idnumber': details.idnumber,
        'ethnity': details.ethnity,
        'cnumber': details.cnumber,
        'email': details.email
      });
      $scope.PD = {};
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
  });

app.controller('fundingController', function ($scope) {
  $scope.headingTitle = "User List";
});

app.controller('projectsController', function ($scope) {
  $scope.headingTitle = "Roles List";
});

