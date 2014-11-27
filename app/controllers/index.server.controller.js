exports.render = function(req,res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}

	req.session.lastVisit = new Data();

	res.render('index', {
		title: 'hello world from me'
	})
};
