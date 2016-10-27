var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true},
    page: { type: Object, required: true}
}, { minimize: false });

module.exports = mongoose.model('Solution', schema);