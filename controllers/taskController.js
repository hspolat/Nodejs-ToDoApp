const Task = require('../Models/Task');

exports.createTask = async (req, res) => {
    
    try{
        await Task.create({
            description: req.body.description
        });
        res.status(201).redirect('/');
    } catch (err) {
        res.status(400).redirect('/')
    }
    
}

exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find({}).sort('dateCreated');
    res.status(200).render('index', {
        tasks
    })
}

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndRemove({_id: req.params.id});
    res.redirect('/');
}
