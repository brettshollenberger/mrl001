angular.module('app').factory('authService', ['$http', '$rootScope', 'userService', '$location', '$cookieStore', function($http, $rootScope, User, $location, $cookieStore) {
    
    // dummy data
    var userData = {
        userId: null,
        isAuth: false ,
        currentUser: null,
        authLevel: false
    };
    
    // holds actions for each level where array index is auth level to check
    var allowedActionsByAuthLevel = [];
    
    // we don't set level 0 because its super admin, so they can do anything
    //allowedActionsByAuthLevel[1] = [];
    // 2 = marlin sales rep
    allowedActionsByAuthLevel[2] = ['list-application', 'edit-application', 'list-quote', 'edit-quote', 'list-vendor', 'edit-vendor'];
    
    
    // create and expose service methods
    var exports = {};
    
    exports.login = function(username, password) {
        
        var attemptingUser = User.getOneBy('username', username);
        
        console.log('LOGIN: Attempting user is: ');
        console.log(attemptingUser);
        
        if(!attemptingUser) return false;
        
        if(attemptingUser.password !== password) return false;
        
        // store user data
        userData.currentUser = attemptingUser;
        userData.userId = attemptingUser._id;
        userData.isAuth = true;
        userData.authLevel = attemptingUser.groups[0];
        
        $cookieStore.put('userData', userData);
        
        return true;
        
    };
    
    exports.logout = function() {
        
        console.log('Logging out the user');
        
        // clear user data
        userData.currentUser = null;
        userData.userId = null;
        userData.isAuth = false;
        userData.authLevel = false;
        
        $cookieStore.remove('userData');
        
    };
    
    // checks if user is authenticated
    exports.isAuthenticated = function() {
        return userData.isAuth;
    };
    
    // checks if user is authenticated
    exports.getCurrentUser = function() {
        return userData.currentUser;
    };
    
    // checks if user is authenticated
    exports.getAuthLevel = function() {
        return userData.authLevel;
    };
    
    // checks if user is in a certin group
    exports.isInGroupByName = function(groupName) {
        return false;
    };
    
    
    // private function to Check for a min auth level, 
    // returning true if user passes or false if not.
    function checkLevelForAction(checkAction) {
    
        // attempt to get session data
        var storedUser = $cookieStore.get('userData');
        
        // if we have a stored user, lets load them to userData
        // @note this should prob be done in some sort of "construct" style function 
        // that runs on each page load
        if(storedUser) {
            userData = storedUser;
        }
        
        if(!storedUser || !storedUser.authLevel) return false;
        
        
        // if there is no actions array set
        // case of superadmin
        if(!allowedActionsByAuthLevel[storedUser.authLevel]) {
            return true;
        
        // if action is in the array
        } else if(_.contains(allowedActionsByAuthLevel[storedUser.authLevel], checkAction)) {
            return true;  
            
        // user can't do this! redirect them           
        } else {
            //return true;
            return false;
        }
        
    }
    
    // put in the beginning of a controller to limit access
    exports.canUserDoAction = function(action) {
        
        //console.log('user is requesting permission to: ' + action);
        
        if(!checkLevelForAction(action)) {
            $location.url('/login'); 
        } else {
            return true;
        }
        
    };
    
    // use with ng-show / ng-hide to show buttons and links as needed
    exports.showIfUserCanDoAction = function(action) {
    
        //console.log('should we show link to: ' + action);
    
        return checkLevelForAction(action);
    };
    
    
    // --------
        
    
    return exports;
    
}]);