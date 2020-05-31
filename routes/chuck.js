const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.get('/chuck', async (request, response) => {
    const random = await axios.get("https://api.chucknorris.io/jokes/random")
    response.send(random.data.value)
    // console.log(random)
    })


module.exports = router