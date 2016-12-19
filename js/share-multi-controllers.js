myApp.factory('share', function() {
    return {
        ShareMsg:'Hello! I am shared'
    };
});

myApp.controller('controllerA', function($scope, share) {
    $scope.value = 'Tam'
    $scope.shareValue = share
});

myApp.controller('controllerB', function($scope, share) {
    $scope.value = 'Nguyen'
    $scope.shareValue = share
});