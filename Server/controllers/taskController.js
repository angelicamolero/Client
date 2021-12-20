const Task = require('../models/Task')
const Project = require('../models/Project')
const { validationResult } = require('express-validator'); 
const { translateAliases } = require('../models/Project');

//create a new task
exports.createTask = async (req, res) => {

    //check if theres any error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //get project and check if its exists

    const { project } = req.body;
    try {
        const projectExist = await Project.findById(project)
        if(!projectExist){
            res.status(404).send('project not found')
        }

        //check if current project has authenticated user
        if(projectExist.creator.toString() !== req.user.id){
            return res.status(401).json({msg: 'no authorized'})
        }

        //Create task
        const task = new Task(req.body);
        await task.save();
        res.json({ task })

    } catch (error) {
        console.log(error)
        res.status(500).send('theres an error')
    }
}

//get tasks by project

exports.getTasks = async (req,res) => {
    try {
        const { project } = req.body;

        const projectExist = await Project.findById(project)
        if(!projectExist){
            res.status(404).send('project not found')
        }

        //check if current project has authenticated user
        if(projectExist.creator.toString() !== req.user.id){
            return res.status(401).json({msg: 'no authorized'})
        }

        //get tasks by id
        const tasks = await Task.find({ project });
        res.json({ tasks })

    } catch (error) {
        console.log(error)
        res.json(500).send('theres an error')
    }
}

//update task

exports.updateTask = async (req, res) => {
    try {
        const { project, name, state } = req.body;

        //if task exist or not
        let task = await Task.findById(req.params.id)

        if(!task) {
            return res.status(401).json({msg: 'the task does not exist'})
        }

        const projectExist = await Project.findById(project)

        //check if current project has authenticated user
        if(projectExist.creator.toString() !== req.user.id){
            return res.status(401).json({msg: 'no authorized'})
        }

        //create objet with new info
        const newTask = {};

        if(name){
            newTask.name = name;
        }
        if(state){
            newTask.state = state;
        }

        //save task
        task = await Task.findOneAndUpdate({ _id: req.params.id}, newTask, {
            new: true
        });
        res.json({ task })

    } catch (error) {
        console.log(error)
        res.status(500).send('theres an error')
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const { project } = req.body;

        //if task exist or not
        let task = await Task.findById(req.params.id)

        if(!task) {
            return res.status(401).json({msg: 'the task does not exist'})
        }

        const projectExist = await Project.findById(project)

        //check if current project has authenticated user
        if(projectExist.creator.toString() !== req.user.id){
            return res.status(401).json({msg: 'no authorized'})
        }

        //delete task
        await Task.findOneAndRemove({_id: req.params.id});
        res.json({ msg: ' task eliminated'})

    } catch (error) {
        console.log(error)
        res.status(500).send('theres an error')
    }
}