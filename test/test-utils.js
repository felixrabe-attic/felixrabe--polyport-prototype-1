var utils = require('../lib/utils');

exports.parse_url_for_cradle = function(test) {
    test.deepEqual({ host: 'http://localhost', port: 5984 },
                   utils.parse_url_for_cradle('http://localhost:5984'));

    test.deepEqual({ host: 'http://localhost', port: 80 },
                   utils.parse_url_for_cradle('http://localhost'));

    test.deepEqual({ host: 'https://localhost', port: 443 },
                   utils.parse_url_for_cradle('https://localhost'));

    test.deepEqual({ host: 'https://localhost', port: 1234 },
                   utils.parse_url_for_cradle('https://localhost:1234'));

    test.deepEqual({ host: 'https://app1476475.heroku.cloudant.com', port: 443,
                     auth: { username: 'app1476475.heroku', password: 'baHiMnoTgivinGiT2yoU' } },
                   utils.parse_url_for_cradle('https://app1476475.heroku:baHiMnoTgivinGiT2yoU@app1476475.heroku.cloudant.com'));

    test.done();
};
