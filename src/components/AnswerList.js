import Answer from './Answer';

export default function AnswerList(props) {
  const {
    answers,
    color,
    clickHandler,
  } = props;

  return (
    <div className="flex flex-col space-y-3">
      {answers.map((item, index) => (
        <Answer id={index} value={item} color={color} clickHandler={clickHandler} />
      ))}
    </div>
  );
}
