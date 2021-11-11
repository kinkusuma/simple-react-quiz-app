import Score from './Score';

export default function GameOver(props) {
  const { score, clickHandler } = props;
  return (
    <div className="w-96 p-3 flex flex-col space-y-8 items-center">
      <div className="text-lg font-bold">
        Game Over, Your Score:
      </div>
      <Score value={score} />
      <button
        type="button"
        onClick={clickHandler}
        className="w-60 h-min p-2 bg-indigo-200 border-2 border-indigo-300 rounded hover:bg-indigo-300"
      >
        <div className="font-bold">
          Play Again
        </div>
      </button>
    </div>
  );
}
