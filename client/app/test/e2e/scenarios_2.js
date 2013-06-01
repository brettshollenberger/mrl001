describe('App', function() {
    
    // utility functions
    angular.scenario.matcher('toBeGreaterThanFuture', function(future) {
        return +this.actual > +future.value;
    });
    angular.scenario.matcher('toBeLessThanFuture', function(future) {
        return +this.actual < +future.value;
    });
    
    describe('Quote management', function() {
        
        describe('Listing all quotes in the system', function() {
        
            // check for table and button, other form elements
            it('Should list current quotes in a table', function() {
                browser().navigateTo('/dashboard/quotes');
                expect(repeater('tbody tr').count()).toBeGreaterThan(1);
            });
            
            it('Should have a button for users to click to add a new quote', function() {
                expect(element('#addQuote').count()).toBe(1);
            });
            
        });
        
        
        describe('Filtering quotes', function() {
            
            it('Should have a form for users to search by description', function() {
                var listLengthBefore = repeater('tbody tr').count();
                input('searchDesc').enter('I need new rockets');
                var listLengthAfter = repeater('tbody tr').count();
                expect(listLengthBefore).toBeGreaterThanFuture(listLengthAfter);
                input('searchDesc').enter('');
            }); 
            
            it('Should have buttons to filter by status', function() {
                var listLengthBefore = repeater('tbody tr').count();
                element('#filterArchived').click();
                var listLengthAfter = repeater('tbody tr').count();
                expect(listLengthBefore).toBeGreaterThanFuture(listLengthAfter);
                expect(repeater('tbody tr').count()).toBe(2);
                element('#filterAll').click();
                expect(repeater('tbody tr').count()).toBe(4);
            }); 
            
        });
        
        describe('Adding a quote', function() {
            
            it('Should take user to a form when they click the add quote button', function() {
                browser().navigateTo('/dashboard/quotes');
                listLengthBefore = repeater('tbody tr').count();
                element('#addQuote').click();
                expect(browser().location().url()).toEqual('/dashboard/quotes/new');
            });
            
            it('Should allow user to enter quote information in a form', function() {
                expect(element('#save:disabled').count()).toBe(0);
                input('quote.description').enter('A test quote');
                input('quote.totalCost').enter(1111);
                expect(element('#save:disabled').count()).toBe(0);
            });
            
            it('Button text should read "Save"', function() {
                expect(element('#save').text()).toEqual('Save');
            });
            
            it('Clicking save quote should redirect user back to quotes table', function() {
                element('#save').click();
                expect(browser().location().url()).toEqual('/dashboard/quotes');
            });
            
            it('Should have one additional quote in the table', function() {
                listLengthAfter = repeater('tbody tr').count();
                expect(listLengthAfter).toBeGreaterThanFuture(listLengthBefore);
            });
            
        });
        
        describe('Editing a quote', function() {
            
            it('Clicking edit should take user to edit quote form', function() {
                element('.edit:first').click();
                expect(browser().location().url()).toEqual('/dashboard/quotes/1');
            });
            
            it('Button text should read "Save"', function() {
                expect(element('#save').text()).toEqual('Save');
            });
            
            it('Should have editable fields', function() {
                input('quote.description').enter('Something new to buy equiptment for');
                input('quote.totalCost').enter(122);
            });
            
            it('Clicking update should take user back to quote list', function() {
                element('#save').click();
                expect(browser().location().url()).toEqual('/dashboard/quotes');
            });
            
            it('Quotes information should be updated', function() {
                expect(element('tr > td:first').text()).toEqual("$122");
                expect(element('tr > td:eq(1)').text()).toEqual('Something new to buy equiptment for');
            });
        
        });
        
        describe('Changing a quotes status', function() {
            
            it('Should allow user to toggle the status between open and closed', function() {
                browser().navigateTo('/dashboard/quotes');
                element('#filterArchived').click();
                expect(repeater('tbody tr').count()).toBe(2);
                using('tbody tr:first ').element('.edit').click();
                element('.btn-group .btn:first').click();
                element('#save').click();
                element('#filterArchived').click();
                expect(repeater('tbody tr').count()).toBe(1);
            });
        
        });
        
        describe('Deleting a quote', function() {
            
            it('Clicking delete should remove the quote', function() {
                browser().navigateTo('/dashboard/quotes');
                expect(repeater('tbody tr').count()).toBe(4);
                element('.delete:first').click();
                expect(repeater('tbody tr').count()).toBe(3);
            });
            
        });


    });
    
    
    describe('Tools: Quoter Tool', function() {
            
        describe('Generating a quote', function() {
            
            it('Should be publically accessiable', function() {
                browser().navigateTo('/tools/quoter');
                expect(browser().location().url()).toEqual('/tools/quoter');
            });
            
            it('Should generate a new quote when button is clicked', function() {
                element('#generateQuote').click();
                expect(browser().location().url()).toEqual('/tools/quoter/5');
            });
            
            it('Should provide a link to the quote for the user', function() {
                expect(element('#permalink').val()).not().toEqual('');
            });
            
        });
        
        describe('Viewing a quote by visiting its permalink', function() {
            
            it('Should display an existing quote when visting its url', function() {
                browser().navigateTo('/tools/quoter/2');
                expect(browser().location().url()).toEqual('/tools/quoter/2');
                expect(input('quote.totalCost').val()).not().toEqual('');
            }); 
            
            it('Should redirect user if quote permalink is invalid', function() {
                browser().navigateTo('/tools/quoter/123');
                expect(browser().location().url()).toEqual('/tools/quoter'); 
            });
            
            it('Should not allow user to change vendor when visiting by permalink', function() {
                browser().navigateTo('/tools/quoter/2');
                expect(element('select').count()).toBe(0);
            });
            
        });
        
        
        describe('Selecting a vendor when making a quote', function() {
            
            it('Should list all vendors in a dropdown', function() {
                browser().navigateTo('/tools/quoter');
                expect(element('select').count()).toBe(1);
            });
            
            it('Selecting a vendor should generate quote using vendors associated programs', function() {
                
                // select vendor 1, has 3 programs
                browser().navigateTo('/tools/quoter');
                expect(element('select').count()).toBe(1);
                select('quote.vendorId').option(0);
                element('#generateQuote').click();
                expect(repeater('table').count()).toBe(3);
                
                // select vendor 2, has 2 programs
                browser().navigateTo('/tools/quoter');
                select('quote.vendorId').option(1);
                element('#generateQuote').click();
                expect(repeater('table ').count()).toBe(1);
                
            });
                         
        });
        
        describe('Shwoing programs for a quote', function() {
            
            it('Should use the custom display name if set for the vendor', function() {
                browser().navigateTo('/tools/quoter/1');
                expect(element('div > h4:first').text()).toEqual('A Custom Display Name for Program 1');
                
            });
            
        });
        
        
    });
    
    
        
});



