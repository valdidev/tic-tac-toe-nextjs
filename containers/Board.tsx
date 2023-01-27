import Square from "@/components/Square";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  const [winner, setWinner] = useState(null);

  function setSquareValue(index) {
      const newData = squares.map((value, i) => {
        if (i === index) {
          return currentPlayer
        }
        return value
      })

      setSquares(newData)
      setCurrentPlayer(currentPlayer === 'X' ? "O" : "X")
        
  }


  return (
    <div>
      <p>Ey! {currentPlayer}, your turn</p>
      

      {
    Array(9)
      .fill(null)
      .map((_, i) => {
        return <Square winner={winner} key={i} onClick={() => setSquareValue(i)} value={squares[i]} />;
      });
  }

    
    </div>
  );
}

export default Board;
