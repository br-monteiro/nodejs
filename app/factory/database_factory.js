var sqlite3 = require('sqlite3').verbose();

module.exports = function() {
    var db = new sqlite3.Database('./app/database/database.sqlite3');
    return db;
}