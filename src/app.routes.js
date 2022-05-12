const {Router} = require('express')
const router = Router()

const imageCtrl = require('./controllers/image')

router.get('/ping', (req, res) => res.send('pong'))


router.get('/images/:id', imageCtrl.viewImage)

router.all('*', (req, res) => {
    res.status(404).send('404 not found!')
})

module.exports = router

