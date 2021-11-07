export default function Answer(props) {
  const { value, clickHandle } = props;
  return (
    <button type="button" onClick={() => clickHandle(value)} className="flex items-center justify-center w-full h-7 p-2 rounded hover:bg-blue-200">
      <p>{value}</p>
    </button>
  );
}
