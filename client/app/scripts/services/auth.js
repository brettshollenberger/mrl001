angular.module('app').factory('authService', ['$http', '$rootScope', 'userService', '$location', '$cookieStore', function($http, $rootScope, User, $location, $cookieStore) {
    
    // dummy data
    var userData = {
        userId: null,
        isAuth: false ,
        currentUser: null
    };
    
    
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
        userData.userId = attemptingUser.id;
        userData.isAuth = true;
        
        $cookieStore.put('userData', userData);
        
        return true;
        
    };
    
    exports.logout = function() {
        
        console.log('Logging out the user');
        
        // clear user data
        userData.currentUser = null;
        userData.userId = null;
        userData.isAuth = false;
        
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
    
    // checks if user is in a certin group
    exports.isInGroupByName = function(groupName) {
        return false;
    };
    
    exports.minPermissionLevel = function(level) {
        
        // attempt to get session data
        var storedUser = $cookieStore.get('userData');
        
        // if we have a stored user, lets save them to userData
        if(storedUser) {
            userData = storedUser;
        }
        
        if(userData.isAuth) {            
            return true;
        } else {
            //return true;
            $location.url('/login');
        }
    };
    
    
    // --------
        
    
    return exports;
    
}]);