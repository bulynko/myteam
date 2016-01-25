angular.module("myteam").controller("loginCtrl", ['$scope', '$meteor', '$rootScope', '$state','$mdDialog',
  function($scope, $meteor, $rootScope, $state,$mdDialog){
 
   console.log(" Login-Controller..... ");
   Meteor.logout();  

    $rootScope.loginFlag =0;  

    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');    
    
   $scope.userLoginButton = function(myuser) {

  var c = myuser.code;  

  if ((c === "GBM" ) || ( c === "cloud" )  )
  {
     console.log(" code accepted ! "+c);
     Accounts.createUser({ email: 'cloudteam@gbmme.com' , password: 'cloud'  } );  	
     Accounts.createUser({ email: 'cloudadmin@gbmme.com' , password: 'cloudadmin'  } );  	
   //  Meteor.logout();  
    //  Accounts.createUser({ email: 'cloudteam@gbmme.com' , password: 'cloud'  } );  	
   //  Meteor.logout();  
   //  Meteor.loginWithPassword('cloudteam@gbmme.com', 'cloud');  
     $state.go("teamview");   

  }
  else {
    $scope.loginErrorMessage="Error Login ..... try again ! " ;
   }
   
  };


 $scope.userLogout = function() {
  
  Meteor.logout();  
  $state.go("loginStart");   
     
  };

//---------------------------------------
 
  
  //-------------------------------------------------------------------------

    $scope.openAboutDialog = function(){

      $mdDialog.show({
       // controller: 'AddNewPartyCtrl',
        templateUrl: 'client/include/include_about.html',
        clickOutsideToClose:true,
      })
    };
//-------------------------------------------------
    $scope.openVersionDialog = function(){

      $mdDialog.show({
        templateUrl: 'client/include/include_version.html',
        clickOutsideToClose:true,
      })
    };
//-------------------------------------------------


}]);

