const express = require('express')
const compression = require('compression')
const helmet = require("helmet")


const app = express()
app.use(compression())
app.use(helmet())

const _run = async () => {
    const port = process.env.PORT || 9300

    app.get('/', (req, res) => res.send("Hello world!"))

    app.use(require('./app.routes'))

    app.listen(port, async () => {
        console.log(`App listening on port ${port}`)
    })
}

setImmediate(async () => {
    try {
        await _run()
    } catch (error) {
        console.log("ERROR:", error)
    }
})

