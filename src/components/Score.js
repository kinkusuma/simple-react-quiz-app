export default function Score(props) {
  const { value } = props;
  return (
    <div className="w-96 flex justify-center items-top">
      <div className="w-28 h-7 flex justify-center items-center rounded-full bg-indigo-400">
        <div className="font-bold text-white">
          {value}
        </div>
      </div>
    </div>
  );
}
