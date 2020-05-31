const { Router } = require('express')
const router = Router()

let counter = 0

router.put('/count', (request, response) => {

    response.send(`This route has been hit ${counter++} times`)
})

router.delete('/reset', (request, response) => {
    counter = 0
    response.send("The count has been reset")
})

router.post('/sum', (request, response) => {
    // console.log('i am in this route', request.body)
    // response.send({ foo: request.body })
   const number = request.body.number
   response.send(`The sum of ${number} and 7 is ${number + 7}`)
})

router.get('/subtract', (request, response) => {
    const number = request.query.number
    response.send(`${number} -7 is ${number - 7}`)
})

module.exports = router