MyTeam = new Mongo.Collection("myteam");
Teams = new Mongo.Collection("teams");


MyTeam.allow({
  insert: function (arg1) {
    return true;
  },

  update: function (arg1) {
    return true;
  },

  remove: function (userName) {
    return userName === 'ADMIN';
  }

});



Teams.allow({
  insert: function (arg1) {
    return false;
  },

  update: function (ag1) {
    return false;
  },

  remove: function (arg1) {
    return false;
  }

});


