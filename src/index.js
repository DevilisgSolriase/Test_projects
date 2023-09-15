const express = require( 'express' );
const app = express();

const indexRouter = require('./routes/index.js')

const PORT = 3000;

app.set('views', 'views');
app.set('views engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.use('/' , indexRouter);

app.listen(POST, ()=>{
    console.log(`listening on post ${PORT}`);
})

app.get('/', (req, res)=>{
    res
})