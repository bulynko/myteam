angular.module("myteam").controller("adminCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
  function($scope,  $stateParams, $meteor, $rootScope, $state){

 
    console.log(" Controller for cloud lab ..... ");

    $rootScope.loginFlag =3; 

 //   $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
 //   $scope.teams = $meteor.collection(Teams).subscribe('teams');

    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
  
 //==========================================================================
    
    
 $scope.registerUser = function(myuser) {

  var u = myuser_email2=myuser.email;
  var p = myuser.password;
  var p2 = myuser.password2;
  var c = myuser.code;  
    
  if ( ( p === p2 )  && ( p.length > 2) )
  {
     //console.log(" code accepted ! "+c);
      Accounts.createUser({email: u, password: p} );  
    //$state.go("loginStart");             
  }  
  else {

    if ( p != p2 )
    {
  	  $scope.newuser.password="";
     $scope.newuser.password2="";
    }
   
   //console.log(" code/pswd ERROR "+c);
   $scope.registerErrorMessage="Error ..... try again ! " ;          	
  }
  };
 //------------------------
  $scope.removeUser = function(uid) {

  	  Meteor.call("removeUser",uid);  

  }; 
    
 //==========================================================================
        
 $scope.changePassword = function(uid,myuser) {

  //var u = myuser_email2=myuser.email;
  var p = myuser.password;
  var p2 = myuser.password2;
 
    
  if ( ( p === p2 )  && ( p2.length > 2) )
  {
     //Accounts.setPassword(uid, p2)        
    Meteor.call("setPassowrdUser",uid,p2);  
  }  
  else {

   
  	  $scope.newuser.password="";
     $scope.newuser.password2="";
      
    //console.log(" code/pswd ERROR "+c);
    $scope.registerErrorMessage="Changing password for  "+myuser.emails[0].address ;          	
  }
  };
 //------------------------
  $scope.removeUser = function(uid) {

  	  Meteor.call("removeUser",uid);  

  }; 
  
    
 }]);