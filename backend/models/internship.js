const mongoose = require('mongoose')

const internshipSchema = mongoose.Schema({
    user:{

    },
    company_name:{
        type:String,
        required:true
    },
    job_title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date_start:{
        type:Date,
        required:true
    },
    date_end:{
        type:Date,
        required:true
    }
})


module.exports=mongoose.model('internship',internshipSchema)