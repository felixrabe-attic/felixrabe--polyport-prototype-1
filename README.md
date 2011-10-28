PolyPort Prototype Uno
======================

Copyright (C) 2011  www.polyport.org

A web platform matching small to medium-sized deliveries to occasional carriers.

Developers: Read this document completely and carefully!


Prerequisites
-------------

* Runs on [Ubuntu](http://www.ubuntu.com/) 10.10+ (tested) or [Mac OS X 10.6+](http://www.apple.com/) (untested)
* Install [Git](http://git-scm.com/)
* Install [node.js](http://nodejs.org/)
* Install [npm](http://npmjs.org/)
* npm install [express](http://expressjs.com/)
* npm install [jade](http://jade-lang.com/)
* npm install [stylus](http://learnboost.github.com/stylus/)
* npm install [couchapp](https://github.com/mikeal/node.couchapp.js)
  _(Be careful if you also have the [Python couchapp](https://github.com/couchapp/couchapp) installed!)_
* Install [CouchDB](http://couchdb.apache.org/)
* Install [cURL](http://curl.haxx.se/)


Fetch the source code
---------------------

If you're reading this, you probably already are on GitHub and know what to do.
But if not:

    git clone git://github.com/felixrabe/polyport-prototype-1.git
    cd polyport-prototype-1


Deploy locally
--------------

This has to be done only once to set up the CouchDB database:

    couchdb -b -a couchdb/couchdb.ini -p couchdb/couchdb.pid    # to start CouchDB
    curl -X PUT http://localhost:5984/polyport                  # to create the database
    couchapp push couchapp.app.js http://localhost:5984/polyport   # to set up

Repeat the last command whenever you change couchapp.app.js.


Run locally
-----------

    couchdb -b -a couchdb/couchdb.ini -p couchdb/couchdb.pid   # to start CouchDB
    COUCHDB_URL=http://localhost:5984 node app.js   # to start the prototype; stop with Ctrl-C
    couchdb -d -p couchdb/couchdb.pid   # to stop CouchDB


Deploy and run on Heroku
------------------------

This app is developed to run on [Heroku](http://www.heroku.com/)'s
[Celadon Cedar Stack](http://devcenter.heroku.com/articles/cedar) with the
[Cloudant Add-On](http://addons.heroku.com/cloudant).

I've read [this page](http://devcenter.heroku.com/articles/node-js), you should probably do so too.

This has to be done only once to set up the CouchDB database:

    heroku config -s   # find the CLOUDANT_URL
    export CLOUDANT_URL=https://...
    curl -X PUT "$CLOUDANT_URL/polyport"   # to create the database
    couchapp push couchapp.app.js "$CLOUDANT_URL/polyport"   # to set up

This updates and restarts the app on Heroku:

    git push heroku


Notes for development
---------------------

Keep the GitHub version at least as current as the Heroku version!  I.e., do not
deploy without publishing the corresponding source code.

Whenever you change couchapp.app.js in a way that affects app.js (or if you want
to remove something from the design document, because 'couchapp push' does not
do removals in existing design documents), remember to increase the version
number of the design document's '_id'.  For the reasons see the comments in
couchapp.app.js.
