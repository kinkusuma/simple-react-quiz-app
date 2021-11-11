import htmlDecode from '../utils/HtmlDecoder';

export default function Answer(props) {
  const { value, clickHandler } = props;
  return (
    <button
      type="button"
      onClick={() => clickHandler(value)}
      className="w-96 h-min p-2 border-2 border-blue-300 rounded hover:bg-blue-200"
    >
      <div className="font-bold text-left text-sm">
        {htmlDecode(value)}
      </div>
    </button>
  );
}
