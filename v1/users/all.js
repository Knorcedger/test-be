require('../../schemas/userSchema');
var User = require('mongoose').model('User');
var reqlog = require('reqlog');

module.exports = function(app) {
	app.endpoint(['get', 'post'], '/users', function(req, res) {
		main(req, res, this);
	});
};

/**
 * The main endpoint function
 * @method main
 * @param  {object} req The request object
 * @param  {object} res The response object
 * @param  {object} self Use self.send to send back data
 */
function main(req, res, self) {
	reqlog.info('user.all');
	var user = new User();

	user.find(req, res, {})
		.then(function(result) {
			self.send(result);
		});
}
