var _ = require('lodash');
var fs = require('fs');

var descriptor = require('./enum.json');
var template = _.template(fs.readFileSync('template.txt', 'utf-8'));
var code = template(descriptor);
console.log(code);
fs.writeFileSync(descriptor.name + '.as', code, {encoding: 'utf-8'});
