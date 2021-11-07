import React, { useState } from 'react';
import AnswerList from './components/AnswerList';
import Question from './components/Question';
import data from './utils/Data';

function App() {
  const [idx, setIdx] = useState(0);
  const correct = data.results.at(idx).correct_answer;
  const answers = [
    data.results.at(idx).correct_answer,
    ...data.results.at(idx).incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  const event = (selected, correctAnswer) => {
    if (selected === correctAnswer) {
      console.log('right', selected, correctAnswer);
    } else {
      console.log('false', selected, correctAnswer);
    }
    setIdx(idx + 1);
    if (idx === data.results.length - 1) {
      setIdx(0);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-lg border shadow-lg p-10 m-20">
        <Question value={data.results.at(idx).question} />
        <AnswerList clickHandle={(e) => event(e, correct)} answers={answers} />
      </div>
    </div>
  );
}

export default App;
