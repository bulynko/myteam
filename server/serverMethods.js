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
   
     serverTime= moment(new Date());
     serverTimeID= 99;

      console.log(" calling Meteor-Method keepAlive.....  time:" + serverTime + " id:"+serverTimeID )  ;
     
      return [  serverTime, serverTimeID ] ; 
    },

  
  })
  
  
