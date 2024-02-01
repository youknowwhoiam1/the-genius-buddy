document.getElementById('questionForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const question = document.getElementById('question').value;
  const responseElement = document.getElementById('response');

  try {
    const answer = await getAnswer(question);

    responseElement.textContent = answer;
  } catch (error) {
    console.error('Error:', error);
    responseElement.textContent = 'An error occurred. Please try again.';
  }
});

const getAnswer = async (text) => {
  try {

    const headers = {
      'Content-Type': 'application/json'
    };
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
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
    return responseOfQuery;
  } catch (error) {
    console.log(error?.response?.data || error?.response || error);
  }
}