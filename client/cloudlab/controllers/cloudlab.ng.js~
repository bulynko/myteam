angular.module("myteam").controller("cloudlabCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
  function($scope,  $stateParams, $meteor, $rootScope, $state){

 
    console.log(" Controller for cloud lab ..... ");


    $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
    $scope.teams = $meteor.collection(Teams).subscribe('teams');

 //==========================================================================
    
    
    
 }]);
