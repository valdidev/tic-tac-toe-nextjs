import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  return (
    <div>
      <p>Ey! {currentPlayer}, your turn</p>
      This a is the board
    </div>
  );
}

export default Board;
