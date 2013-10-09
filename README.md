# Marlin Quoter

## Requirements
- Redis [http://redis.io/download](http://redis.io/download)
- Mongo database
- Heroku (For deployment)
- Install bower and grunt and drunt-cli globally `$ npm install -g yo bower grunt-cli`

## Development Server
- Run NPM and bower with `$ npm install` and `bower install`. This will make sure your dependencies are all up to date. 
- Start Redis (as per documentation) `$ redis-server`. If you've started it before and are having trouble getting it running, try `$ killall redis-server`. 
- Start mongo `mongod`
- Set Node Environment `$ export NODE_ENV=development` and verify with `$ echo $NODE_ENV`
- From the project folder, seed the database by running `node server/seed.js`. You are running a node app this way. You could do the same by running `$ cd server` and then `$node seed`.
- Start the server `$ grunt server`

## Git Workflow
- All features, refactors, etc. should be in a seperate branch. When complete push this branch and issue a pull request.

## Merge Requirements 
- Please comment your code. Inline comments are great and block comments are even better. See below for commenting guide. A good test for what needs to be commented is to step away from your code for 10 minutes. Come back, can you figure what's happening? What that variable was for? Comment it!
- All branches MUST be tested cross browser, especially IE 8, to be considered. Copy the following into your pull request description for easy reference: 

`

    Needed before merge
    - [ ] Tested in IE8 
    - [ ] Tested in Chrome
    - [ ] Tested in Safari
    - [ ] Tested in Firefox

    - [ ] Code commented
    - [ ] Console logs removed. Console.info .warn and .error can remain. 
    
    @note copy this into your PR description. The [ ] boxes will turn into check boxes on github!

` 

## How to test in IE
- If you are running parallals, in your config set your parallals > options > hardware to use 'wifi' instead of 'shared'
- Figure out the ip of your mac by going to prefences > network. 
- Then, cange the ip in server/server.js `var ip = '127.0.0.1';` to be the ip of your mac.
- Then, in client/app.js change `base_url: 'http://127.0.0.1:3000/api/v1/'` to your ip. 
- Run `grunt server`. You should now have access to the site using your ip from any computer on the same network.     


## Style Guides
Comment style guide 

    /**
    * -------------------------------------
    * A block comment is great for setting up a series of functions.
    * Also great to include at the top of a file to describe what will happen within. 
    * -------------------------------------
    * @note Break lines so they don't wrap super long. 
    * @todo and @note are a must
    *
    */
    
    // inline comment is great for something short