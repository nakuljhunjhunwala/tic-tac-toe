import React , { useState , useEffect} from "react";
import Square from "./Square";

function Board() {


  const [gameState, setGameState] = useState({a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '', turn: 0, player: 'X'})
    const [winner, setWinner] = useState(null);
const [score , setScore] = useState({X:0 , O:0})

      useEffect(()=>{
        if (gameState.a1 + gameState.a2 + gameState.a3 === 'XXX' ||
            gameState.b1 + gameState.b2 + gameState.b3 === 'XXX' ||
            gameState.c1 + gameState.c2 + gameState.c3 === 'XXX' ||
            gameState.a1 + gameState.b1 + gameState.c1 === 'XXX' ||
            gameState.a2 + gameState.b2 + gameState.c2 === 'XXX' ||
            gameState.a3 + gameState.b3 + gameState.c3 === 'XXX' ||
            gameState.a1 + gameState.b2 + gameState.c3 === 'XXX' ||
            gameState.a3 + gameState.b2 + gameState.c1 === 'XXX') {
              setWinner('X')
              // setScore({X: score.X + 1 , O: score.O})
        } else if (gameState.a1 + gameState.a2 + gameState.a3 === 'OOO' ||
            gameState.b1 + gameState.b2 + gameState.b3 === 'OOO' ||
            gameState.c1 + gameState.c2 + gameState.c3 === 'OOO' ||
            gameState.a1 + gameState.b1 + gameState.c1 === 'OOO' ||
            gameState.a2 + gameState.b2 + gameState.c2 === 'OOO' ||
            gameState.a3 + gameState.b3 + gameState.c3 === 'OOO' ||
            gameState.a1 + gameState.b2 + gameState.c3 === 'OOO' ||
            gameState.a3 + gameState.b2 + gameState.c1 === 'OOO') {
              setWinner('O')
              //
        }
      },[gameState, score])


  return (
    <div>

    <div className="mainBoard">
    <h2> TIC TAC TOE By Nakul</h2>
    <center>
    <div className="board">
      <Square gameState={gameState} value={'a1'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'a2'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'a3'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'b1'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'b2'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'b3'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'c1'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'c2'} setGameState={setGameState}/>
      <Square gameState={gameState} value={'c3'} setGameState={setGameState}/>
    </div>
</center>
    <button value="refresh" className="refresh" onClick={()=>{
      setGameState({a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '', turn: 0, player: 'X'})
      setWinner(null)
    }}>Refresh</button>
<center>
<table>
<tr>
<td>Player 1 &nbsp;</td>
<td>Player 2</td>
</tr>
<tr>
<td align="center">{score.X}</td>
<td align="center">{score.O}</td>

</tr>

</table>
</center>
    </div>



    {winner && <div className="winner" onClick={()=>{
      setGameState({a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '', turn: 0, player: 'X'})
      setWinner(null)
      winner === "X" ?  setScore({X: score.X + 1 , O: score.O}) : setScore({X: score.X , O: score.O + 1})
    }}>
    <div>
    Winner is {winner}
    </div>
    </div>}
    </div>
  );
}

export default Board;
