exports.handler = async event => {
    const geminiApiKey = process.env.API_KEY;
    const apiData = {
        geminiApiKey
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ apiData })
    }
}