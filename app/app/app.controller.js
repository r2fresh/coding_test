(function() {
	angular.module('app').controller('appCtrl', function($http, $scope) {
		function getData() {
			$scope.data = {};
			$http.get('/books').
				then(function(data) {
					console.log('test');
					console.log(data);
					$scope.data = data.data;
				}, function(err) {
					console.log(err);
				});
		};
		getData();
	});
})();
