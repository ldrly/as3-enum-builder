var _ = require('lodash');
var fs = require('fs');

var descriptor;
if (process.argv.length <= 2) {
	descriptor = require('./enum.json');
}
else {
	descriptor = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8'));
}
var template = _.template(fs.readFileSync(require.resolve('./template.txt'), 'utf-8'));
var code = template(descriptor);
console.log(code);
fs.writeFileSync(descriptor.name + '.as', code, {encoding: 'utf-8'});
