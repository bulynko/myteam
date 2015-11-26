Meteor.publish("tasks", function (options, searchString) {
	
return Tasks.find({});

});