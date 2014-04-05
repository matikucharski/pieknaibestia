Meteor.startup(function () {
  // configure mail
  process.env.MAIL_URL=""; 
  //console.log(process.env);
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    console.log(process.env);
    Email.send({
      to: to,
      from: from,
      subject: subject,
      html: text
    });
  },
  doesNothing: function(){
    console.log("I did nothing");
    return "I did nothing";
  }
});