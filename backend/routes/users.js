const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

const auth = require('../middleware/auth')


//getting all users 
router.get('/',auth,async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})


//getting one user
router.get('/:id',getUser,(req,res)=>{
    res.json(res.user)
})


//Creating one user
router.post('/',async(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({ message:err.message })
    }
})


//Updating one
router.patch('/:id',getUser,async(req,res)=>{
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }

    try{
        const updatedUser = await res.user.save()
        res.json(updatedUser)

    } catch(err){
        res.status(400).json({ message:err.message })
    }
})


//Deleting one
router.delete('/:id',getUser,async(req,res)=>{
    try{
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    }catch(err){
        res.status(500).json( {message:err.message} )
    }
})


//middleware function
async function getUser(req,res,next){

    let user 

    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json('Cannot find User')
        }
    }catch(err){
        return res.status(500).json({ message:err.message })
    }

    res.user = user
    next()
}

module.exports = router