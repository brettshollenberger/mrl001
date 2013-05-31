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
            
            it('Vendors information should be updated', function() {
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
    
    describe('Program management', function() {
        
        describe('Listing all programs in the system', function() {
        
            // check for table and button, other form elements
            it('Should list current programs in a table', function() {
                browser().navigateTo('/programs');
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
                browser().navigateTo('/programs');
                listLengthBefore = repeater('tbody tr').count();
                element('#addProgram').click();
                expect(browser().location().url()).toEqual('/programs/new');
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
                expect(browser().location().url()).toEqual('/programs');
            });
            
            it('Should have one additional program in the table', function() {
                listLengthAfter = repeater('tbody tr').count();
                expect(listLengthAfter).toBeGreaterThanFuture(listLengthBefore);
            });
            
        });
        
        describe('Editing a program', function() {
            
            it('Clicking edit should take user to edit program form', function() {
                element('.edit:first').click();
                expect(browser().location().url()).toEqual('/programs/1');
            });
            
            it('Button text should read "Save"', function() {
                expect(element('#save').text()).toEqual('Save');
            });
            
            it('Should have editable fields', function() {
                input('program.name').enter('Changed the program Name');
            });
            
            it('Clicking update should take user back to program list', function() {
                element('#save').click();
                expect(browser().location().url()).toEqual('/programs');
            });
            
            it('Programs information should be updated', function() {
                expect(element('tr > td:first').text()).toEqual('Changed the program Name');
            });
        
        
        });
        
        describe('Deleting a program', function() {
            
            it('Clicking delete should remove the program', function() {
                browser().navigateTo('/programs');
                expect(repeater('tbody tr').count()).toBe(4);
                element('.delete:first').click();
                expect(repeater('tbody tr').count()).toBe(3);
            });
            
        });

    });
    
    describe('Relating programs to vendors', function() {
        
        it('Should list the programs that are currently related to a vendor', function() {
            browser().navigateTo('/vendors/1');
            expect(repeater('#vendorPrograms li').count()).toBe(3);
        });
    
        it('Should allow user to add a program to a vendor', function() {
            expect(repeater('#vendorPrograms li').count()).toBe(3);
            expect(repeater('#allPrograms li').count()).toBe(1);
            element('#allPrograms button:first').click();
            expect(repeater('#vendorPrograms li').count()).toBe(4);
            expect(repeater('#allPrograms li').count()).toBe(0);
        });
        
        it('Should allow user to remove a program from a vendor', function() {
            browser().reload();
            expect(repeater('#vendorPrograms li').count()).toBe(3);
            element('#vendorPrograms button:first').click();
            expect(repeater('#vendorPrograms li').count()).toBe(2);
        });
        
        it('Should allow user customize the displayName for the program per vendor', function() {
            
        });
        
        
        describe('Give a program a custom displayName on a per vendor basis', function() {
            
            it('Should provide input form for user to enter custom display name', function() {
                browser().navigateTo('/vendors/1');
                expect(repeater('#vendorPrograms li:first > input').count()).toBeGreaterThan(0);
            });
            
            it('Should save the displayName with the vendor', function() {
                using('#vendorPrograms li:first').input('item.displayName').enter('Custom Display Name');
                element('#save').click();
                element('.edit:first').click();
                pause();
                expect(using('#vendorPrograms li:first').input('item.displayName').val()).toEqual('Custom Display Name');
                
            });
            
            it('Adding a program, entering a custom name, and removing it before saving the vendor should clear the custom name', function() {
                
            });
            
            it('Custom names should appear when returning to edit screen', function() {
                
            });
            
            it('Custom program names should not appear when assigning program to another vendor', function() {
                
            });
            
            
        });
        
        
        
    
    });
        
});



