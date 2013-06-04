describe('Program management', function() {
    
    it('Should require user to login before doing any management', function() {
        browser().navigateTo('/login');
        input('email').enter('matt@facultycreative.com');
        input('password').enter('matt');
        element('#login').click();  
    });
    
    describe('Listing all programs in the system', function() {
    
        // check for table and button, other form elements
        it('Should list current programs in a table', function() {
            browser().navigateTo('/dashboard/programs');
            expect(repeater('tbody tr').count()).toBeGreaterThan(1);
        });
        
        it('Should have a button for users to click to add a new program', function() {
            expect(element('#addProgram').count()).toBe(1);
        });
        
        it('Should have a form for users to search programs', function() {
            expect(repeater('tbody tr').count()).toBe(4);
            input('searchTerm').enter('The Only Program');
            expect(repeater('tbody tr').count()).toBe(1);
            input('searchTerm').enter('The Only Program that doesnt exist');
            expect(repeater('tbody tr').count()).toBe(0);
            input('searchTerm').enter('');
        });
        
    });
    
    describe('Adding a Program', function() {
        
        it('Should take user to a form when they click the add program button', function() {
            browser().navigateTo('/dashboard/programs');
            listLengthBefore = repeater('tbody tr').count();
            element('#addProgram').click();
            expect(browser().location().url()).toEqual('/dashboard/programs/new');
        });
        
        it('Should allow user to enter program information in a form', function() {
            expect(element('#save:disabled').count()).toBe(0);
            input('program.name').enter('A Test Program!!!!!!');
            expect(element('#save:disabled').count()).toBe(0);
        });
        
        it('Button text should read "Add Program"', function() {
            expect(element('#save').text()).toEqual('Save');
        });
        
        it('Clicking save program should redirect user back to programs table', function() {
            element('#save').click();
            expect(browser().location().url()).toEqual('/dashboard/programs');
        });
        
        it('Should have one additional program in the table', function() {
            listLengthAfter = repeater('tbody tr').count();
            expect(listLengthAfter).toBeGreaterThanFuture(listLengthBefore);
        });
        
    });
    
    describe('Editing a program', function() {
        
        it('Clicking edit should take user to edit program form', function() {
            element('.edit:first').click();
            expect(browser().location().url()).toEqual('/dashboard/programs/1');
        });
        
        it('Button text should read "Save"', function() {
            expect(element('#save').text()).toEqual('Save');
        });
        
        it('Should have editable fields', function() {
            input('program.name').enter('Changed the program Name');
        });
        
        it('Clicking update should take user back to program list', function() {
            element('#save').click();
            expect(browser().location().url()).toEqual('/dashboard/programs');
        });
        
        it('Programs information should be updated', function() {
            expect(element('tr > td:first').text()).toEqual('Changed the program Name');
        });
    
    
    });
    
    describe('Deleting a program', function() {
        
        it('Clicking delete should remove the program', function() {
            browser().navigateTo('/dashboard/programs');
            expect(repeater('tbody tr').count()).toBe(4);
            element('.delete:first').click();
            expect(repeater('tbody tr').count()).toBe(3);
        });
        
    });

});