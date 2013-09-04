module.exports = function(app, config, passport, user, acl, acl2) {


    /**
    * https://github.com/OptimalBits/node_acl
    */
    acl2.allow('member', 'blogs', ['edit','view', 'delete'], function(err) {
        if(err) throw(err);
    });



    /**
    * ------------
    * https://github.com/djvirgen/virgen-acl 
    * ------------
    */

    // Set up roles
    acl.addRole("guest");                     // guest user, inherits from no one
    acl.addRole("member", "guest");           // member inherits permissions from guest
    acl.addRole("admin");                     // Admin inherits from no one
    
    // Set up resources
    acl.addResource("blog");                  // blog resource, inherits no resources
    
    // Set up access rules (LIFO)
    acl.deny();                               // deny all by default
    acl.allow("admin", "vendors", ["create", "edit", "view", "update"]);                       // allow admin access to everything
    acl.allow("member", "blog", "comment");   // allow members to comment on blogs
    acl.allow(null, "blog", "view");          // allow everyone to view the blogs
    acl.allow("guest", "blog", ["list", "search"]); // supports arrays of actions
    



};