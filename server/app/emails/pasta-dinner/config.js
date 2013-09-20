module.exports = {
    defaults: {
    
        // Subject of the message
        subject: 'Nodemailer is unicode friendly ✔', //
    
        headers: {
            'X-Laziness-level': 1000
        },
        
        variables: {
            pasta: 'Undefined'
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
    }
};