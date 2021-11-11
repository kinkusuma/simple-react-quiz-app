import axios from 'axios';

const getToken = async () => {
  const response = await axios.get('https://opentdb.com/api_token.php?command=request');
  return response.data.token;
};

const getQuestion = async (token) => {
  const response = await axios.get(`https://opentdb.com/api.php?amount=1&token=${token}`);
  return response.data.results[0];
};

export default { getToken, getQuestion };
