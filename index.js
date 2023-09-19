const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index.js')
const ProfileRouter = require('./routes/profile.js')

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`listening on post ${PORT}`);
})

// view engine set up
app.set('views',path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

// app configuration
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());


//routes
app.use('/HomePage' , indexRouter);
app.use('/Profile' , ProfileRouter);


