var url = require('url');

/**
 * Parses a URL and returns a {host, port, [auth]} object suitable for
 * cradle.Connection().
 */
exports.parse_url_for_cradle = function(couchdb_url) {
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
