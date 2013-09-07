
/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.sendfile('views/index.html');
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};