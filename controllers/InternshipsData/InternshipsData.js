import {
    InternshipsData as InternshipsDataModel
} from './../../models';

var RetrievePost = function() {
    var promise = new Promise(function(resolve, reject) {
        // var internships = new InternshipsDataModel(data);
        // post.save();        
        // resolve(post);
        var res = InternshipsDataModel.find();
        resolve(res);
    });
    return promise;
}

var InternshipsData = {
	RetrievePost
};

export {
	InternshipsData
};