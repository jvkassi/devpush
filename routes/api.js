/*
 * Serve JSON to our AngularJS client
 */
var cloudinary = require('cloudinary')
cloudinary.config({ 
  cloud_name: 'hbpvomo2u', 
  api_key: '783981127925673', 
  api_secret: '2WZoEJGIa-4cNY4rO1FtdyRK82o' 
});
exports.upload = function(req, res) {
	var file = req.params.file;
	var path = req.files.avatar.path;
	console.log(path)
	cloudinary.uploader.upload(path, function(result) {
			console.log(result);
			 res.json({
			  	name: 'Bob'
			  });
	})
	
}
  // function(result) { console.log(result) })
	
exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
  	console.log('bob')

};