var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InternshipsSchema = new Schema({
  title:    {type: String, required: true },
  votes:  	{type: Number, required: true },
  comments: [{name: String, text: String, date: Date, votes: Number}]
});

var InternshipsData = mongoose.model('InternshipsData', InternshipsSchema);
export { InternshipsData };