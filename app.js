'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Attachment = new Module('attachment');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Attachment.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Attachment.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Attachment.menus.add({
    title: 'attachment example page',
    link: 'attachment example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Attachment.aggregateAsset('css', 'attachment.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Attachment.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Attachment.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Attachment.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Attachment;
});
