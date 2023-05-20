const Task = require("../models/task");
const getDateToday = require("../controllers/today");

// add-task
module.exports.create = async function (req, res) {
  try {
    // Stores todays date for comparison
    let dateToday = {};
    dateToday.lower_limit = getDateToday.get_lower_limit(new Date());
    dateToday.upper_limit = getDateToday.get_upper_limit(new Date());
    let newTask = {
      title: req.body.title,
      user: req.user,
      category: req.body.category,
      due_date: new Date(req.body.due_date),
      status: false,
    };
    let task = await Task.create(newTask);

    task = task.toJSON();
    // Segment contains the container where the newly created task is to inserted
    let segment;
    if (req.xhr) {
      if (task.due_date < dateToday.lower_limit) {
        segment = "past-container";
      } else if (task.due_date > dateToday.upper_limit) {
        segment = "upcoming-container";
      } else {
        segment = "today-container";
      }
      task["due_date"] = task["due_date"].toDateString();

      return res.status(200).json({
        data: {
          task: task,
          message: "Task Created",
          segment: segment,
        },
      });
    }
    return res.redirect("back");
  } catch (e) {
    console.log("Error in creating new task", e);
    return;
  }
};

// Toggles Task Completition status
module.exports.toggleTask = async function (req, res) {
  try {
    let task = await Task.findById(req.body.task_id);
    // Toggling task status
    task.status = !task.status;
    task.save();

    if (req.xhr) {
      return res.status(200).json({
        message: "Marked",
        card_id: `card-${req.body.task_id}`,
      });
    }
  } catch (e) {
    console.log("Error", e);
    return;
  }
};
//  Delete task
module.exports.deleteTask = async function (req, res) {
  try {
    let task = await Task.findById(req.query.task_id);
    task.deleteOne();

    if (req.xhr) {
      return res.status(200).json({
        message: "Deleted",
        card_id: `card-${req.query.task_id}`,
      });
    }
  } catch (e) {
    console.log("Error", e);
    return;
  }
};
