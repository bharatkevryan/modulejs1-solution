(function (){
	'use strict';
	angular.module('myApp', []).controller('stringController', stringController);
	function stringController($scope){
		$scope.input = "";
		$scope.state = "";
		$scope.calculate = function(){
			function setcolor(color)
			{
				$scope.messageStyle = {
					'color': color
				};
			}
			
			var arr = $scope.input.split(',');
			var len = arr.length;
			if($scope.input == "")
				len-=1;
			if (len==0){
				$scope.state = "Please enter the value!!";
				setcolor("red");
			}
			else if(len>3){
				$scope.state = " it's way too much!!";
				setcolor("green");
			}
			else {
				$scope.state = " Enjoy!!";
				setcolor("green");
			}

		};
	}
})();