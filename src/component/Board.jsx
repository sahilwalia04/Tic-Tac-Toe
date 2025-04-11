import React, { useState } from 'react'
import Squard from './Squard'
import './Board.css'
function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [change, setChange] = useState(true)
    const [result, setresult] = useState(null)
    const handleCalculatewinner = (squares) =>{
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6],            // Diagonals
      ];
      for(let line of lines){
        const [a , b , c] = line;
       if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        setresult(squares[a]);
        break;
     }
      setresult(null);
    }
  }
    const handleClick = (index) => {
      // console.log(index);   
      if(squares[index]) return;
    const newSquare = squares.slice();
    newSquare[index] = change ? 'X' : 'O'; 
    console.log(newSquare);
      setSquares(newSquare)
      setChange(!change)    
      handleCalculatewinner(newSquare);
    }
  return (
    <div className='board'>                       
      {[0,1,2].map((row)=>(
        <div key={row} className='row'>
            
            {[0,1,2].map((col)=>{
              const   index = row * 3 + col;
              return (
                <Squard 
                key={index}               
                value={squares[index]} 
                onClick={()=>handleClick(index)}
                />
              )
            })}
        </div>
      ))}
      <h1>Winner team: {result}</h1>
    </div>
  )
}

export default Board
