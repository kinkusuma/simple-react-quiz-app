/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import QuizGenerator from './data/QuizGenerator';
import dummyData from './data/dummy.json';
import Question from './components/Question';
import AnswerList from './components/AnswerList';
import Score from './components/Score';
import HitPoints from './components/HitPoints';
import GameOver from './components/GameOver';

function App() {
  const [questionData, setQuestion] = useState({ ...dummyData });
  const [token, setToken] = useState('');
  const [score, setScore] = useState(0);
  const [hitPoints, setHitPoints] = useState(3);
  const [isOver, setIsOver] = useState(false);

  const setQuiz = () => {
    QuizGenerator.getToken().then((item) => { setToken(item); });
    QuizGenerator.getQuestion(token).then((item) => { setQuestion(item); });
  };

  useEffect(() => {
    setQuiz();
  }, []);

  const changeQuiz = () => {
    QuizGenerator.getQuestion(token).then((item) => { setQuestion(item); });
  };

  const clickAnswer = (selected, correct) => {
    if (selected === correct) {
      setScore(score + (questionData.difficulty === 'easy' ? 10 : 20));
    } else {
      if (hitPoints === 1) {
        setIsOver(true);
      }
      setHitPoints(hitPoints - 1);
    }
    changeQuiz();
  };

  const playAgain = () => {
    setIsOver(false);
    setHitPoints(3);
    setScore(0);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-lg border shadow-lg p-10 m-20">
        {isOver ? <GameOver score={score} clickHandler={playAgain} /> : (
          <div>
            <Score value={score} />
            <HitPoints point={hitPoints} />
            <Question {...questionData} />
            <AnswerList
              {...questionData}
              clickHandler={(e) => { clickAnswer(e, questionData.correct_answer); }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
