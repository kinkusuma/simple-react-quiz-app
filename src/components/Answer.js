export default function Answer(props) {
  const { value } = props;
  return (
    <div className="flex items-center justify-center w-full h-7 p-2 rounded hover:bg-blue-200">
      <p>{value}</p>
    </div>
  );
}
