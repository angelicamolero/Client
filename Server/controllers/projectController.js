const Project = require('../models/Project')
const { validationResult } = require('express-validator')


exports.createProject = async (req, res) => {
    //check if theres any error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    try {
        //create a new project
        const project = new Project(req.body);
        //save creator by jwt
        project.creator = req.user.id
        project.save();
        res.json(project)

    } catch (error) {
        console.log(error)
        res.status(500).send('there is an error')
    }
}

//obtain all projects from actual user
exports.getProject = async (req, res) => {
    try {
        const projects = await Project.find({ creator: req.user.id }).sort({ created: -1});
        res.json({ projects })
    } catch (error) {
        console.log(error)
        res.status(500).send('theres a mistake')
    }
}