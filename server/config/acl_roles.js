module.exports = function(app, config, passport, user, acl) {

    // Set up roles
    acl.addRole("guest");                     // guest user, inherits from no one
    acl.addRole("member", "guest");           // member inherits permissions from guest
    acl.addRole("admin");                     // Admin inherits from no one
    
    // Set up resources
    acl.addResource("blog");                  // blog resource, inherits no resources
    
    // Set up access rules (LIFO)
    acl.deny();                               // deny all by default
    acl.allow("admin");                       // allow admin access to everything
    acl.allow("member", "blog", "comment");   // allow members to comment on blogs
    acl.allow(null, "blog", "view");          // allow everyone to view the blogs
    acl.allow("guest", "blog", ["list", "search"]); // supports arrays of actions
    



};