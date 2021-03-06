module.exports = {
    defaults: {
    
        // Subject of the message
        subject: 'An application was generated',
    
        // variables 
        variables: {
            link: '', 
            salesRepName: '',
            vendorName: '',
            appCompany: '',
            appPhone: '',
            appContact: '',
            appEmail: '',
            appAmount: '',
            appDesc: '',
            appBuyout: '',
            appTerm: '',
            appPayment: ''
        }
    }
};

/*
To: 
Marlin Rep

From: 
(Vendor Company Name)


Subject:
An application was generated

Message: 
Hello (Marlin Rep Name), an application was just generated for (Vendor Name).

The application was generated Friday at 12:30am

Summary
Company	(End User Company)
Phone		(End User Phone)
Contact	(End User Name)
E-mail Address	(End User Email)
Amount	(Equipment Cost)
Equipment Description	(Equipment Description)
Desired Buyout	(Buyout Label)
Term		(Finance Term)
Payment	(Monthly Payment)

Click below to view the full application to submit to credit. http://127.0.0.1:3000/tools/applications/523c8051bc4d130000000005
*/