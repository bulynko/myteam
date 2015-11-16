angular.module('myteam',[
  'angular-meteor',
  'ui.router',
  'ngMaterial'
])


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
    
});

