Meteor.methods({

    //=========================================================
    removeUser: function (id) {
    console.log( " remove id:" + id);
    Meteor.users.remove({_id: id}); 
  },
  
   setPassowrdUser: function(uid,pswd)
   {
   	  Accounts.setPassword(uid, pswd)     
    },
    
    //=======================================================================
    keepAlive: function(){

    //console.log(" calling Meteor-Method keepAlive !")  ;
   
    // var serverTime= moment(new Date());
     var serverTimeID= 10;

      console.log(" calling Meteor-Method keepAlive.....   id:"+serverTimeID )  ;
     
      return [  serverTimeID ,'OK' ] ; 
    },

  
  })
  
  
