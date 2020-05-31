const { Router } = require('express')
const router = Router()

// v2 
// const express = require('express')

// const Router = express.Router;

router.get('/ping', (request, response) => {
    response.send("pong")
})

module.exports = router