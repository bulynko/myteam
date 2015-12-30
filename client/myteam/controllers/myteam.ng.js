angular.module("myteam").controller("myteamCtrl", ['$scope', '$meteor', '$rootScope', '$state', '$location',
  function($scope, $meteor, $rootScope, $state, $location){

//    $scope.= $meteor.collection(Tasks).subscribe('tasks');

     $meteor.collection(Tasks).subscribe('tasks');
    $scope.tasks  = $meteor.collection(function() {
    //  return Meetings.find({uid : $scope.currentUser._id }, { sort : 0});
     return Tasks.find({ msgtarget : 'PUBLIC'  });
    });   

   $meteor.session('projectDaysSession').bind($scope, 'mycounterD');
   $meteor.session('projectHrsSession').bind($scope, 'mycounterH');
   $meteor.session('projectMinsSession').bind($scope, 'mycounterM');
   $meteor.session('projectSecsSession').bind($scope, 'mycounterS');

    //projectTimecounter= moment(new Date());;
    projectTimecounter= moment('2016-01-08');
    Meteor.setInterval(Meteor.myFunctions.mytimer, 1000 );

    $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
    $scope.teams = $meteor.collection(Teams).subscribe('teams');

    $scope.theproject = 'WHAT';
    $scope.projectMgmt="STATUS";

    $rootScope.loginFlag =1; 

    
 //  $scope.t1={ name  : 'Equipment order' , status : '100%'  };
 //  $scope.t2={ name  : 'Cloud Design' , status : '10%'  };
 // t3={ name  : 'Instillation and Configuration' , gameType : '0%'  };
 
   $scope.u1={ name  : 'Marcin' , contact : '050-7483280' , role : 'Tech Lead' ,logo: "img/openstack.jpg"  };
   $scope.u2={ name  : 'Sheniyas' , contact : '050-1213838' , role : 'Linux' ,logo: "img/red-hat-logo.jpg"  };    
   $scope.u3={ name  : 'Suraj' , contact : '055-3323342', role : 'GBM Cloud' , logo: "img/login-page-logo.png"  };    
   $scope.u4={ name  : 'Adnan' , contact : '050-1291428' , role : 'Networking' ,logo: "img/cisco.png"  };  
   $scope.u5={ name  : 'Nooruddin' , contact : '055-7754759' , role : 'IBM Cloud' ,logo: "img/ibm.png"  };
   $scope.u6={ name  : 'Vijay' , contact : '052-5790357' , role : 'Open Stack' ,logo: "img/openstack.jpg"  };
   $scope.u7={ name  : 'Ramesh' , contact : '052-8841491' , role : 'VMWare' ,logo: "img/vmware.png"  };


   $scope.m1={ name  : 'Cloud Lab Planning' , when : '17-Dec 10am'  };
   $scope.m2={ name  : 'Cloud Network Workshop' , when : '28-Dec 10am'  };
   
    $scope.p3= { phasename :'Project  Started' , info : '1-NOV-2015' ,logo: "img/ok.png" };
    $scope.p2= { phasename :'Equipment Ordered' , info : '24-NOV-2015' ,logo: "img/ok.png" };
    $scope.p1= { phasename :'Planning Phase ' , info : 'in progress' ,logo: "img/work.png" };
    
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

 
