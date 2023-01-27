type Player = "X" | "O" | null;

function Square({
  value,
  winner,
  onClick,
}: {
  value: Player;
  winner: Player;
  onClick: () => void;
}) {
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
}

export default Square;
