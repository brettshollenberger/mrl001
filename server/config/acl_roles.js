module.exports = function(app, config, passport, user, acl, acl2) {


    /**
    * https://github.com/OptimalBits/node_acl
    */
    
    var customCheck = function() {
        console.log('custom check???');
    };
    
    
    

    acl2.allow([
        {
            roles:['self'], 
            allows:[
                {resources:'users', permissions:['view', 'update', 'changePassword']}
            ]
        },
        {
            roles:['rep'], 
            allows:[
                {resources:'vendors', permissions:['list', 'view', 'update']},
                {resources:['applications','quotes'], permissions:['list', 'view', 'create', 'update']}
            ]
        },
        {
            roles:['guest'], 
            allows:[
                {resources:'vendors', permissions:['view']},
                {resources:['quotes'], permissions:['list', 'view', 'create', 'update']},
                {resources:['applications'], permissions:['list', 'view', 'create']}
                
            ]
        }
    ], function(err) {});
    
    acl2.allow('admin', '*', '*', function() {});



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
    acl.addResource("vendors");
    acl.addResource("quotes");
    
    
    
    // Set up access rules (LIFO)
    acl.deny(); 
    acl.allow("admin");                            
    acl.allow("admin", "vendors", ["create", "edit", "view", "update"]);                       // allow admin access to everything
    acl.allow("member", "blog", "comment");   // allow members to comment on blogs
    acl.allow(null, "blog", "view");          // allow everyone to view the blogs
    acl.allow("guest", "blog", ["list", "search"]); // supports arrays of actions
    
    acl.allow("salesRep", "quotes", ["list"]);



};