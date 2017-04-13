const semver = require('semver');

module.exports = function (input) {
    let out;
    if (semver.valid(input)) {
        out = input;
    } else {
        out = input.replace(/\.(\d+)$/, '-$1');
    }
    return out;
};