/*---------------------
	:: Users 
	-> controller
---------------------*/
var UsersController = {

	// To trigger this action locally, visit: `http://localhost:port/users/applications`
	applications: function (req,res) {

		// This will render the view: /Applications/MAMP/htdocs/marlin/mrl001/temp_rest/views/users/applications.ejs
		res.view();

	}

};
module.exports = UsersController;