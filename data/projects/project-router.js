const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

/**--------------------GETS---------------------- */

router.get('/', (req,res)=>{
    Projects.find()
    .then(proj=>{
        res.json(proj)
    })
    .catch(err=>{
        res.status(500).json({message:'DB failed to return projects'})
    })
})

router.get('/resources',(req,res)=>{
    Projects.findResources()
    .then(proj=>{
        res.json(proj)
    })
    .catch(err=>{
        res.status(500).json({message:'DB failed to return resources'})
    })
})

router.get('/tasks',(req,res)=>{
    Projects.findTasks()
    .then(proj=>{
        res.json(proj)
    })
    .catch(err=>{
        res.status(500).json({message:'DB failed to return tasks'})
    })
})

/**-----------------POSTS------------------- */

router.post('/resources',(req,res)=>{
    console.log(req.body)
    Projects.addResource(req.body)
    .then(entry=>{
        res.status(201).json(entry)
    })
    .catch(err=>{
        res.status(500).json({message:'DB failed to add resource'})
    })
})

router.post('/',(req,res)=>{
    Projects.addProject(req.body)
    .then(entry=>{
        res.status(201).json(entry)
    })
    .catch(err=>{
        res.status(500).json({message:'DB failed to add project'})
    })
})

router.post('/tasks',(req,res)=>{
    Projects.addTask(req.body)
    .then(entry=>{
        res.status(201).json(entry)
    })
    .catch(err=>{
        res.status(500).json({message:'DB failed to add task'})
    })
})


/**--------------MIDDLEWARE--------------- */

module.exports = router;