var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile('./views/index.html');
});
router.get('/muban', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile('./views/muban.html');
});
router.get('/muban/model', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  res.json({'title': 'leona', 'title': 'leolewin'});
});
router.post('/muban/model',function(req, res, next){
	  console.log(req.body);
})

module.exports = router;
