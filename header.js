#!/usr/bin/env node

var Hawk = require('hawk');

var credentials = {
    id: 'dh37fgj492je',
    key: 'werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn',
    algorithm: 'sha256'
};

var header = Hawk.client.header('http://localhost:8000/resource', 'GET', { credentials: credentials, ext: 'some-app-data' });
console.log(header.field);
