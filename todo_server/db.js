const mongoose = require('mongoose');

const uri= 'mongodb://localhost:27017/todo_db';

const connectToMongodb= async()=>{
    try{
        await mongoose.connect(uri)
        console.log('mongoDB connected successfuly')
    }catch(err){
        console.log('mongoDB connection failed'  , err.message)

    }
}

module.exports = connectToMongodb;
