const db = require('../db-config.js');

function find(){
    return db('projects')
}

function findResources(){
    return db('resources')
}

function findTasks(){
    return db ('projects as p')
    .join('tasks as t', 't.project_id','p.id')
    .select('t.*','p.project_name','p.project_description')
}

function getResourceId(id){
    return db('resources')
    .where({id})
    .first()
    .catch(ids=>{
        return null
    })
}

function getProjectId(id){
    return db('projects')
    .where({id})
    .first()
    .catch(ids=>{
        return null
    })
}

function getTaskId(id){
    return db('tasks')
    .where({id})
    .first()
    .catch(ids=>{
        return null
    })
}

function addResource(entry){
    return db('resources')
    .insert(entry)
    .then(ids=>{
        return getResourceId(ids[0])
    })
     
}

function addTask(entry){
    return db('tasks')
    .insert(entry)
    .then(ids=>{
        return getTaskId(ids[0])
    })
    
    
}

function addProject(entry){
    return db('projects')
    .insert(entry)
    .then(ids=>{
        return getProjectId(ids[0])
    })
}

module.exports = {
    find,
    findResources,
    findTasks,
    addResource,
    addProject,
    addTask,
    getResourceId,
    getProjectId,
    getTaskId
}