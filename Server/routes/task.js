const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

//creat a task

router.post('/',
    auth,
    [
        check('name', 'The name is required').not().isEmpty()
    ],
    taskController.createTask
);

router.get('/',
    auth,
    taskController.getTasks
)

router.put('/:id',
    auth,
    taskController.updateTask
)

router.delete('/:id',
auth,
taskController.deleteTask
)

module.exports = router;