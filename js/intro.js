// Introduction controller
myApp.controller('introCtrl', function($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.setNameCtrl = function($fName, $lName) {
        $scope.firstName = $fName;
        $scope.lastName = $lName;
    }
});

// Control scope controller
myApp.controller('scopeCtrl', function($scope) {
    $scope.divide = function($val1, $val2) {
        $scope.result = $val1/$val2;
    }
});

// Dot notation
myApp.controller('parentCtrl', function($scope) {
    $scope.name = {
        fName: 'Tam',
        lName: 'Nguyen'
    };
});
myApp.controller('childCtrl', function($scope) {

});