// Routes
// *********************
// 
// This table routes urls to controllers/actions.
//
// If the URL is not specified here, the default route for a URL is:  /:controller/:action/:id
// where :controller, :action, and the :id request parameter are derived from the url
//
// If :action is not specified, Sails will redirect to the appropriate action 
// based on the HTTP verb: (using REST/Backbone conventions)
//
//		GET:	/:controller/read/:id
//		POST:	/:controller/create
//		PUT:	/:controller/update/:id
//		DELETE:	/:controller/destroy/:id
//
// If the requested controller/action doesn't exist:
//   - if a view exists ( /views/:controller/:action.ejs ), Sails will render that view
//   - if no view exists, but a model exists, Sails will automatically generate a 
//       JSON API for the model which matches :controller.
//   - if no view OR model exists, Sails will respond with a 404.
//
module.exports.routes = {
	
	// To route the home page to the "index" action of the "home" controller:
	'/' : {
		controller	: 'home'
	},

	// If you want to set up a route only for a particular HTTP method/verb 
	// (GET, POST, PUT, DELETE) you can specify the verb before the path:
	// 'post /signup': {
	//		controller	: 'user',
	//		action		: 'signup'
	// }

	// Keep in mind default routes exist for each of your controllers
	// So if you have a UserController with an action called "juggle" 
	// a route will be automatically exist mapping it to /user/juggle.
	//
	// Additionally, unless you override them, new controllers will have 
	// create(), find(), findAll(), update(), and destroy() actions, 
	// and routes will exist for them as follows:
	/*

	// Standard RESTful routing
	// (if index is not defined, findAll will be used)
	
	*/	
	
	'get /api/application': {
		controller	: 'application',
		action		: 'index'
	},
	'get /api/application/:id': {
		controller	: 'application',
		action		: 'find'
	},
	'post /api/application': {
		controller	: 'application',
		action		: 'create'
	},
	'put /api/application/:id': {
		controller	: 'application',
		action		: 'update'
	},
	'delete /api/application/:id': {
		controller	: 'application',
		action		: 'destroy'
	},
	
	
	
	'get /api/customer': {
		controller	: 'customer',
		action		: 'index'
	},
	'get /api/customer/:id': {
		controller	: 'customer',
		action		: 'find'
	},
	'post /api/customer': {
		controller	: 'customer',
		action		: 'create'
	},
	'put /api/customer/:id': {
		controller	: 'customer',
		action		: 'update'
	},
	'delete /api/customer/:id': {
		controller	: 'customer',
		action		: 'destroy'
	},
	
	
	
	'get /api/program': {
		controller	: 'program',
		action		: 'index'
	},
	'get /api/program/:id': {
		controller	: 'program',
		action		: 'find'
	},
	'post /api/program': {
		controller	: 'program',
		action		: 'create'
	},
	'put /api/program/:id': {
		controller	: 'program',
		action		: 'update'
	},
	'delete /api/program/:id': {
		controller	: 'program',
		action		: 'destroy'
	},
	
	
	
	'get /api/quote': {
		controller	: 'quote',
		action		: 'index'
	},
	'get /api/quote/:id': {
		controller	: 'quote',
		action		: 'find'
	},
	'post /api/quote': {
		controller	: 'quote',
		action		: 'create'
	},
	'put /api/quote/:id': {
		controller	: 'quote',
		action		: 'update'
	},
	'delete /api/quote/:id': {
		controller	: 'quote',
		action		: 'destroy'
	},
	
	
	
	'get /api/user': {
		controller	: 'user',
		action		: 'index'
	},
	'get /api/user/:id': {
		controller	: 'user',
		action		: 'find'
	},
	'post /api/user': {
		controller	: 'user',
		action		: 'create'
	},
	'put /api/user/:id': {
		controller	: 'user',
		action		: 'update'
	},
	'delete /api/user/:id': {
		controller	: 'user',
		action		: 'destroy'
	},
	
	
	
	'get /api/vendor': {
		controller	: 'vendor',
		action		: 'index'
	},
	'get /api/vendor/:id': {
		controller	: 'vendor',
		action		: 'find'
	},
	'post /api/vendor': {
		controller	: 'vendor',
		action		: 'create'
	},
	'put /api/vendor/:id': {
		controller	: 'vendor',
		action		: 'update'
	},
	'delete /api/vendor/:id': {
		controller	: 'vendor',
		action		: 'destroy'
	}
	
};