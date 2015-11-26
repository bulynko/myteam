angular.module("myteam").controller("myteamCtrl", ['$scope', '$meteor', '$rootScope', '$state', '$location',
  function($scope, $meteor, $rootScope, $state, $location){



    $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
    $scope.teams = $meteor.collection(Teams).subscribe('teams');

    $scope.theproject = 'WHAT';
    $scope.projectMgmt="STATUS";

    $rootScope.loginFlag =1; 

    
 //  $scope.t1={ name  : 'Equipment order' , status : '100%'  };
 //  $scope.t2={ name  : 'Cloud Design' , status : '10%'  };
 // t3={ name  : 'Instillation and Configuration' , gameType : '0%'  };
 
   $scope.u1={ name  : 'Marcin' , contact : '050-7483280' , role : 'Tech Lead' };
   $scope.u2={ name  : 'Sheniyas' , contact : '050-1213838' , role : 'Linux'  };    
   $scope.u3={ name  : 'Suraj' , contact : '055-3323342', role : ''   };    
   $scope.u4={ name  : 'Adnan' , contact : '050-1291428' , role : 'Networking'  };  
   $scope.u5={ name  : 'Nooruddin' , contact : '050-.....' , role : 'IBM Cloud'  };
   $scope.u6={ name  : 'Vijay' , contact : '052-5790357' , role : 'Open Stack'  };

   $scope.m1={ name  : 'Cloud Lab Planning' , when : '19-Nov 10am'  };
   $scope.m2={ name  : 'Cloud Network Workshop' , when : '13-Nov 10am'  };
   
    $scope.p3= { phasename :'Project  Started' , info : '1-NOV-2015' };
    $scope.p2= { phasename :'Equipment Ordered' , info : '24-NOV-2015' };
    $scope.p1= { phasename :'Planning Phase ' , info : 'in progress' };
    
  //======================================================================

 $scope.memberLogin = function(myuser) {

  var u = myuser.email;  
  var p = myuser.pass;  

 $scope.loginErrorMessage="Loging ..... try again ! " + u;
 
 // if ((u === "cloud@cloud.com" ) || (  u === "cloudadmin@gbmme.com" ))
  if ( u != "cloudteam@gbmme.com" ) 
  {
     
    $scope.loginErrorMessage="Loging as  " + u;
      
   //  Meteor.loginWithPassword('cloudteam@gbmme.com', 'cloud');
     Meteor.loginWithPassword(u, p);
     $state.go("cloudlab");   
  }
  else{
    $scope.loginErrorMessage="Error memeber login ..... try again ! " + u;
  } 
   
  };

}]);

 
