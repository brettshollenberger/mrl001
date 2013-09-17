/*
var Notifier = require('notifier');
  
   var options = {
      service: 'sendgrid', // or 'sendgrid'
      APN: false,
      email: true,
      tplType: 'jade', // if you want to use ejs as templating system
      actions: ['comment', 'like'],
      tplPath: require('path').resolve(__dirname, './templates'),
      key: 'nfb2ijzt',
      sendgridUser: 'app16123456@heroku.com'
    };

    
    var notifier = new Notifier(options);
    
    console.log(options.tplPath);
    
    console.log('Notifier initialized');
    
    var comment = {
      to: 'Tom',
      from: 'Harry'
    };
    
    var options = {
      to: 'matt@facultycreative.com',
      subject: 'Harry says Hi to you',
      from: 'harry@madhums.me',
      locals: comment // should be the object containing the objects used in the templates
    };
    
    notifier.send('comment', options, function (err) {
      if (err) return console.log(err);
      console.log('Successfully sent Notifiaction!');
    });
  


*/






var nodemailer = require('nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
        service: 'Mandrill', // use well known service.
                            // If you are using @gmail.com address, then you don't
                            // even have to define the service name
        auth: {
            user: "matt@facultycreative.com",
            pass: "-FlPq-kjxI5ZEDee4M9dTQ"
        }
    });

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'Sender Name <matt@example.com>',

    // Comma separated list of recipients
    to: '"Receiver Name" <matt@facultycreative.com>',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', //

    headers: {
        'X-Laziness-level': 1000
    },

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@node"/></p>',

    // An array of attachments
    attachments:[

        // String attachment
        {
            fileName: 'notes.txt',
            contents: 'Some notes about this e-mail',
            contentType: 'text/plain' // optional, would be detected from the filename
        },

        // Binary Buffer attachment
        {
            fileName: 'image.png',
            contents: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                                 '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                                 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

            cid: 'note@node' // should be as unique as possible
        },

        // File Stream attachment
        {
            fileName: 'nyan cat ✔.gif',
            filePath: __dirname+"/nyan.gif",
            cid: 'nyan@node' // should be as unique as possible
        }
    ]
};

console.log('Sending Mail');
transport.sendMail(message, function(error){
    if(error){
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');

    // if you don't want to use this transport object anymore, uncomment following line
    //transport.close(); // close the connection pool
});