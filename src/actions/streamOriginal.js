const Notion = require('../services/Notion')
const _streamFileFromUrl = require('./_streamFileFromUrl')


module.exports = async (imageId) => {
    console.log("ImageID:", imageId)

    const url = await Notion.getImageUrl(imageId)
    console.log("URL:", url)

    return _streamFileFromUrl(url)
}

