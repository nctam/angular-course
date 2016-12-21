myApp.controller('workingAngularCtrl', function($scope) {
    $scope.greeting = 'Greeting from Tam'

    $scope.$watch('greeting', function() {
        if($scope.greeting != 'Greeting from Tam') {
            $scope.msg = 'Please set greeting as default'
        } else {
            $scope.msg=''
        }
    });

    var greetings = ['Hi', 'Hello', 'Good morning'];
    var names = ['Ted', 'Marshall', 'Barney'];
    $scope.greetingSentences = [];
    angular.forEach(names, function(name) {
        var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        var tempSentence = randomGreeting + ' ' + name;
        $scope.greetingSentences.push(tempSentence);
    });

    var r = 'background:red';
    var g = 'background:green';
    var testValue = angular.element('<ul></ul>');
    angular.isObject(testValue) ? console.log(testValue + ' %c is an object', g) : console.log(testValue + ' %c is not an object', r);
    angular.isString(testValue) ? console.log(testValue + ' %c is an String', g) : console.log(testValue + ' %c is not an String', r);
    angular.isElement(testValue) ? console.log(testValue + ' %c is an element', g) : console.log(testValue + ' %c is not an element', r);
});

//myApp.config(function($interpolateProvider){
//    $interpolateProvider.startSymbol('<~');
//    $interpolateProvider.endSymbol('~>');
//});

myApp.factory('randomNameService', function($q, $timeout) {
    var fName = ['Marshall', 'Victoria', 'Barney', 'Teddy', 'Robin', 'Lily'];
    var mName = ['Mar', 'Vic', 'Bar', 'Ted', 'Rob', 'Lil' ];
    var lName = ['Erick', 'Bakery', 'Stinson', 'Serbasky', 'Pad'];
    return {
        getName: function(nameType) {
            var defer = $q.defer();
            $timeout(function() {
                var name = '';
                switch (nameType) {
                    case 'first': name = fName[Math.floor(Math.random() * fName.length)];
                        break;
                    case 'middle': name = mName[Math.floor(Math.random() * mName.length)];
                        break;
                    case 'last': name = lName[Math.floor(Math.random() * lName.length)];
                        break;
                }
                defer.resolve(name);
            }, Math.random() * 3000);
            return defer.promise;
        }
    }
});

myApp.controller('usingQALL', function($scope, randomNameService, $q) {
    var firstNamePromise = randomNameService.getName('first');
    var middleNamePromise = randomNameService.getName('middle');
    var lastNamePromise = randomNameService.getName('last');
    //firstNamePromise.then(function(name) {
    //    $scope.firstName = name;
    //});
    //middleNamePromise.then(function(name) {
    //    $scope.middleName = name;
    //});
    //lastNamePromise.then(function(name) {
    //    $scope.lastName = name;
    //});
    var allNamePromise = $q.all([firstNamePromise, middleNamePromise, lastNamePromise]);
    allNamePromise.then(function(data) {
        console.log(data);
        $scope.firstName = data[0];
        $scope.middleName = data[1];
        $scope.lastName = data[2];
    });
});

