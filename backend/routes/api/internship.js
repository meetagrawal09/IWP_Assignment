const express = require('express')
const router = express.Router()
const Internship = require('../../models/internship')

const bcrypt = require('bcryptjs')

const config = require('config')
const jwt = require('jsonwebtoken')

const auth = require('../../middleware/auth')




module.exports = router



