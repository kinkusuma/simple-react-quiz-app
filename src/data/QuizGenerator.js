import axios from 'axios';

const getToken = async () => {
  const response = await axios.get('https://opentdb.com/api_token.php?command=request');
  return response.data.token;
};

const getQuestion = async (token) => {
  const response = await axios.get(`https://opentdb.com/api.php?amount=1&token=${token}`);
  const data = response.data.results[0];
  data.answers = [
    data.correct_answer,
    ...data.incorrect_answers,
  ].sort(() => Math.random() - 0.5);
  return data;
};

export default { getToken, getQuestion };
