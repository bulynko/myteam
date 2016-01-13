angular.module('myteam',[
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'ngAnimate'
])


//angular.module('myteam').config(['$mdIconProvider', function ($mdIconProvider) {

  //$mdIconProvider

  //  .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
  //  .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
  //  .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
  //  .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
  //  .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
  //  .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
  //  .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");


//}]);




 function onReady() {
  angular.bootstrap(document, ['myteam'], {
    strictDi: true
  });
 }


if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
  

Meteor.startup(function() {
    Session.set("myteamid", localStorage.getItem("myteamid"));
    Session.set("myteamtag", localStorage.getItem("myteamtag"));
   // process.env.NODE_TLS_REJECT_UNAUTHORIZED= "0" ;    
});




Meteor.myFunctions = { 

//==========================================================
 loadData :  function(info)
 { 
  var persons = [
 { id: 'a1', name: 'John'+info, age: 23 },
 { id: 'a2', name: 'Josh'+info, age: 25 },
 { id: 'a3', name: 'Tom'+info, age: 26 }
];

for (var i = 0; i < persons.length; i++) {
 Persons.insert(persons[i]);
}

},

mytimer: function()
{

  //console.log(" timer message .... ")+projectTimecounter;
  
 projectTimecounter=projectTimecounter;

 timeNow= moment(new Date());
 if (projectTimecounter.diff(timeNow) > 0 )
 { projectTimecounterDelata= projectTimecounter - timeNow;  
  
 mycounterD=moment(projectTimecounterDelata).format('DD');
 mycounterH=moment(projectTimecounterDelata).format('HH');
 mycounterM=moment(projectTimecounterDelata).format('MM');
 mycounterS=moment(projectTimecounterDelata).format('ss');
 }
 else
  {
 mycounterD='00';  
 mycounterH='00';  
 mycounterM='00';  
 mycounterS='00';  	
 }

 
  Session.set('projectDaysSession', mycounterD); 
  Session.set('projectHrsSession', mycounterH); 
  Session.set('projectMinsSession', mycounterM); 
  Session.set('projectSecsSession', mycounterS); 
 // timerVar.insert( { status: 'OK', name: 'Tom' });
},

myscheduler: function()
{
    console.log(" calling server .... "+serverPingConnection); 


 if ( serverPingConnection > -10 )
 serverPingConnection=serverPingConnection-2;

 connection='yellow';
 if ( serverPingConnection < 0 ) connection='red';
 if ( serverPingConnection > 5 ) connection='green';
 
 Session.set('serverConnectionSession', connection) ; 


 Session.set('serverPingSession', serverPingConnection) ; 
   
     Meteor.call('keepAlive' , function(error, result){
      Session.set('serverPingSession', result[0]); 
      serverPingConnection=result[0];
      
     console.log(" Meteor.call keepAlive , result: "+ result);   
  }); 
},


}

