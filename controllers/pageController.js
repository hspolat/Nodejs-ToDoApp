const Task = require("../Models/Task")

exports.getIndexPage = async (req, res) =>{
    const tasks = await Task.find({});
    res.status(200).render('index', {tasks});
}