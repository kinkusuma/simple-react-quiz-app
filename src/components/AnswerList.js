import Answer from './Answer';

export default function AnswerList(props) {
  const {
    correct_answer: correctAnswer,
    incorrect_answers: incorrectcAnswers,
    clickHandler,
  } = props;
  const answers = [
    correctAnswer,
    ...incorrectcAnswers,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col space-y-3">
      {answers.map((item) => (
        <Answer value={item} clickHandler={clickHandler} />
      ))}
    </div>
  );
}
