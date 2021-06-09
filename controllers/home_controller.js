const Task = require("../models/task");

// home controllers
module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("Error fetching tasks", err);
      return;
    }

    // task_list
    return res.render("home", {
      title: "TODO APP",
      task_list: tasks,
    });
  });
};


//create task and store it in database
module.exports.add = function(req,res){
   console.log(req.body);
  //add on data base
  Task.create({
      task: req.body.description,
      category: req.body.category,
      date: req.body.date,
  },
  function (err, tasks) {
      if (err) {
        console.log("Error in creating a task!");
        return;
      }

      // rerender the home page
      console.log("******", tasks);
      return res.redirect("back");
  }
  );
};

//delete selected tasks from the database
module.exports.del=function(req,res){
  console.log(req.body);
let tasks = Object.keys(req.body);
for (task of tasks) {
    // mongoose to delete the tasks
    Task.deleteOne({ _id: task }, function (err) {
      if (err) {
        console.log("Error in deleting from database.", err);
        return;
      }
    });
  }
  return res.redirect('back');
};