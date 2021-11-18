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
exports.rollsroyce_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Rollsroyce.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Rollsroyce create on POST.
// Handle Rollsroyce create on POST.
exports.rollsroyce_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Rollsroyce();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"rollsroycee_type":"goat", "cost":12, "size":"large"}
    document.rollsroyce_type = req.body.rollsroyce_type;
    document.cost = req.body.cost;
    document.model = req.body.model;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Rollsroyce delete form on DELETE.
exports.rollsroyce_delete = async function(req, res) {
 console.log("delete " + req.params.id)
 try {
 result = await Rollsroyce.findByIdAndDelete( req.params.id)
 console.log("Removed " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": Error deleting ${err}}`);
}
};
// Handle Rollsroyce update form on PUT.
exports.rollsroyce_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Rollsroyce.findById( req.params.id)
    // Do updates of properties
    if(req.body.rollsroyce_type)
    toUpdate.rollsroyce_type = req.body.rollsroyce_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.model) toUpdate.model = req.body.model;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
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

// Handle a show one view with id specified by query
exports.rollsroyce_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await rollsroyce.findById( req.query.id)
    res.render('rollsroycedetail',
   { title: 'rollsroyce Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.rollsroyce_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('rollsroycecreate', { title: 'Rollsroyce Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for updating a rollsroyce.
// query provides the id
exports.rollsroyce_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Rollsroyce.findById(req.query.id)
    res.render('rollsroyceupdate', { title: 'Rollsroyce Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.rollsroyce_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Rollsroyce.findById(req.query.id)
    res.render('rollsroycedelete', { title: 'Rollsroyce Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };