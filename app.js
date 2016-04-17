(function(angular) {

  var app = angular.module('iphoneApp', []);
  app.controller('AppController', AppController);

  function AppController($scope, $http) {
  	// Get JSON flie contents
	$http.get('iphones.json')
		.then(function(response){
		    $scope.iphoneList = response.data;
		    console.log ($scope.iphoneList);
		});
	$scope.search = function (row) {
    return (angular.lowercase(row.name).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
    		angular.lowercase(row.type).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
			angular.lowercase(row.color).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            angular.lowercase(row.capacity).indexOf(angular.lowercase($scope.query) || '') !== -1);
    };
  }

})(window.angular);
