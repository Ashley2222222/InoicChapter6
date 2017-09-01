angular.module('App')
.controller('SearchController', function ($scope,$http,$ionicLoading) {
  $scope.model = {term: ''};


  $scope.search = function () {
      $ionicLoading.show();
    $http.get('https://maps.googleapis.com/maps/api/geocode/json',
     {params: {address: $scope.model.term}})
    .success(function(response){
      $scope.results = response.results;
      $ionicLoading.hide();
    }).error(function(err){
      $ionicLoading.show({
        template:err,
        duration:3000
      });
    });
      $ionicLoading.hide();
  };
});
