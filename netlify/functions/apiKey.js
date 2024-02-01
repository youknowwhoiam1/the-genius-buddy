exports.handler = async event => {
    const geminiApiKey = process.env.API_KEY;
    return {
        statusCode: 200,
        body: JSON.stringify({ geminiApiKey })
    }
}