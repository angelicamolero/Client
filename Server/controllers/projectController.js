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

//update a project
exports.updateProject = async (req, res) => {

     //check if theres any error
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()})
     }

    //get info from project
    const { name } = req.body;
    const newProject = {};

    if(name){
        newProject.name = name;
    }
    try {
        //check id
 
        let project = await Project.findById(req.params.id);
        //if the projects exist
        if(!project){
            return res.status(404).json({msg: 'Proyect not found'});
        }
        //check creator
        if(project.creator.toString() !== req.user.id){
            return res.status(401).json({msg: 'no authorized'})
        }
        //update
        project = await Project.findByIdAndUpdate({_id: req.params.id}, {
            $set : newProject}, {new: true});

        res.json({ project })

    } catch (error) {
        console.log(error)
        res.status(500).send('error in server')
    }
}

//deelete
exports.deleteProject = async (req, res) => {
    
    try {
        //check id
 
        let project = await Project.findById(req.params.id);
        //if the projects exist
        if(!project){
            return res.status(404).json({msg: 'Proyect not found'});
        }
        //check creator
        if(project.creator.toString() !== req.user.id){
            return res.status(401).json({msg: 'no authorized'})
        }
        //delete project
        await Project.findOneAndRemove({ _id : req.params.id});

        res.json({msg: 'project eliminated'})

    } catch (error) {
        console.log(error)
        return res.status(500).send('error in server')
    }
}