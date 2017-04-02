/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('memberController', function($scope) {
    $scope.headingTitle = "User List";
    $scope.members=[{"name":"Aphiwe","lastname":"Adams","title":"Mr","idNumber":"5654654654654","cellphone":"5465464565465","race":"b","email":"a.admas@omnipresent.co.za"},
      {"name":"Migal","lastname":"Lewis","title":"Mr","idNumber":"5654654654654","cellphone":"5465464565465","race":"c","email":"migallewis@gmail.com"},
      {"name":"Lonwabo","lastname":"Tommy","title":"Mr","idNumber":"5654654654654","cellphone":"5465464565465","race":"b","email":"a.admas@omnipresent.co.za"}
    ];
});

