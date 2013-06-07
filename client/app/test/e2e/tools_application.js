describe('Tools: Application Tool', function() {
        
    describe('Generating applications', function() {
        
        it('Should not be accessiable unless user generated a quote first.', function() {
            browser().navigateTo('/tools/application');
            expect(browser().location().url()).toEqual('/tools/quoter');
            browser().navigateTo('/tools/application/1');
            expect(browser().location().url()).toEqual('/tools/quoter');
        });
                
        it('After generating a quote, a user should be able to start an application', function() {
            
            // got to quoter
            browser().navigateTo('/tools/quoter');
            
            // enter information
            input('quoteCost').enter('1000');
            input('quote.company.fullLegalBusineessName').enter('Your business!');
            
            // generate quote
            element('#generateQuote').click();
            expect(browser().location().url()).toEqual('/tools/quoter/5');
            
            // start an application
            element('.btn-select-term:first').click();
            
            // go to appication
            expect(browser().location().url()).toEqual('/tools/application/2');
            
        });
        
        it('Should carry over infomation from the quote to pre-fill forms', function() {
            
            expect(input('application.leasee.fullLegalBusineessName').val()).toEqual('Your business!');
            input('application.leasee.contactPerson.name').enter('Matt');
                        
            
        });
        
        it('Should provide a save button', function() {
            
             expect(element('#saveApplication').count()).toBe(1);
             element('#saveApplication').click();
        
        });
        
        it('Should prompt user to enter their prefered contact method after saving a quote', function() {
            // finalize
            element('.contact-method:first').click();
            element('#saveContactPref').click();
            expect(browser().location().url()).toEqual('/');
        });
        
    });
    
    describe('Securing applications from public view', function() {
        
        it('Should not be accessiable by url', function() {
            browser().navigateTo('/tools/application/1');
            expect(browser().location().url()).toEqual('/tools/quoter');
        }); 
        
    });
 
});