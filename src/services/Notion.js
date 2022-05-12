const {Client} = require('@notionhq/client')

const notion = new Client({auth: process.env.NOTION_API_KEY})


exports.getImageUrl = async (blockId) => {
    const {type, image} = await notion.blocks.retrieve({block_id: blockId})

    if (type !== 'image') {
        throw new Error('Block is not an image.')
    }

    const {file} = Object.assign({}, image)
    const {url} = Object.assign({}, file)

    if (!url) {
        throw new Error('Url not found.')
    }

    return url
}

