myApp.controller('userInputCtrl', function($scope) {
   $scope.model = {
       firstName: 'Tam',
       lastName: 'Nguyen',
   };

    $scope.myweb = 'linktome.html';

    $scope.employee = {}

    $scope.submitForm = function(form) {
        if(form.$valid) {
            alert('Validation passed')
        } else {
            alert('Validation failed')
        }
    }
});