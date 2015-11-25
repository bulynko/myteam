Meteor.methods({

    //=========================================================
    removeUser: function (id) {
    console.log( " remove id:" + id);
    Meteor.users.remove({_id: id}); 
  }
  
  
  })
  
  
