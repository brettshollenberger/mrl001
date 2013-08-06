angular
  .module('app')
  .controller('programEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'authService',
    'programService',
    function($rootScope, $scope, $location, $routeParams, Auth, Program) {
       
        Auth.canUserDoAction('edit-program');
       
        $scope.termPeriodOptions = ['Month', 'Year', 'Quarter', 'Bi-Annual'];
       
        // empty program object
        $scope.program = {};
        var program = {};
        // empty logo object, or filepicker gets mad :)
        $scope.program.logo = {};
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigans to program logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
              //console.log(FPFile.url);
              $scope.program.logo.original = FPFile.url;
              $scope.$apply();
            });  
        };
      
        // utility function to go back to the program list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/dashboard/programs');
        };
        
        // get program ID for edit pages
        var programId = $routeParams.id;
        $scope.formAction = 'Add';
        
        
        // get and store the program 
        if(programId) {
            // get the program
            Program.getById(programId).then(function(response){
               $scope.program = response;
               $scope.termLength = $scope.program.rateSheet.termLength;
            });
            
            //console.log($scope.program);
            $scope.formAction = 'Update';
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!programId) {
                
                // create new item
                Program.add($scope.program).then(function(response) {

                });
                
            } else {
                // update existing item
                Program.update($scope.program);
            }
            
            $location.url('/dashboard/programs');
            
        };
        
        
        $scope.tabs = ['Basic Information'];
        
        /**
        * Tab functions. 
        * @todo make into a direct
        *
        */
        $scope.activeTab = 0;
        
        // used for active class
        $scope.isActiveTab = function(id) {
            return $scope.activeTab == id ? true : false;  
        };
        
        // used to set active tab
        $scope.changeTab = function(tab) {
            
            //console.log(tab);
            
            if(!$scope.user._id) return false;
            
            $scope.activeTab = tab;
        };
        
        $scope.addRowToOption = function(theProgram){
            
            var newMin;
            if(_.last(theProgram.costs).max){
                newMin = parseInt(_.last(theProgram.costs).max, 10) + 1;    
            }else{
                newMin = '';
            }
            
            theProgram.costs.push({min: newMin, max:'', rates:[]});
            
            //console.log(_.last(theProgram.costs));
            
            _.each(theProgram.terms, function(item) {
                _.last(theProgram.costs).rates.push({rate: ''});    
            });


        
        };
        
        $scope.addColumnToOption = function(theProgram){
            theProgram.terms.push({length: ''});
            //console.log(theProgram.costs); 
        
            _.each(theProgram.costs, function(item) {
                console.log(item.rates);
                item.rates.push({rate: ''});
            });
        };
        
        
        $scope.adjustValues = function($program, $value, $currentIndex) {
            /*
                console.log('Changing!');
                console.log($value);
                console.log($currentIndex);
            */
            
            //console.log($program);
            
            if($program.costs[$currentIndex + 1]) {
               $program.costs[$currentIndex + 1].min = parseInt($value, 10) + 1; 
            }
            
            
        };
        
        
        $scope.makeNewOption = function() {
            //terms: [{length: 1}, {length: 2}, {length: 3}, {length: 4}],
            //rates: [{rate: 0.96}, {rate: 0.80}, {rate: 0.75}, {rate: 0.75}]
            var newBuyOut = { 
                    name: '', 
                    terms: [],
                    costs: [
                        {
                            min: '',
                            max: '',
                            rates: []
                            
                        }]
                    };
                    
            
            newBuyOut.name = $scope.newOption.name;
            newBuyOut.costs[0].min = $scope.newOption.minCost;
            
            for(var i = 0; i < $scope.newOption.columns; i++){
                newBuyOut.terms.push({length: ''});
            }
            
            for(i = 0; i < $scope.newOption.rows - 1; i++){
                newBuyOut.costs.push({min: '', max: '', rates: []});
            }
            
            _.each(newBuyOut.costs, function(cost){
                _.each(newBuyOut.terms, function(){
                    cost.rates.push({rate: ''});
                });
                console.log('new cost'); 
            });
            
            // needed when creating new rate sheet. 
            if(!$scope.program.rateSheet) $scope.program.rateSheet = {buyoutOptions: []};
            // @todo, this can be removed when the API is mongoose. 
            if(!$scope.program.rateSheet.buyoutOptions) $scope.program.rateSheet.buyoutOptions = [];
            $scope.program.rateSheet.buyoutOptions.push(newBuyOut);
            $scope.newOption = {};
            
        };
        
        
        /**
        * Deletes a row or column from the rate sheet
        * 
        * @param {type} String, Either row|column to indicate if we are removing a row or column! 
        * @param {index} Int, Index from the ngRepeat
        * @param {options} Object, Options object we are manipulating stuff from
        *
        */
        $scope.remove = function(type, index, options) {
            
            console.log(options);
            
            if(type === 'column') {
                
                console.log(options.terms[index]);
                console.log(options);
                
                // remove costs at this index
                _.each(options.costs, function(item) {
                    item.rates.splice(index, 1);
                });
                
                // remove label
                options.terms.splice(index, 1);
                
            } else if (type === 'row') {
                
                // remove costs at this index
                options.costs.splice(index, 1);
                
            }
            
        };
        
    }
  ])
;
