const express = require ('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    res.send('Hello from Routes Folder!')

})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})

router.get('/json', (req, res, next) => 
    res.json({
        greating: 'Hello from routes folder!'
    }))

module.exports = router