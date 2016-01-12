angular.module("myteam").controller("memeberCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
  function($scope,  $stateParams, $meteor, $rootScope, $state){

 
    console.log(" Controller for memeber ..... ");


    $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
    $scope.teams = $meteor.collection(Teams).subscribe('teams');

 //==========================================================================
    
    
    
 }]);
