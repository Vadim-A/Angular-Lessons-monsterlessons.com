var app = angular.module('app', []);

//lesson 2
app.controller('myCtrl', function ($scope) {
	$scope.hello = 55;
	$scope.myBook = 'AngularJS';
});

//lesson 3
app.factory('myFactory', function () {
    return {
        hello: 'hello world'
    }
});

app.controller('firstCtrl', function($scope, myFactory) {
  console.log('firstCtrl');
  $scope.myFactory = myFactory;
  $scope.hello = 'hello world';
});

app.controller('secondCtrl', function($scope, myFactory) {
  console.log('secondCtrl');
  $scope.myFactory = myFactory;
  $scope.hello = 'hello world';
});

//lesson 4
app.controller('ctrl_l4', function($scope, myFactory_l4) {
	$scope.hello = 'hello world';
	$scope.myFactory = myFactory_l4;
	$scope.getBookmark = function () {
		return 'My bookmark';
	};
	$scope.setHello = function (text) {
		$scope.hello = text;
	};
});

app.factory('myFactory_l4', function () {
  return {
    hello: function () {
      return 'hello world111';
    }
  }
})

//lesson 5
app.controller('myBooksCtrl', function ($scope) {
    $scope.showBook = function () {
        console.log('This is some book');
    };
});

app.controller('angularBookCtrl', function ($scope) {
    $scope.showBook = function () {
        console.log('This is AngularJS book');
    };
});

app.controller('emberBookCtrl', function ($scope) {
    //$scope.showBook = function () {
    //    console.log('This is ember book');
    //};
});

//gh1
//gh2
//gh3