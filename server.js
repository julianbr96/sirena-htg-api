'use strict'
const app = require('./src/app')
const PORT = process.env.PORT || require('./src/config/global.json').PORT

app.listen(PORT)
console.log(`Server is listening on PORT ${PORT}`)
