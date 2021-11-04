import AnswerList from './components/AnswerList';
import Question from './components/Question';
import data from './utils/Data';

function App() {
  let idx = 0;
  const answ = [
    data.results.at(idx).correct_answer,
    ...data.results.at(idx).incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-lg border shadow-lg p-10 m-20">
        <Question value={data.results.at(idx).question} />
        <AnswerList answers={answ} />
      </div>
    </div>
  );
}

export default App;
