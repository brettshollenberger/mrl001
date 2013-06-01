describe('App', function() {
    
    // utility functions
    angular.scenario.matcher('toBeGreaterThanFuture', function(future) {
        return +this.actual > +future.value;
    });
    angular.scenario.matcher('toBeLessThanFuture', function(future) {
        return +this.actual < +future.value;
    });
    
    describe('Authentication', function() {
        
        describe('Password protect dashboard', function() {
        
            it('Should protect /dashboard/programs', function() {
                browser().navigateTo('/dashboard/programs');
                expect(browser().location().url()).toEqual('/login');
                browser().navigateTo('/dashboard/programs/new');
                expect(browser().location().url()).toEqual('/login');
                browser().navigateTo('/dashboard/programs/1');
                expect(browser().location().url()).toEqual('/login');
            });
            
            it('Should protect /dashboard/vendors', function() {
                browser().navigateTo('/dashboard/vendors');
                expect(browser().location().url()).toEqual('/login');
                browser().navigateTo('/dashboard/vendors/new');
                expect(browser().location().url()).toEqual('/login');
                browser().navigateTo('/dashboard/vendors/1');
                expect(browser().location().url()).toEqual('/login');
            });
            
            it('Should protect /dashboard/quotes', function() {
                browser().navigateTo('/dashboard/quotes');
                expect(browser().location().url()).toEqual('/login');
                browser().navigateTo('/dashboard/quotes/new');
                expect(browser().location().url()).toEqual('/login');
                browser().navigateTo('/dashboard/quotes/1');
                expect(browser().location().url()).toEqual('/login');
            });
            
        }); 
        
        
        describe('Allow public access to quoter and viewing quotes', function() {
        
            it('Should allow public access to quoter tool', function() {
                
                browser().navigateTo('/tools/quoter');
                expect(browser().location().url()).toEqual('/tools/quoter');
                
                browser().navigateTo('/tools/quoter/1');
                expect(browser().location().url()).toEqual('/tools/quoter/1');
            });
            
        });
        
        describe('Logging into the dashboard', function() {
        
            it('Should provide a login form', function() {
                browser().navigateTo('/login');
                input('email').enter('matt@facultycreative.com');
                input('password').enter('scrapple');
            });
            
            it('Should deny users logging in when they enter the wrong password', function() {
                browser().navigateTo('/login');
                input('email').enter('matt@facultycreative.com');
                input('password').enter('scrapple1');
                element('#login').click();
                expect(browser().location().url()).toEqual('/login');
            });
            
            it('Should deny users logging in when they enter the wrong email', function() {
                browser().navigateTo('/login');
                input('email').enter('matt@facultycreative.coms');
                input('password').enter('scrapple');
                element('#login').click();
                expect(browser().location().url()).toEqual('/login');
            });
            
            it('Should allow user to login with correct credentials', function() {
                browser().navigateTo('/login');
                input('email').enter('matt@facultycreative.com');
                input('password').enter('scrapple');
                element('#login').click();
                expect(browser().location().url()).toEqual('/dashboard/vendors');
            });
            
            it('Should allow users to logout', function() {
                browser().navigateTo('/login');
                input('email').enter('matt@facultycreative.com');
                input('password').enter('scrapple');
                element('#login').click();
                element('#logout').click();
                expect(browser().location().url()).toEqual('/login');
            });
            
            
        });
                
        
    });    
        
});



