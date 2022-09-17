const {Project, Task} = require('../models/models');


const projectController = {};

// TODO finish these methods:

// async functions to let code continue and whenever mongoose finishes executing the db command we get it in our res.locals object

projectController.getAllTasks = async(req, res, next) => {
  try {
    // second argument is name of property we want to display
    const searchResults = await Project.find({}, ['tasks']);
    res.locals.allTasks = searchResults;

    return next();
  } 
  catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: no tasks exist for this project yet.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: no tasks exist for this project yet ${error}`}
    });
  }
};

projectController.createNewTask = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body
    const {task} = req.body;
    
    const newTask = await Task.create({task: task});
    res.locals.newTask = newTask;

    return next();
  } 
  catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: invalid format/type for tasks.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: invalid format/type for tasks ${error}`}
    });
  }
};

projectController.editTask = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body
    const {id} = req.query; //? Unsure on this
    const {update} = req.body;
    
    // first argument is the filer-what to find, second is what to update it to, third argument is to return the updated task
    const updatedTask = await Project.findByIdAndUpdate({ _id: id}, {update});
    res.locals.updatedTask = updatedTask;
    
    return next();
  } 
  catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: no tasks exist for this project yet.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: no tasks exist for this project yet ${error}`}
    });
  }
};

projectController.updateTaskProgress = async(req, res, next) => {
  try {
    
    // receive the progress bar it's already in
    // if just created move it to to_be_started
    // else check if it's in to_be_started, if so move to in_progress
    // else move to completed
    
    return next();
  } catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: no tasks exist for this project yet.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: no tasks exist for this project yet ${error}`}
    });
  }
};

projectController.deleteTask = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body
    const {id} = req.query; 
     
    // finds by id and deletes it
    const deletedTask = await Project.findByIdAndDelete({ _id: id});
    res.locals.deletedTask = deletedTask;
    return next();
  } 
  catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: no tasks exist for this project yet.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: no tasks exist for this project yet ${error}`}
    });
  }
};

projectController.createNewProject = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body - user has to name new project
    const {projectName} = req.body;

    const newProject = await Project.create({name: projectName});
    res.locals.newProject = newProject;
    return next();

  } catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: no tasks exist for this project yet.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: no tasks exist for this project yet ${error}`}
    });
  }
};

projectController.deleteProject = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body - user has to name new project
    const {projectName} = req.body;

    const deleteMe = await Project.findByIdAndDelete({name: projectName});
    return next();

  } catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: no tasks exist for this project yet.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: no tasks exist for this project yet ${error}`}
    });
  }
};


module.exports = projectController;