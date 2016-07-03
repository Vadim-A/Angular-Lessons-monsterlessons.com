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

//lesson 6
app.controller('mainCtrl6', function ($scope) {
    this.myLesson = 'MainLesson';
    this.addLesson = function () {
        console.log('addLesson');
    }
    $scope.mainCtrl6 = this; // вместо as в шаблоне
});

app.controller('firstCtrl6', function ($scope) {
    this.myLesson = 'FirstLesson';
    $scope.myLesson = 'Lesson 1ctr';
});

app.controller('secondCtrl6', function ($scope) {
    this.myLesson = 'SecondLesson';
});

//lesson 7
app.directive('foo', function () {
    return {
        link: function (scope, element, attrs) {
            console.log('this is my directive');
            console.log('scope', scope);
            console.log('element', element);
            console.log('attrs', attrs);
            element.text('This is my magic directive');
            element.on('click', function () {
                console.log('click');
                if (element.text() === 'foo') {
                    element.text('bar');
                } else {
                    element.text('foo');
                }
            });
        }
    };
});

//lesson 8
app.controller('mainCtrl8', function ($scope) {
    $scope.money = "244";
    $scope.money1 = "1.22$";
    $scope.money2 = "$2.33";
    $scope.money3 = "4.33";
});

app.filter('moneyFilter', function () {
    return function (str) {
        console.log('str', str);
        var lastChar = str.slice(-1);
        var firstChar = str.slice(0, 1);

        if (lastChar === '$') {
            slicedPart = str.slice(0, str.length - 1);
            return '$' + slicedPart;
        } else if (firstChar === '$') {
            return str;
        } else {
            return '$' + str;
        }

    }
});

//lesson 9
app.directive('fooBar', function () { //NOTE: Ќужно помнить, что директивы описываютс€ через camelCase, а в шаблоне вызываютс€ через тире.
    return {
        //Ѕез разницы будет ли это атрибут или элемент, директива будет работать одинаково.
        //restrict: 'A', // ¬ нашей директиве мы указали, restrict в атрибут. Ёто значит, что директива будет реагировать только на атрибут, а на элемент не будет. 
        //restrict: 'E', // ≈сли же мы помен€ем restriction на E, то директива будет срабатывать только на элементе.
        //restrict: 'EA', // ѕо умолчанию у директив стоит запись EA
        //restrict: 'C', // “ретье ограничение называетс€ class
        //restrict: 'M', // „етвертый вариант - это задать директиву в виде комментари€
        restrict: 'EACM', //¬се эти ограничени€ можно указывать одновременно
        link: function () {
            console.log('fooBar');
        }
    }
});
