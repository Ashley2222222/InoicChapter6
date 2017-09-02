angular.module('App')
.controller('SearchController', function ($scope,$http,$ionicLoading) {
  $scope.model = {term: ''};


  $scope.search = function () {
      $ionicLoading.show();
    $http.get('https://maps.googleapis.com/maps/api/geocode/json',{params: {address: $scope.model.term}}).success(function(response){
      $scope.results = response.results;
      $ionicLoading.hide();
    }).error(function(err){
    // 执行失败的回调函数，会接受一个error对象作为参数  
          // error拥有一个code属性和三个常量属性TIMEOUT、PERMISSION_DENIED、POSITION_UNAVAILABLE  
          // 执行失败时，code属性会指向三个常量中的一个，从而指明错误原因  
                $scope.results = response.results;
          switch($scope.results){  
               case $scope.results.TIMEOUT:  
                    console.log('超时');  
                    break;  
               case $scope.results.PERMISSION_DENIED:  
                    console.log('用户拒绝提供地理位置');  
                    break;  
               case $scope.results.POSITION_UNAVAILABLE:  
                    console.log('地理位置不可用');  
                    break;  
               default:  
                    break;  
          }  
    });
      $ionicLoading.hide();
  };
});
