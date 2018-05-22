import {
    InternshipsData as InternshipsDataController
} from './../controllers';


var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	InternshipsDataController.RetrievePost()
	.then(function(data){
		res.send({
			body:data[0]
		});
	});
});

module.exports = router;