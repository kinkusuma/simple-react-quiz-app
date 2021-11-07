import Answer from './Answer';

export default function AnswerList(props) {
  const { answers, clickHandle } = props;
  return (
    <div className="flex  flex-col space-y-3">
      {answers.map((item) => <Answer clickHandle={clickHandle} value={item} />)}
    </div>
  );
}
