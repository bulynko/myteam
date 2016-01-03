angular.module("myteam").controller("cloudlabCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
  function($scope,  $stateParams, $meteor, $rootScope, $state){

 
    console.log(" Controller for cloud lab ..... ");

    $rootScope.loginFlag =2;  
    $scope.projectMgmt='4me';

    $scope.req={ msgTarget: 'PUBLIC' };

//    $scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
 //   $scope.teams = $meteor.collection(Teams).subscribe('teams');

     $meteor.collection(Tasks).subscribe('tasks');

    $scope.tasks  = $meteor.collection(function() {
    //  return Meetings.find({uid : $scope.currentUser._id }, { sort : 0});
     return Tasks.find({ ownerid : $scope.currentUser._id  });
    });   
 
    $scope.tasksMember  = $meteor.collection(function() {
    //  return Meetings.find({uid : $scope.currentUser._id }, { sort : 0});
     return Tasks.find( { msgtarget : 'MEMBERS'  } );
    });    
 
    $scope.tasksMy  = $meteor.collection(function() {
    //  return Meetings.find({uid : $scope.currentUser._id }, { sort : 0});
     return Tasks.find( { $and:[ { msgtarget : 'PRIVATE'  } , { ownerid : $scope.currentUser._id  } ] } );
    });  
 
 
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
        
 $scope.createRequest  = function(myreq,u) {

  if ( myreq != 'undefined')
  {
  var msgtime= moment(new Date());
  var msgtimeText=moment(msgtime).format('DD-MM-YY  HH:mm');
  
  var msg = myreq.msg;
  var msgtarget = myreq.msgTarget;
   Tasks.insert({ tasktype : 'REQ', message: msg , status: 1, msgtarget:  msgtarget , msgtime : msgtimeText , ownerid: u._id , owner: u.emails[0].address });
   }
  };

   $scope.removeRequest  = function(tid) {
   Tasks.remove(tid);
  };

   $scope.copyRequest  = function(msg) {
    $scope.req.msg=msg;
  };
  
 //==========================================================================

    
    
 }]);
