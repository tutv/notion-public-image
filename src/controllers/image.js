const streamOriginal = require('../actions/streamOriginal')

exports.viewImage = (req, res) => {
    const {id} = req.params
    streamOriginal(id)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.error(error)
        })

    res.send('image')
}

