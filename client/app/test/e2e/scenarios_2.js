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
                browser().navigateTo('/quotes');
                expect(repeater('tbody tr').count()).toBeGreaterThan(1);
            });
            
            it('Should have a button for users to click to add a new quote', function() {
                expect(element('#addQuote').count()).toBe(1);
            });
            
            it('Should have a form for users to search quotes', function() {
                var listLengthBefore = repeater('tbody tr').count();
                input('searchTerm').enter('A Third Quote');
                var listLengthAfter = repeater('tbody tr').count();
                expect(listLengthBefore).toBeGreaterThanFuture(listLengthAfter);
                
                input('searchTerm').enter('');
            });
            
        });
        
        describe('Adding a quote', function() {
            
            it('Should take user to a form when they click the add quote button', function() {
                browser().navigateTo('/quotes');
                listLengthBefore = repeater('tbody tr').count();
                element('#addQuote').click();
                expect(browser().location().url()).toEqual('/quotes/new');
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
                expect(browser().location().url()).toEqual('/quotes');
            });
            
            it('Should have one additional quote in the table', function() {
                listLengthAfter = repeater('tbody tr').count();
                expect(listLengthAfter).toBeGreaterThanFuture(listLengthBefore);
            });
            
        });
        
        describe('Editing a quote', function() {
            
            it('Clicking edit should take user to edit quote form', function() {
                element('.edit:first').click();
                expect(browser().location().url()).toEqual('/quotes/1');
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
                expect(browser().location().url()).toEqual('/quotes');
            });
            
            it('Quotes information should be updated', function() {
                expect(element('tr > td:first').text()).toEqual("122");
                expect(element('tr > td:eq(1)').text()).toEqual('Something new to buy equiptment for');
            });
        
        
        });
        
        describe('Deleting a quote', function() {
            
            it('Clicking delete should remove the quote', function() {
                browser().navigateTo('/quotes');
                expect(repeater('tbody tr').count()).toBe(4);
                element('.delete:first').click();
                expect(repeater('tbody tr').count()).toBe(3);
            });
            
        });

    });
    
    
    
        
});



