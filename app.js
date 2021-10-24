const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const pageRoute = require('./routers/pageRoute')
const taskRoute = require('./routers/taskRoute')

const app = express();
 
//db connect
mongoose.connect('mongodb+srv://huseyin:P2YLDCHepSaLN9v@cluster0.1ctlq.mongodb.net/todo-list?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  console.log('Connected DB successfully');
});

//template engine 
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//routes
app.use('/', pageRoute);
app.use('/', taskRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
