const streamOriginal = require('../actions/streamOriginal')

exports.viewImage = (req, res) => {
    const {id} = req.params

    streamOriginal(id)
        .then(stream => {
            stream.pipe(res)
        })
        .catch(error => {
            res.status(500).send(error.message || error)
        })
}

