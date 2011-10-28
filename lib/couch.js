var   url = require('url'),
   cradle = require('cradle');

/**
 * Parses a URL and returns a {host, port, [auth]} object suitable for
 * cradle.Connection().
 */
exports.parse_url_for_cradle = function (couchdb_url) {
    var u = url.parse(couchdb_url);
    var defaultPorts = { 'http:': 80, 'https:': 443 };
    var result = {
        host: u.protocol + '//' + u.hostname,
        port: u.port && parseInt(u.port) || defaultPorts[u.protocol]
    };
    if (u.auth) {
        result.auth = { username: u.auth.split(':')[0],
                        password: u.auth.split(':')[1] };
    }
    return result;
};

/**
 * Connects to the polyport database.
 */
exports.polyport = function () {
    var couchdb_url = process.env.CLOUDANT_URL || process.env.COUCHDB_URL || 'http://localhost:5984';
    var conn = new (cradle.Connection)(exports.parse_url_for_cradle(couchdb_url));
    var db = conn.database('polyport');
    db.exists(function (err, exists) {
        if (err) {
            console.error("ERROR: database('polyport').exists() came back with the following error:");
            console.dir({error: err});
        } else if (!exists) {
            console.error("ERROR: Database 'polyport' does not exist");
        }
    });

    var returned = {
        addPackage: function (data, callback) {
            data.type = "package";
            db.save(data, function (err, res) {
                return callback(err, res);
            });
        }
    };

    return returned;
};
