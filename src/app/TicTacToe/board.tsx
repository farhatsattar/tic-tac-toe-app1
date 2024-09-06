
import React, { useState } from 'react'
import Square from './square'

 const Board = () => {
    const [state,setState] = useState(Array(9).fill(null));
    const [isxTurn,setisxTurn] = useState(true);
    const checkWinner = ()=>{
        const winnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] ===  state[b] && state[a] === state[c]){

                return state[a];
            }
               
        
            }

        return false;


    };
    const isWinner =checkWinner();

    const handleClick = (index:any)=>{
        if(state[index] !== null){
            return;
        }
const copyState = [...state];
     copyState[index] = isxTurn ? "x" : "o" ;
     setState(copyState);
     setisxTurn(!isxTurn);
    };
    const handleReset =()=>{
        setState(Array(9).fill(null));

    };
  return (
    <div className="board-container"><h1 className='font-bold text-5xl'>

    Tic-Tac-Toe Game In <span className='font-bold text-emerald-500'> Next.js</span>

    </h1>
    {isWinner?(<>
    {isWinner} won the Game {""}<button onClick={handleReset} className='play-again'> play again</button> </>):(

    <>
    <h4 className='p-4 font-bold text-2xl'> player {isxTurn? "x":"o"} Please move </h4>
        <div className="board-row">
       <Square onClick={()=>handleClick(0)} value={state[0]}/> 
       <Square onClick={()=>handleClick(1)} value={state[1]}/>
       <Square onClick={()=>handleClick(2)} value={state[2]}/>   
        </div>
        <div className="board-row">
        <Square onClick={()=>handleClick(3)} value={state[3]}/>
        <Square  onClick={()=>handleClick(4)}value={state[4]}/> 
        <Square  onClick={()=>handleClick(5)}value={state[5]}/>  
        </div>
        <div className="board-row">
        <Square  onClick={()=>handleClick(6)}value={state[6]}/>
        <Square onClick={()=>handleClick(7)} value={state[7]}/> 
        <Square  onClick={()=>handleClick(8)}value={state[8]}/>  
        </div>
        </>)}
        
        
    
    </div>
  );
};
export default Board;