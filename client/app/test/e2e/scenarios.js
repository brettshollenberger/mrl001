describe('App', function() {
  describe('Adding vendors', function() {

    beforeEach(function() {
        browser().navigateTo('/');
        
    });
    
    it('Should start with no vendors listed', function() {
        browser().reload();
        expect(repeater('tr').count()).toEqual(0); 
    });

  });
});
