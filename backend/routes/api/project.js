const express = require('express')
const router = express.Router()
const Project = require('../../models/project')

const auth = require('../../middleware/auth')


router.post('/add-project',auth,async(req,res)=>{

    const project = new Project({
        user_id:req.user.id,
        title:req.body.title,
        date_start:req.body.date_start,
        date_end:req.body.date_end,
        description:req.body.description,
        link:req.body.link
    })

    try{
        const newProject = await project.save()
        res.status(201).json(newProject)
    }catch(err){
        res.status(400).json({ message:err.message })
    }

})



router.get('/get-projects/:id',async(req,res)=>{

    try{
        const projects = await Project.find({
            user_id : req.params.id
          })
        res.json(projects)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})

module.exports = router