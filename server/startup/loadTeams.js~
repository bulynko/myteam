Meteor.startup(function () {

  if (Teams.find().count() === 0) {
    var g = [
      {'name': 'SERVICES',      'description': 'All GBM Services'},
      {'name': 'SERVICES-HO',   'description': 'HO Services team'},
      {'name': 'SERVICES-SUPPORT',   'description': 'HO Support team'},
      {'name': 'SERVICES-PLATFORM',   'description': 'Platform Services team'},
      {'name': 'SERVICES-CLOUD',  'description': 'Cloud team'}
    ];
    for (var i = 0; i < g.length; i++)
      Teams.insert({name: g[i].name, description: g[i].description});
  }
  
    if (Meteor.users.find().count() === 0) {
  //   Accounts.createUser({ email: "cloud" , password: "Cloud"  } );  	
  
   //Meteor.call('createUser', { email: 'cloud' , password: 'cloud'  } );
  
   // Meteor.call('createUser', {username: "cloud", password: "cloud"});
  
  //  Meteor.users.insert({username: 'cloud', emails: ['cloudteam@dummy.com'], name: 'cloud', 
  //  services:     {password: {srp: Meteor._srp.generateVerifier('cloud')}}}); 
 
  }
    
});
