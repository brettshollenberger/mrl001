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
  
