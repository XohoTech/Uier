var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TestSchema = new Schema({
    name: String,
    purpose: String,
    url: String,
    created: Date,
    updated: Date,
    steps: [{
        name: String,
        command: String,
        target: String,
        value: String,
        code: String,
        expression: String
    }]
});

var Test = mongoose.model("Test", TestSchema);
module.exports = Test;