const express = require('express')
const router = require('./router')
const app = express()


//app.get('/', (request, response) => response.status(200).send('Teste'))
//app.post()
//app.delete()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
module.exports = app

//app.listen(3333, () => console.log('server running'))
