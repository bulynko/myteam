angular.module("myteam").controller("cloudlabCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
  function($scope,  $stateParams, $meteor, $rootScope, $state){

 
    console.log(" Controller for cloud lab ..... ");

    $rootScope.loginFlag =1;  

    $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
    $scope.teams = $meteor.collection(Teams).subscribe('teams');

 //==========================================================================
    
    
    
 }]);
