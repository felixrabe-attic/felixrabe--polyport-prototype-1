PolyPort Prototype Uno
======================

Copyright (C) 2011  www.polyport.org

A web platform matching small to medium-sized deliveries to occasional carriers.


Prerequisites
-------------

* Runs on [Ubuntu](http://www.ubuntu.com/) (tested) or [Mac OS X 10.6+](http://www.apple.com/) (untested)
* Install [Git](http://git-scm.com/)
* Install [node.js](http://nodejs.org/)
* Install [npm](http://npmjs.org/)
* npm install [express](http://expressjs.com/) [jade](http://jade-lang.com/) [stylus](http://learnboost.github.com/stylus/)
* Install [CouchDB](http://couchdb.apache.org/)


Heroku
------

This app is developed to run on [Heroku](http://www.heroku.com/)'s
[Celadon Cedar Stack](http://devcenter.heroku.com/articles/cedar) with the
[Cloudant Add-On](http://addons.heroku.com/cloudant).

I've read [this page](http://devcenter.heroku.com/articles/node-js), you should probably do so too.


Fetch the source code
---------------------

If you're reading this, you probably already are on GitHub.  But if not:

  git clone git://github.com/felixrabe/polyport-prototype-1.git


Run
---

... for cover :)

    cd polyport-prototype-1
    couchdb -b -a couchdb/couchdb.ini -p couchdb/couchdb.pid  # to start CouchDB
    COUCHDB_URL=http://localhost:5984 node app.js  # to start the prototype, kill with Ctrl-C
    couchdb -d -p couchdb/couchdb.pid  # to stop CouchDB


Deploy on Heroku
----------------

This updates and restarts the app on Heroku:

    git push heroku
