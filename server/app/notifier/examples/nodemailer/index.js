
// # node-email-templates

// ## Example with [Nodemailer](https://github.com/andris9/Nodemailer)

var path           = require('path')
  , templatesDir   = path.resolve(__dirname, '..', 'templates')
  , emailTemplates = require('email-templates')
  , nodemailer     = require('nodemailer');

emailTemplates(templatesDir, function(err, template) {

  if (err) {
    console.log(err);
  } else {

    // ## Send a single email

    // Prepare nodemailer transport object
    var transport = nodemailer.createTransport("SMTP", {
      service: 'Mandrill', // use well known service.
                            // If you are using @gmail.com address, then you don't
                            // even have to define the service name
        auth: {
            user: "matt@facultycreative.com",
            pass: "-FlPq-kjxI5ZEDee4M9dTQ"
        }
    });

    // An example users object with formatted email function
    var locals = {
      email: 'matt@facultycreative.com',
      name: {
        first: 'Mamma',
        last: 'Mia'
      },
      pasta: 'special sauce'
    };

    // Send a single email
    template('pasta-dinner', locals, function(err, html, text) {
      if (err) {
        console.log(err);
      } else {
        transport.sendMail({
          from: 'Spicy Meatball <spicy.meatball@spaghetti.com>',
          to: locals.email,
          subject: 'Anoather Mangia gli spaghetti con polpette!',
          html: html,
          // generateTextFromHTML: true,
          text: text
        }, function(err, responseStatus) {
          if (err) {
            console.log(err);
          } else {
            console.log(responseStatus.message);
          }
        });
      }
    });


    // ## Send a batch of emails and only load the template once

    // Prepare nodemailer transport object
    var transportBatch = nodemailer.createTransport("SMTP", {
      service: 'Mandrill', // use well known service.
                            // If you are using @gmail.com address, then you don't
                            // even have to define the service name
        auth: {
            user: "matt@facultycreative.com",
            pass: "-FlPq-kjxI5ZEDee4M9dTQ"
        }
    });

    // An example users object
    var users = [
      {
        email: 'matt@facultycreative.com',
        name: {
          first: 'Pappa',
          last: 'Pizza'
        },
        pasta: 'special sauce'
      },
      {
        email: 'matt@facultycreative.com',
        name: {
          first: 'Mister',
          last: 'Geppetto'
        },
        pasta: 'special sauce'
      }
    ];

    // Custom function for sending emails outside the loop
    //
    // NOTE:
    //  We need to patch postmark.js module to support the API call
    //  that will let us send a batch of up to 500 messages at once.
    //  (e.g. <https://github.com/diy/trebuchet/blob/master/lib/index.js#L160>)
    var Render = function(locals) {
      this.locals = locals;
      this.send = function(err, html, text) {
        if (err) {
          console.log(err);
        } else {
          transportBatch.sendMail({
            from: 'Spicy Meatball <spicy.meatball@spaghetti.com>',
            to: locals.email,
            subject: 'Another Mangia gli spaghetti con polpette!',
            html: html,
            // generateTextFromHTML: true,
            text: text
          }, function(err, responseStatus) {
            if (err) {
              console.log(err);
            } else {
              console.log(responseStatus.message);
            }
          });
        }
      };
      this.batch = function(batch) {
        batch(this.locals, templatesDir, this.send);
      };
    };

    // Load the template and send the emails
    template('pasta-dinner', true, function(err, batch) {
      for(var user in users) {
        var render = new Render(users[user]);
        render.batch(batch);
      }
    });

  }
});

