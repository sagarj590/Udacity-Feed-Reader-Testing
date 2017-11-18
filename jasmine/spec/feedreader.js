/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
		
        // This is the first test.
		// When I change allFeeds in app.js to be an empty array and refresh the page,
		// 1 specification throws 1 failure stating that "RSS Feeds are not defined". 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // This test loops through each feed in the allFeeds[] and ensures it has a URL defined and that the URL is not empty.
		 it('have url defined and are not empty', function() {
            for(var i=0; i < allFeeds.length; i++){
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });


        // This test loops through each feed in the allFeeds[] and ensures it has a name defined and that the name is not empty.
         
		 it('have names and are not empty', function() {
          for(var i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).toBeGreaterThan(0);
          }
        });
    });


    /* A new test suite named "The menu" */
	describe('The menu', function() {

        // This test ensures the menu item is hidden by default.
        it('is hidden by default', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

       // The test that ensures the menu changes visibility when the menu icon is clicked, and has 2 expectations:
       // of displaying the menu when first clicked, and hiding the menu when clicked again. 
       it('displays or hides menu-list on clicking', function() {
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);

          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
       });
    });

    /* A new test suite named "Initial Entries" */
    describe("Initial Entries", function(){
     
        // loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and asynchronous done() function.
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });
		
        // This test ensures that, when the loadFeed function is called and it's work is completed,
		// there is at least one single .entry element within the .feed container.
        it('has atleast one ".entry" element', function(){
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });
	
    /* A new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
       let feed;
       let newfeed;
	   
	   // loadFeed() is asynchronous so this test will require the use of beforeEach and asynchronous done() function.
	   beforeEach(function(done) {
          loadFeed(0, function() {
            feed = $('body').html();
            loadFeed(1, function(){
                 newfeed = $('body').html();
                 done();
            });
         });
       });
	   
        //This test ensures when a new feed is loaded by the loadFeed(), the content actually changes.
        it('content actually changes, when new feed is loaded', function() {
          expect(feed).not.toEqual(newfeed);
       });
    });
}());
