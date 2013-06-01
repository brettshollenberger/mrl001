angular.module('app').factory('authService', ['$http', '$rootScope', 'userService', '$location', function($http, $rootScope, User, $location) {
    
    // dummy data
    var userData = {
        userId: null,
        isAuth: false ,
        currentUser: null
    };
    
    
    // create and expose service methods
    var exports = {};
    
    exports.login = function(email, password) {
        
        var attemptingUser = User.getOneBy('email', email);
        
        console.log('LOGIN: Attempting user is: ');
        console.log(attemptingUser);
        
        if(!attemptingUser) return false;
        
        if(attemptingUser.password !== password) return false;
        
        // store user data
        userData.currentUser = attemptingUser;
        userData.userId = attemptingUser.id;
        userData.isAuth = true;
        
        return true;
        
    };
    
    exports.logout = function() {
        
        console.log('Logging out the user');
        
        // clear user data
        userData.currentUser = null;
        userData.userId = null;
        userData.isAuth = false;
        
    };
    
    // checks if user is authenticated
    exports.isAuthenticated = function() {
        return userData.isAuth;
    };
    
    // checks if user is authenticated
    exports.getCurrentUser = function() {
        return userData.currentUser;
    };
    
    // checks if user is in a certin group
    exports.isInGroupByName = function(groupName) {
        return false;
    };
    
    exports.minPermissionLevel = function(level) {
        if(userData.isAuth) {            
            return true;
        } else {
            $location.url('/login');
        }
    };
    
    
    // --------
        
    
    return exports;
    
}]);