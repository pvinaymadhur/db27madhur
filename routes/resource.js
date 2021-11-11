var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var rollsroyce_controller = require('../controllers/rollsroyce');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Rollsroyce ROUTES ///
// POST request for creating a Rollsroyce.
router.post('/resource/rollsroyces', rollsroyce_controller.rollsroyce_create_post);
// DELETE request to delete Rollsroyce.
router.delete('/resource/rollsroyces/:id', rollsroyce_controller.rollsroyce_delete);
// PUT request to update Rollsroyce.
router.put('/resource/rollsroyces/:id',
rollsroyce_controller.rollsroyce_update_put);
// GET request for one Rollsroyce.
router.get('/resource/rollsroyces/:id', rollsroyce_controller.rollsroyce_detail);
// GET request for list of all Rollsroyce items.
router.get('/resource/rollsroyces', rollsroyce_controller.rollsroyce_list);
module.exports = router;