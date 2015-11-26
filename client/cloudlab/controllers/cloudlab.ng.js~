angular.module("myteam").controller("cloudlabCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
  function($scope,  $stateParams, $meteor, $rootScope, $state){

 
    console.log(" Controller for cloud lab ..... ");

    $rootScope.loginFlag =2;  
    $scope.projectMgmt='4me';

    $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
    $scope.teams = $meteor.collection(Teams).subscribe('teams');

    $scope.tasks = $meteor.collection(Tasks).subscribe('tasks');

 
  //==========================================================================
        
 $scope.changePassword = function(uid,myuser) {


  var p = myuser.password;
  var p2 = myuser.password2;
 
    
  if ( ( p === p2 )  && ( p2.length > 2) )
  {    
    Meteor.call("setPassowrdUser",uid,p2);  
    $scope.passwordErrorMessage="Changing password " ;  
  }  
  else {

   
  	  $scope.meuser.password="";
     $scope.meuser.password2="";
      
     $scope.passwordErrorMessage="Error  .... try again  " ;          	
  }
  };

 //==========================================================================
        
 $scope.createRequest  = function(myreq) {


  var msg = myreq.msg;
   tasks.insert(myreq);

  };

 //==========================================================================

    
    
 }]);
