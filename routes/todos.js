var express = require('express');
var router = express.Router();

/* import controller */
const TodoController = require('../controllers/todos')

router.get('/', TodoController.findAll)
router.post('/', TodoController.store )
router.get('/:id', TodoController.show)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.destroy)


module.exports = router
