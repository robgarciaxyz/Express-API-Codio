const express = require('express')
const server = express()
const pingRoute = require('./routes/ping')
const chuckRoute = require('./routes/chuck')
const mathRoutes = require('./routes/math')
const PORT = process.env.port || 5000

server.use(express.json())

server.use('/', pingRoute)
server.use('/', chuckRoute)
server.use('/math', mathRoutes)


server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`) )

