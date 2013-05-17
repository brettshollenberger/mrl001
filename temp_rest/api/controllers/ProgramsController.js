/*---------------------
	:: Programs 
	-> controller
---------------------*/
var ProgramsController = {
    
    // Fetch a single model from testtable
	find: function(req, res) {
		// No id specified
		if(!req.param('id')) return res.send('No id specified!', 404);
		Program.find(req.param('id')).done(function(err, model) {

			// An error occurred
			if(err) return res.send(err, 500);
			
			// Model not found
			else if(!model) return res.send(404);

			// Subscribe to the models that were returned
			Program.subscribe(req, model);
			
			console.log(model.values);
			
			model.values.vendors = [{'name' : 'Vendor 1'},{'name' : 'Vnedorewerere'}];

			// If a view exists, and this isn't an JSONy request, 
			// pass down model as "model"
			if (res.viewExists && !(req.isAjax || req.isSocket || req.isJson)) return res.view({
				model: model.values
			});

			// Otherwise serve a JSON API
			else return res.json(model.values);
		
		});
	}

};
module.exports = ProgramsController;