const express = require('express')
const blingController = require ('./controllers/blingController')
const router = express.Router()

router.get('/callbacks', blingController.getAll)
router.post('/callbacks', blingController.inserirCallback)
module.exports = router