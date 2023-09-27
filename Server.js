const express=require('express');
const dotenv=require('dotenv');

const morgan=require('morgan')
const bodyparser=require('body-parser');

const app=express();
const connectDB=require('./connection')
dotenv.config({path:'config.env'});
app.use(morgan('tiny'));
connectDB();



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


const PORT=8080
app.use(express.static(__dirname));


//setiing view engine

app.set("view engine","ejs")
//setting router
app.use('/', require('./routes/router.js'))


//api 



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost${PORT}`)
})