const {Project, Task} = require('../models/models');


const projectController = {};

// TODO finish these methods:

// async functions to let code continue and whenever mongoose finishes executing the db command we get it in our res.locals object

projectController.getAllTasks = async(req, res, next) => {
  try {
    // second argument is name of property we want to display
    const searchResults = await Task.find({});
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
      log: 'projectController.createNewTask: ERROR: invalid format/type for tasks.',
      message: {err : `Error has occured in projectController.createNewTask. ERROR: invalid format/type for tasks ${error}`}
    });
  }
};

projectController.editTask = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body
    const {_id} = req.query; //? Unsure on this
    const {task} = req.body;
    console.log('update', task);
    console.log('id', _id);
    
    // first argument is the filer-what to find, second is what to update it to, third argument is to return the updated task
    const updatedTask = await Task.findByIdAndUpdate({ _id: _id}, {task}, {new : true});
    res.locals.updatedTask = updatedTask;
    
    return next();
  } 
  catch (error) {
    return next({
      log: 'projectController.editTask: ERROR: task not found.',
      message: {err : `Error has occured in projectController.editTask. ERROR: task not found ${error}`}
    });
  }
};

projectController.updateTaskProgress = async(req, res, next) => {
  try {
    // const {task} = req.body;
    const {_id} = req.body;
    console.log(_id);
    const firstSearch = await Project.findById({ 'progress.to_be_started': '6328951e6cab5a312c80de80'  });

    console.log('Were gonna skate to one console log and one console log only => file: projectController.js => line 71 => firstSearch', firstSearch);

    const secondSearch = await Project.findOne({ 'progress.in_progress': _id });

    console.log('Were gonna skate to one console log and one console log only => file: projectController.js => line 75 => secondSearch', secondSearch);

    

    // receive the progress bar it's already in
    // if just created move it to to_be_started
    // else check if it's in to_be_started, if so move to in_progress
    // else move to completed
    
    return next();
  } catch (error) {
    return next({
      log: 'projectController.updateTaskProgress: ERROR: task not found.',
      message: {err : `Error has occured in projectController.updateTaskProgress. ERROR: task not found ${error}`}
    });
  }
};

projectController.deleteTask = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body
    const {_id} = req.query; 
     
    // finds by id and deletes it
    const deletedTask = await Task.findByIdAndRemove({ _id: _id});
    res.locals.deletedTask = deletedTask;
    return next();
  } 
  catch (error) {
    return next({
      log: 'projectController.deleteTask: ERROR: task not found.',
      message: {err : `Error has occured in projectController.deleteTask. ERROR: task not found ${error}`}
    });
  }
};

projectController.createNewProject = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body - user has to name new project
    const {name} = req.body;

    const newProject = await Project.create({name: name});
    res.locals.newProject = newProject;
    return next();

  } catch (error) {
    return next({
      log: 'projectController.createNewProject: ERROR: invalid format for project.',
      message: {err : `Error has occured in projectController.createNewProject. ERROR: invalid format for project ${error}`}
    });
  }
};

projectController.deleteProject = async(req, res, next) => {
  try {
    // we get input from front end here as a json from body - user has to name new project
    const {name} = req.body;

    const deleteMe = await Project.findOneAndRemove({name: name});
    res.locals.deletedProject = deleteMe;
    return next();

  } catch (error) {
    return next({
      log: 'projectController.deleteProject: ERROR: project not found.',
      message: {err : `Error has occured in projectController.deleteProject. ERROR: project not found ${error}`}
    });
  }
};


module.exports = projectController;