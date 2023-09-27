const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    items:{
        type:Object
    },
   
 
    
},

{timestamps:true,})

const Orderdb=mongoose.model('foodorder',schema)

module.exports=Orderdb;