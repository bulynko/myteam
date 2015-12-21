
Meteor.publish("myteam", function (options, searchString) {
	
console.log("SERVER:  from subscribe myteam .....")
return MyTeam.find({});
});

Meteor.publish("teams", function (options, searchString) {
	
return Teams.find({});
//  return Teams.find({
//     $or:[ {"player1": this.userId} ,
//      {"player2": this.userId} ,
//       {"player2": 'none'} ]
//    });

});
