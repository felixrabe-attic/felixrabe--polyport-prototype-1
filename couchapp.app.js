// Usage: (example for localhost)
//   npm install couchapp
//   couchapp push couchapp.app.js http://localhost:5984/polyport

var couchapp = require('couchapp');
var ddoc;

// The design document's _id is versioned (-nnn) intentionally.
// This way, removed properties and (other) semantic changes to the design
// document can be introduced to the database without affecting the app.js
// already running.  One advantage is that a new app.js version and design
// document can be tested independently from the old versions.  Another
// advantage is that the downtime of app.js is reduced to a minimum by first
// introducing the new design document to the database, then re-deploying app.js
// in a separate step.

module.exports = ddoc = {
    _id: '_design/polyport-1',
    views: {}
};
