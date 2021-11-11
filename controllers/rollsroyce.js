const rollsroyce = require('../models/rollsroyce');
var Rollsroyce = require('../models/rollsroyce');
// List of all Rollsroyces
exports.rollsroyce_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Rollsroyce list');
};
// for a specific Rollsroyce.
exports.rollsroyce_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Rollsroyce detail: ' + req.params.id);
};
// Handle Rollsroyce create on POST.
exports.rollsroyce_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Rollsroyce create POST');
};
// Handle Rollsroyce delete form on DELETE.
exports.rollsroyce_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Rollsroyce delete DELETE ' + req.params.id);
};
// Handle Rollsroyce update form on PUT.
exports.rollsroyce_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Rollsroyce update PUT' + req.params.id);
};
