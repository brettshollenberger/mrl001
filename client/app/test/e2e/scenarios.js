describe('App', function() {
  describe('Adding vendors', function() {

    angular.scenario.matcher('toBeGreaterThanFuture', function(future) {
      return +this.actual > +future.value;
    });

    beforeEach(function() {
        //browser().navigateTo('/');
    });
    
    it('Should list current vendors in a table', function() {
        browser().navigateTo('/vendors');
        listLengthBefore = repeater('tbody tr').count();
    });
    
    it('Should provide a button for users to click to add a new vendor', function() {
        element('#addVendor').click();
        expect(browser().location().url()).toEqual('/vendors/new'); 
    });
    
    it('Should allow user to enter vendor information in a form', function() {
        expect(element('#saveVendor:disabled').count()).toBe(0);
        input('vendor.name').enter('A Test Vendor!!!!!!');
        expect(element('#saveVendor:disabled').count()).toBe(0);
    });
    
    it('Should provide a button to save the vendor, and then redirect user back to vendors table', function() {
        element('#save').click();
        expect(browser().location().url()).toEqual('/vendors');
    });
    
    it('Should have one additional vendor in the table', function() {
        listLengthAfter = repeater('tbody tr').count();
        expect(listLengthAfter).toBeGreaterThanFuture(listLengthBefore); 
    });

  });
});
