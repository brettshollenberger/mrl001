describe('Application management', function() {
    
    it('Should require user to login before doing any management', function() {
        browser().navigateTo('/login');
        input('email').enter('matt@facultycreative.com');
        input('password').enter('matt');
        element('#login').click();  
    });
    
    describe('Listing all applications in the system', function() {
    
        // check for table and button, other form elements
        it('Should list current applications in a table', function() {
            browser().navigateTo('/dashboard/applications');
            expect(repeater('tbody tr').count()).toBe(1);
        });
        
        it('Should have a button for users to click to add a new application', function() {
            expect(element('#addApplication').count()).toBe(1);
        });
        
        it('Should have a form for users to search applications', function() {
            expect(repeater('tbody tr').count()).toBe(1);
            input('searchTerm').enter('A Third Application');
            expect(repeater('tbody tr').count()).toBe(0);
            input('searchTerm').enter('');
        });
        
    });
    
    describe('Adding a application', function() {
        
        it('Should take user to a form when they click the add application button', function() {
            browser().navigateTo('/dashboard/applications');
            listLengthBefore = repeater('tbody tr').count();
            element('#addApplication').click();
            expect(browser().location().url()).toEqual('/dashboard/applications/new');
        });
        
        it('Should allow user to enter application information in a form', function() {
            expect(element('#save:disabled').count()).toBe(0);
            input('application.name').enter('A Test Application!!!!!!');
            expect(element('#save:disabled').count()).toBe(0);
        });
        
        it('Button text should read "Save"', function() {
            expect(element('#save').text()).toEqual('Save');
        });
        
        it('Clicking save application should redirect user back to applications table', function() {
            element('#save').click();
            expect(browser().location().url()).toEqual('/dashboard/applications');
        });
        
        it('Should have one additional application in the table', function() {
            listLengthAfter = repeater('tbody tr').count();
            expect(listLengthAfter).toBeGreaterThanFuture(listLengthBefore);
        });
        
    });
    
    describe('Editing a application', function() {
        
        it('Clicking edit should take user to edit application form', function() {
            element('.edit:first').click();
            expect(browser().location().url()).toEqual('/dashboard/applications/2');
        });
        
        it('Button text should read "Save"', function() {
            expect(element('#save').text()).toEqual('Save');
        });
        
        it('Should have editable fields', function() {
            input('application.name').enter('Changed the application Name');
        });
        
        it('Clicking update should take user back to application list', function() {
            element('#save').click();
            expect(browser().location().url()).toEqual('/dashboard/applications');
        });
        
        it('Applications information should be updated', function() {
            expect(element('tr > td:first').text()).toEqual('Changed the application Name');
        });
    
    
    });
    
    describe('Deleting a application', function() {
        
        it('Clicking delete should remove the application', function() {
            browser().navigateTo('/dashboard/applications');
            expect(repeater('tbody tr').count()).toBe(1);
            element('.delete:first').click();
            expect(repeater('tbody tr').count()).toBe(0);
        });
        
    });

});