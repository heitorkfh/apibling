const app = require('./app')
require('dotenv').config()
//console.log(process.env.PORT)
const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
