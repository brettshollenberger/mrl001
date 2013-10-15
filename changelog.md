MarlinQuoter Changelog
==========

The following documents current release features and bug fixes. It also outlines the project roadmap, indicating planned features you can expect to see.

Release 0.3.7-pre-release (October 15th, 2013)
--------
This is a pre-release of the sofware. This was a BIGGG release, with a lot of refactoring, features, and bugs. For a complete list view 

**Features**

- **[FEATURE] Refactor Quoter tool and Application tools.**
 - Show payment information on application tool
 - More robust validation on both tools
 - Message user if quote is out of range of rate sheet.  
- **[FEATURE] API for generating quotes.**  
 - Admin can enabled API tool for vendors. Each vendor has a unique API key that only allows access to their vendor quoter. Toggling the tool on and off will generate a new key. 
 - API is sandboxed from rest of app with a public api endpoint for security.
 - Provide API documentation at [tools/api](tools/api). 
 - API is rate limited to 1 request per second which improves app security.
- [FEATURE] Close button on dashboard edit pages now goes to previous page, instead of resource listing.  
- [FEATURE] Admin can now send users their login information (link & password). Useful when creating new user accounts. 
- [FEATURE] Enhanced validation on login form, including live email validation against known users.
- [FEATURE] Added password reset to logn form. This emails the user a new password.  
- [FEATURE] Add industry tags to vendor edit pages.
- [FEATURE] Admin can set vendors as "white-labeled" which removes the Marlin Quoter logo from quoter tool.


**Bugs**

- [BUG] Redirect to show page after new resource is intially saved
- [BUG] Fix missing select2 dependency
- [BUG] Zip valdiator now accepts 5 or 9 digit zip code with or without hyphen
- [BUG] Fix inconsistant validation across vendor edit tabs on admin dashboard. 
- [BUG] Fix issue where deleteThis directive throws error in IE8.
- [BUG] Fix missing data on display of applications and quotes.
- [BUG] Fix for instance where on initial app visit close button doesn't work.
- [BUG] Fix bug saving user roles
- [BUG] Fix issue where custom legal terms didn't always display for a vendor. 
- [BUG] Fix issue on quoter tool where logo didn't always link to vendor website. 
- [BUG] Fix issue where websites saved without 'http://' would try to open within the app.
- [BUG] Fix issue where IE/ Windows users can't see selected state in dropdowns.
- [BUG] Fix issue where rates of '0' displayd to end user on quoter tool. 
- [BUG] Fix issue where payments don't appear when generating PDF's  

**Chores**

- [CHORE] Add robots.txt file 
- [CHORE] Refactor how quotes are calculated and saved to database.
- [CHORE] More consistant display of currency across the app (commas and $$$) 
- [CHORE] Hide guarantor info for non-admin users. 
- [CHORE] Add CSRF protection (Cross Site Request Forgery)

**Styles**

- [STYLE] Make alert style more consistent.
- [STYLE] Redesign Dealer Locator style and interface. 
- [STYLE] Display default images for users and vendors
- [STYLE] Improved display of input forms site wide. 


Release 0.3.6
--------

- [FEATURE] Send email to the credit department when an application is completed
- [CHORE] Add cache buster to fix IE8 issue with caching.
- [CHORE] Refactor dealer locator tool, fixing many issues and improving overall stability.
- [CHORE] Add CSRF protection to app (cross site resource forgery) 
- [BUG] Fix issue in IE8 where closing vendor edit tab threw map errors.
- [BUG] Fix issue where closing form presented user with multiple "unsaved changes" messages


Release 0.3.5
--------
This is a big release, adding email AND tagging functionality to the app.

- [FEATURE] Add email notification system. Emails are now triggered when an End User generates a quote. They are sent to the End User, the Marlin Rep, and the Vendor Rep.
- [FEATURE] Add tagging to vendors and dealer locator. The Marlin Admin can add tags on the vendor > edit > locator tool tab. The End User can search by these tags on the Dealer Locator Tool.
- [CHORE] Quote letter has been re-designed to look more like a professional letter. 
- [CHORE] Added "test" environment, which prevents emails from being sent in development and test modes.


Release 0.3.4
--------

- [BUG] Fix issue where quote information didn't copy to applicaiton. 
- [BUG] Fix issue with displaying contact and company inforamtion on quote edit page. 
- [CHORE] Update seed data to add more quotes and applications for demo. 


Release 0.3.3
--------

- [FEATURE] User dashboard which shows new and open applications.
- [FEATURE] "My Marlin Sales Rep" tray which is visible to vendors
- [FEATURE] If user is a vendorRep, customize sidebar to include vendor logo and link to vendor profile.
- [FEATURE] Add link to "view" and "print" quotes from dashboard/quotes/id.
- [FEAUTRE] Add link to "view" application from dashboard/applications/id.
 - [CHORE] Vendor and Marlin Sales Rep shouldn't see user roles. Only admin role can see this area. 
- [CHORE] Move Extra Field on quoter tool to equiptment options area.
- [CHORE] Hide delete button on all content for non-admins
- [BUG] Fix bug in IE8 where buttons were not legiable because of black on blue color.
- [BUG] Fix issue on quoter tool where vendor was incorrectly set from dropdown. 
- [BUG] Fixed bug where admin could delete themselves.
- [STYLE] Change location and size of terms on quote page.


Release 0.3.2
-------

- [FEATURE] Admin can set user role from dashboard
- [FEAUTRE] Admin can add a vendorRep to a vendor
- [FEATURE] Show or hide buttons, tabs, etc. based on current user role. 
- [FEATURE] Show user role on user listing page. 
- [FEATURE] Allow sorting by user role on user listing page. 
- [FEATURE] Enhance style and function of the users edit -> manage vendors tab. 
- [FEATURE] Chaning a users role removes their current vendor relationships, prompts user with warning. 
- [CHORE] When adding users to a vendor, filter by role. This means only vendorReps appear on add vendor rep tab, and only salesReps appear on add sales rep tab. 
- [CHORE] Add 10 rate sheet and remove testing rate sheets.
- [BUG] Fix bug with quoter tool that could cause it to fail in some instances when user clicked "add quote"
- [BUG] Fix bug causing vendor to sales rep realting to break
- [BUG] Fix bug where quoter tool was incorrectly setting the vendorId

- [STYLE] Change side nav legal to 2013 Marlin Business Services Corp (registered)



Release 0.3.1
-------
This release fixes a number of bugs introduced by the 0.3.0 release. It also includes a ton of style enhancements.

**Features**

- [FEATURE] Add a "tools" tab that lets admin toggle on/ off tools per vendor.
- [FEATURE] Complete redesign of rate sheet tab on vendor edit page. 
- [FEATURE] On vendor listing page, indicators now show enabled tools for each vendor.
- [FEATURE] On vendor edit page, the locator tool map centers on to marlin headquoters if no vendor geo data is available. 
- [FEATURE] Removed "action" buttons from listing pages. Moved all delete links to detail page. 
- [FEATURE] Generate new quote button opens in new window (@todo test in IE!)
- [FEATURE] On vendor listing page, make email and phone links clickable
- [FEATURE] Add required indicator to required form elements
- [FEATURE] Make instances of user names link to user profiles.

**Styles**

- [STYLE] Added hover style for table rows (blue), made image centered and larger, added border
- [STYLE] Added pencil icon to tables rows that are clickable
- [STYLE] Applied new '1/2' button style to all buttons globally
- [STYLE] Fixed buttons on edit pages that were missing icons (quote page, application page)
- [STYLE] Styled tabs (on edit pages)
- [STYLE] Make hints / placeholders much lighter in color 
- [STYLE] General styling of messages and alerts. 
- [STYLE] On remove sales rep link, make this smaller and underline. Make the above the default "delete" link style
- [STYLE] Add "launch quoter tool for this vendor" to vendor page. 

**Chores**

- [CHORE] Removed application page "cancel" button and added top bar to make consistant with other edit pages
- [CHORE] Enhanced password reset controller. Messages and validation now clear on error and success. Moved into modular file to follow new contoller dev pattern.
- [CHORE] Quotes now sort with status "open" first.
- [CHORE] Removed tabs from pages with no tabeed content
- [CHORE] On "add sales rep to vendor page" add the sales rep name
- [CHORE] Change language of "lease programs" to rate sheets
- [CHORE] Change language on "custom application terms" to just read "custom terms"
- [CHORE] Remove the footer, move version number to side nav
- [CHORE] Move button to launch quoter to the vendor edit page.
- [CHORE] On Locator tool tab, clarify language. 
- [CHORE] Changed how vendor / programs are saved to database

**Bugs**

- [BUG] On user edit page, title bar should read the full user name 
- [BUG] Quote edit (open | archived) select doesn't prompt save or autosave
- [BUG] SAVE doesn't work on vendor edit form / quote edit
- [BUG] Edit user, the avatar save button is broken
- [BUG] On Locator tool tab, fixed instance where no address would break google maps. Added messaging to user if no address was found.
- [BUG] On Locator tool tab, fixed issue were zooming out breaks map 
- [BUG] Fixed issue that prevented changelog from displaying. 
- [BUG] Save changes plugin thorws multiple messages when leaving the page, and appears on listing pages.


Release 0.3.0
-------
This release invloved refactoring the App to use a more robust API based on Mongoose and MongoDB. 

- [FEATURE] Add an "extra" field to quoter tool, that can be toggled on and off per vendor.
- [FEATURE] Added password change functionality on user edit page.
- [FEATURE] Limit viewing of content (quotes, applications, vendors, and users) based on user role. For example, this means that sales reps will now see quotes ONLY from their vendors.
- [CHORE] Refactor database to be more robust


Release 0.2.2
--------
This release adds PDF downloads and usability enhancements to edit pages.

- [FEATURE] Added PDF download functionality for quotes.
- [FEATURE] Added "unsaved changes" warnings to the edit pages.


Release 0.2.1
--------
This release centered around an overhauled rate sheet editing experience. In addition, we fixed a number of vendor editing bugs. We also added a global loading indicator to compensate for the delay caused by API calls. 

**Rate Sheet Editing**

- [UX CHORE] Overhauled the style on the quote editor page to better match wireframes.
- [FEATURE] Admin can now delete a single buyout option from a rate sheet.
- [FEATURE] Admin can now change name on rate sheet buyout options.
- [FEATURE] Admin can now remove rows/ columns when editing rate sheets.
- [FEATURE] Added default legal terms for vendors if no custom terms are set.
- [CHORE] - Simplified the add option button; now it only requires a name. 
- [CHORE] - Clarified labels and titles on rate sheet edit page.   
- [BUG] Fixed bug were rate sheet validation was limiting rates to 3 decimal places.

**Vendor Edit**

- [BUG] Fixed issue were admin couldn't add rate sheets to new vendors. 
- [BUG] Fixed bug where picking user avatar before initial save would fail.

**Site Wide**

- [FEATURE] Added loading indicator to dashboard, quoter, and locator tools


Release 0.2 
--------
- [FEATURE] - Quoter and locator tool now save to the database. This is a major milestone and marks the transition to the 0.2 version.
- [BUG] - Fixed issue where adding a new rate sheet was broken
- [BUG IE8] - Fixed various bugs with IE8
- [CHORE] - General code / stability enhancements  


Release 0.1.7
--------
- [FEATURE] [DEALER LOCATOR] - Show distance with dealer locator, order results by distance
- [FEATURE] [DEALER LOCATOR] - Clicking on list opens their markers
- [FEATURE] [DEALER LOCATOR] - Added address and link to directions to the marker info windows
- [CHORE] [DEALER LOCATOR] - Update Google Maps library and cleaned up code 
- [CHORE] [DEALER LOCATOR] - Overall UX enhancements to increase statbility  

There are a few known bugs in this release. We are working hard to fix them for future releases.
- Marker windows dont close when you open more than 1


Release 0.1.6
--------
This is a pre-release demoing 2 new features: 1) advanced rate sheet editing 2) dealer locator tool

The following items are addressed: 

- [FEATURE] - Added dealer locator end user tool. Users can search by location, distance, name, and use geolocation to find marlin vendors. 
- [FEATURE] - Added admin dealer locator customize panel - the Marlin Super admin can now pin-point a vendor on a map. This information will show on the locator tool.
- [FEATURE] [RATE SHEET] - Added advanced rate sheet edit controls, including ability to add rows and columns.
- [FEATURE] [RATE SHEET] - Added equipment cost buckets to rate sheets. 
- [FEATURE] [QUOTE TOOL] - Quotes now relect proper rate bucket. 
- [BUG] - Fixed bug with rate service api call where missing rate sheets would cause an error.


Release 0.1.5
--------
- [BUG IE8] - Fixed issue where changelog was broken.
- [CHORE] - Fixed tests to work with changes made in version 0.1.3 -- 0.1.5 

Release 0.1.4
--------
- [BUG] - Fixed bug where new vendors were added multiple times if clicking "save and add more info" button
- [BUG IE8] - Fixed size of images on vendor edit -> add marlin rep tab. 
- [BUG] - Fixed issue where new vendors were not attaching on creation. 

Release 0.1.3
--------
- [BUG IE8] - Fixed issue where action buttons were cut off on smaller screens.
- [BUG IE8] - Fixed issue where some icons were missing in sidebar
- [BUG IE8] - Fixed issue where some vendor icons were missing
- [FEATURE] - When adding a vendor logo, file picker now auto converts to a jpg. Fixes above bug.
- [BUG IE8] - Fixed dashboard pages where labels for inputs were missing. 
- [FEATURE] - Changed quoter tool so vendor logo links out to their website
- [BUG IE8] - Removed google fonts for IE8 because they were rendering poorly
- [BUG IE8] - Fixed issue where password field text was white and invisible
- [FEATURE] - Changed buttons on "add vendor" and "add user" pages to provide for saving without closing the page. 



Release 0.1.2 and prior were before the changelog existed!

