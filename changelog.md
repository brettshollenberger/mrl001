MarlinQuoter Changelog
==========

The following documents current release features and bug fixes. It also outlines the project roadmap, indicating planned features you can expect to see.

Release 0.2 (current)
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

