describe('Authentication', function() {
            
    describe('Password protect dashboard', function() {
    
        it('Should protect /dashboard/programs', function() {
            
            browser().navigateTo('/logout');
            
            browser().navigateTo('/dashboard/programs');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/programs/new');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/programs/1');
            expect(browser().location().url()).toEqual('/login');
        });
        
        it('Should protect /dashboard/vendors', function() {
            
            browser().navigateTo('/logout');
            
            browser().navigateTo('/dashboard/vendors');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/vendors/new');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/vendors/1');
            expect(browser().location().url()).toEqual('/login');
        });
        
        it('Should protect /dashboard/quotes', function() {
            
            browser().navigateTo('/logout');
            
            browser().navigateTo('/dashboard/quotes');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/quotes/new');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/quotes/1');
            expect(browser().location().url()).toEqual('/login');
        });
        
        it('Should protect /dashboard/applications', function() {
            
            browser().navigateTo('/logout');
            
            browser().navigateTo('/dashboard/applications');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/applications/new');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/applications/1');
            expect(browser().location().url()).toEqual('/login');
        });
        
        it('Should protect /dashboard/users', function() {
            
            browser().navigateTo('/logout');
            
            browser().navigateTo('/dashboard/users');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/users/new');
            expect(browser().location().url()).toEqual('/login');
            browser().navigateTo('/dashboard/users/1');
            expect(browser().location().url()).toEqual('/login');
        });
        
    }); 
    
    
    describe('Allow public access to quoter and viewing quotes', function() {
    
        it('Should allow public access to quoter tool', function() {
            
            browser().navigateTo('/logout');
            
            browser().navigateTo('/tools/quoter');
            expect(browser().location().url()).toEqual('/tools/quoter');
            
            browser().navigateTo('/tools/quoter/1');
            expect(browser().location().url()).toEqual('/tools/quoter/1');
        });
        
    });
    
    describe('Logging into the dashboard', function() {
    
        it('Should provide a login form', function() {
            
            browser().navigateTo('/logout');
            
            browser().navigateTo('/login');
            input('email').enter('matt@facultycreative.com');
        });
        
        it('Should deny users logging in when they enter the wrong password', function() {
            browser().navigateTo('/login');
            input('email').enter('matt@facultycreative.com');
            input('password').enter('matt111');
            element('#login').click();
            expect(browser().location().url()).toEqual('/login');
        });
        
        it('Should deny users logging in when they enter the wrong email', function() {
            browser().navigateTo('/login');
            input('email').enter('matt@facultycreative.comssss');
            input('password').enter('matt');
            element('#login').click();
            expect(browser().location().url()).toEqual('/login');
        });
        
        it('Should allow user to login with correct credentials', function() {
            browser().navigateTo('/login');
            input('email').enter('matt@facultycreative.com');
            input('password').enter('matt');
            element('#login').click();
            expect(browser().location().url()).toEqual('/dashboard/vendors');
        });
        
        it('Should allow users to logout', function() {
            browser().navigateTo('/login');
            input('email').enter('matt@facultycreative.com');
            input('password').enter('matt');
            element('#login').click();
            element('#logout').click();
            expect(browser().location().url()).toEqual('/login');
        });
        
        
    });
            
    
});    
