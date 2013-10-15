var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    development: {
        db: 'mongodb://localhost/marlindb',
        root: rootPath,
        whitelist: ['*'],
        siteUrl: 'http://127.0.0.1:3000',
        redis : {
            port: 17789,
            auth_pass : 'Vxv9soUqzmxBEUWD',
            host: 'pub-redis-17789.us-east-1-4.2.ec2.garantiadata.com'
        },
        email: {
            // mailcatcher settings, must have mailcatcher installed and running
            type : 'SMTP',
            settings : {
                host: "127.0.0.1", 
                port: 1025
            },
            templatesDir : path.join(rootPath, 'app/emails/'),
            from: {
                fullName: 'Marlin Admin',
                email: 'matt@facultycreative.com'
            },
            testingEmails: 'matt@facultycreative.com, matt@facultycreative.com'
        },
        app: {
            name: 'MEAN - A Modern Stack - Development'
        },
        facebook: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    test: {
        db: 'mongodb://facultymatt:scrapple1@dbh46.mongolab.com:27467/marlin-production',
        root: rootPath,
        whitelist: ['http://marlinquoter.herokuapp.com', 'http://marlin-dev.herokuapp.com'],
        siteUrl: 'http://marlinquoter.herokuapp.com',
        redis : {
            port: 6379,
            auth_pass : 'Vxv9soUqzmxBEUWD',
            host: 'pub-redis-17789.us-east-1-4.2.ec2.garantiadata.com'
        },
        email: {
            // mailcatcher settings, must have mailcatcher installed and running
            type : 'SMTP',
            settings : {
                service: 'Mandrill',
                auth: {
                    user: "matt@facultycreative.com",
                    pass: "-FlPq-kjxI5ZEDee4M9dTQ"
                }
            },
            templatesDir : path.join(rootPath, 'app/emails/'),
            from: {
                fullName: 'Marlin Marketing',
                email: 'marketing@marlinfinance.com'
            },
            testingEmails: 'matt@facultycreative.com, matt@facultycreative.com'
        },
        app: {
            name: 'MEAN - A Modern Stack - Test'
        },
        facebook: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    production: {
        db: 'mongodb://facultymatt:scrapple1@dbh46.mongolab.com:27467/marlin-production',
        root: rootPath,
        whitelist: ['http://marlinquoter.herokuapp.com', 'http://marlin-dev.herokuapp.com'],
        siteUrl: 'http://marlinquoter.herokuapp.com',
        redis : {
            port: 6379,
            auth_pass : 'Vxv9soUqzmxBEUWD',
            host: 'pub-redis-17789.us-east-1-4.2.ec2.garantiadata.com'
        },
        email: {
            // mailcatcher settings, must have mailcatcher installed and running
            type : 'SMTP',
            settings : {
                service: 'Mandrill',
                auth: {
                    user: "matt@facultycreative.com",
                    pass: "-FlPq-kjxI5ZEDee4M9dTQ"
                }
            },
            templatesDir : path.join(rootPath, 'app/emails/'),
            from: {
                fullName: 'Marlin Marketing',
                email: 'marketing@marlinfinance.com'
            }
        },
        app: {
            name: 'MEAN - A Modern Stack - Production'
        },
        facebook: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    }
};
