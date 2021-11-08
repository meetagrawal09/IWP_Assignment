const express = require('express')
const router = express.Router()
const Internship = require('../../models/internship')

const auth = require('../../middleware/auth')


router.post('/add-internship',auth,async(req,res)=>{

    const internship = new Internship({
        user_id:req.user.id,
        title:req.body.title,
        date_start:req.body.date_start,
        date_end:req.body.date_end,
        description:req.body.description,
        link:req.body.link
    })

    try{
        const newInternship = await internship.save()
        res.status(201).json(newInternship)
    }catch(err){
        res.status(400).json({ message:err.message })
    }

})

router.get('/get-internships/:id',async(req,res)=>{

    try{
        const internships = await Internship.find({
            user_id : req.params.id
          })
        res.json(internships)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})

module.exports = router



