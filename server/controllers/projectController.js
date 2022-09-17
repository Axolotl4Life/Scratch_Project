const {Project} = require('../models/models');


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
    //! hold up on this right now
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
    const updatedTask = await Project.findOneAndUpdate({});
    
    return next();
  } catch (error) {
    return next({
      log: 'projectController.getAllTasks: ERROR: no tasks exist for this project yet.',
      message: {err : `Error has occured in projectController.getAllTasks. ERROR: no tasks exist for this project yet ${error}`}
    });
  }
};

projectController.updateTaskProgress = async(req, res, next) => {
  try {

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
    return next();
  } catch (error) {
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