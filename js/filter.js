myApp.controller('listFruitCtrl', function($scope) {
    $scope.fruits = [
        {name: 'Apple', priceInDollar: '2.0', hotDeal: '1.5', dateSale: 'Monday', url:'../images/apple.PNG'},
        {name: 'Pineapple', priceInDollar: '1.0', hotDeal: '0.5', dateSale: 'Monday', url:'../images/pineapple.PNG'},
        {name: 'Strawberry', priceInDollar: '2.5', hotDeal: '1.8', dateSale: 'Wednesday', url:'../images/strawberry.PNG'},
        {name: 'New fruit with hot deal is Monday', priceInDollar: '2.5', hotDeal: '1.8', dateSale: 'Wednesday', url:'../images/strawberry.PNG'}
    ];
    $scope.description = 'This controller contains some fruits';

    $scope.selectFruitByDay = '';

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

