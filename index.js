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

    let netlifyOptions = {
      method: 'GET',
      url: 'https://the-genius-buddy.netlify.app/.netlify/functions/apiKey',
      params: {
        text
      }
    }
    let response = await axios(netlifyOptions);
    response = response?.data?.responseOfQuery;
    return response;

  } catch (error) {
    console.log(error?.response?.data || error?.response || error);
  }
}