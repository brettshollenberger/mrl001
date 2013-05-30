describe('App', function() {
    
    // utility functions
    angular.scenario.matcher('toBeGreaterThanFuture', function(future) {
        return +this.actual > +future.value;
    });
    
    describe('Vendor management', function() {
        
        describe('Listing all vendors in the system', function() {
        
            // check for table and button, other form elements
            it('Should list current vendors in a table', function() {
                browser().navigateTo('/vendors');
                expect(repeater('tbody tr').count()).toBeGreaterThan(1);
            });
            
            it('Should have a button for users to click to add a new vendor', function() {
                expect(element('#addVendor').count()).toBe(1);
            });
            
            it('Should have a form for users to search vendors', function() {
                expect(repeater('tbody tr').count()).toBe(3);
                input('searchTerm').enter('A Third Vendor');
                expect(repeater('tbody tr').count()).toBe(1);
                input('searchTerm').enter('');
            });
            
        });
        
        describe('Adding a vendor', function() {
            
            it('Should take user to a form when they click the add vendor button', function() {
                browser().navigateTo('/vendors');
                listLengthBefore = repeater('tbody tr').count();
                element('#addVendor').click();
                expect(browser().location().url()).toEqual('/vendors/new');
            });
            
            it('Should allow user to enter vendor information in a form', function() {
                expect(element('#save:disabled').count()).toBe(0);
                input('vendor.name').enter('A Test Vendor!!!!!!');
                expect(element('#save:disabled').count()).toBe(0);
            });
            
            it('Button text should read "Add Vendor"', function() {
                expect(element('#save').text()).toEqual('Add Vendor');
            });
            
            it('Clicking save vendor should redirect user back to vendors table', function() {
                element('#save').click();
                expect(browser().location().url()).toEqual('/vendors');
            });
            
            it('Should have one additional vendor in the table', function() {
                listLengthAfter = repeater('tbody tr').count();
                expect(listLengthAfter).toBeGreaterThanFuture(listLengthBefore);
            });
            
        });
        
        describe('Editing a vendor', function() {
            
            it('Clicking edit should take user to edit vendor form', function() {
                element('.edit:first').click();
                expect(browser().location().url()).toEqual('/vendors/1');
            });
            
            it('Button text should read "Update Vendor"', function() {
                expect(element('#save').text()).toEqual('Update Vendor');
            });
            
            it('Should have editable fields', function() {
                input('vendor.name').enter('Changed the vendor Name');
                input('vendor.address_1').enter('An address');
            });
            
            it('Clicking update should take user back to vendor list', function() {
                element('#save').click();
                expect(browser().location().url()).toEqual('/vendors');
            });
            
            it('Vendors information should be updates', function() {
                expect(element('tr > td:first').text()).toEqual('Changed the vendor Name');
            });
        
        
        });
        
        describe('Deleting a vendor', function() {
            
            it('Clicking delete should remove the vendor', function() {
                browser().navigateTo('/vendors');
                expect(repeater('tbody tr').count()).toBe(3);
                element('.delete:first').click();
                expect(repeater('tbody tr').count()).toBe(2);
            });
            
        });
    
    });
        
});