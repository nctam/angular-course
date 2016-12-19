myApp.controller('listFruitCtrl', function($scope) {
    $scope.fruits = [
        {'name': 'Apple', 'priceInDollar': '2.0', 'hotDeal': '1.5', 'day': 'Monday'},
        {'name': 'Pinapple', 'priceInDollar': '1.0', 'hotDeal': '0.5', 'day': 'Tuesday'},
        {'name': 'Strawberry', 'priceInDollar': '2.5', 'hotDeal': '1.8', 'day': 'Wednesday'}
    ];
    $scope.description = 'This controller contains some fruits';

    $scope.employee = {
        'name': 'Tam Nguyen',
        'gender': 'Male',
        'dob': {
            'month': 'Oct',
            'day': '20',
            'year':'1992'
        }
    }

    $scope.currentDate = Date.now();
});

myApp.filter('myFilter', function() {
    return function(text) {
        var chars = text.split('');
        return chars.join('-');
    }
});

