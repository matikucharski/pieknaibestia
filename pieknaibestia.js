if (Meteor.isClient) {
  Template.message.header = function () {
    return "Ślub Basi i Mateusza";
  };
  Template.message.info = function () {
    return "Wkrótce więcej informacji...";
  };  

  Template.message.events({
    'click .info' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
