import htmlDecode from '../utils/HtmlDecoder';

export default function Question(props) {
  const { question, category, difficulty } = props;
  return (
    <div className="relative p-5 my-3 w-96 bg-blue-200 rounded border-2 border-blue-300">
      <div className="p-1 mb-3 w-10 h-7 absolute -top-3 -left-3 flex justify-center items-center rounded bg-blue-500">
        <div className=" text-white font-bold">
          {difficulty === 'easy' ? '10' : '20'}
        </div>
      </div>
      <div className="my-3 text-lg font-bold ">
        {htmlDecode(question)}
      </div>
      <div className="text-center font-bold text-blue-400 text-sm">
        {category}
      </div>
    </div>
  );
}
