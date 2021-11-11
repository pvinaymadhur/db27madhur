const rollsroyce = require('../models/rollsroyce');
var Rollsroyce = require('../models/rollsroyce');
// List of all Rollsroyces
exports.rollsroyce_list = async function(req, res) {
    try{
        theRollsroyces = await Rollsroyce.find();
        res.send(theRollsroyces);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
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
// VIEWS
// Handle a show all view
exports.rollsroyce_view_all_Page = async function(req, res) {
    try{
        theRollsroyces = await Rollsroyce.find();
    res.render('rollsroyce', { title: 'Rollsroyce Search Results', results: theRollsroyces });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };