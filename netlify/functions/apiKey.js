exports.handler = async event => {
    const geminiApiKey = process.env.API_KEY;
    const { text } = event.queryStringParameters;

    const headers = {
        'Content-Type': 'application/json'
    };
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`;
    const data = {
        contents: { parts: { text } }
    }

    const options = {
        method: 'POST',
        headers,
        url,
        data
    }

    const response = await axios(options);
    let responseOfQuery = response?.data?.candidates[0]?.content?.parts[0]?.text;

    return {
        statusCode: 200,
        body: JSON.stringify({ responseOfQuery })
    }
}