myApp.factory('share', function() {
    return { dataObject: {
        color: 'Blue'
    }}
});

myApp.controller('aCtrl', function($scope, share) {
    $scope.dataObject = share.dataObject;
});

myApp.controller('bCtrl', function($scope, share) {
    $scope.dataObject = share.dataObject;
});