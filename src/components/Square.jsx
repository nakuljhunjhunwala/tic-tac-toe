import React from "react";

function Square({setGameState , value , gameState}) {
  return (
    <div>
      <button className="square" onClick={() => {
          if (gameState[value] === '') {
            setGameState(
              {
              ...gameState,
              turn: gameState.turn + 1,
              [value]: gameState.turn % 2 === 0 ? 'X' : 'O'
            }
          )
          }
          }}>
        {gameState[value]}
      </button>
    </div>
  );
}

export default Square;
