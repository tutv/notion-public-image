const got = require('got')


module.exports = async (url, res) => {
    return got.stream(url)
}

