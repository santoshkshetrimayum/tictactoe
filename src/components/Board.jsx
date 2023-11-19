import Button from "./Button"
import { useState } from 'react'

function Board() {
    const [cont, setCont] = useState(Array(9).fill(null))
    const [player,setPlayer] = useState('X')
    function checkFull(){
      let status = true
      cont.forEach((item)=>{    
        if(item==null){
          status = false
        }       
      })
      return status
    }

    function checkWiner(){
      const winnerLogic = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
      for(let logic of winnerLogic){
        const [x,y,z] = logic
        if(cont[x]!=null && cont[x]===cont[y] && cont[y]===cont[z]){
          return cont[x]
        }
      }
    }
    let isFull = checkFull()
    let winner = checkWiner()
    function handleClick(index){

        
        if(cont[index]==null){
            const copyCont = [...cont]
            copyCont[index] = player           
            setCont(copyCont)
            let turn = player!= 'X'? "X":"O"
            setPlayer(turn)
        
        }
    }

    function resetBoard(){
      setCont(Array(9).fill(null))
    }
    
  return (
    <div className="w-96 h-96 bg-slate-600 mt-5 text-white flex flex-wrap">
       { winner ? 
       <div className="w-full flex flex-col justify-center  items-center text-cyan-400">
        <h1 className="text-8xl">{winner} won</h1> 
        
          
       </div>:  
       <>{
        cont.map((value,index) =>{
          return <Button val={value} onClick={()=>handleClick(index)}/>
        })
       }
        
        </>}

        
      {(isFull||winner) &&
       <div className="w-full flex flex-col justify-center  items-center text-cyan-400">
       <button onClick={resetBoard} className="bg-cyan-400 hover:bg-cyan-500 px-5 py-2 text-slate-600 text-2xl rounded-md my-5">Play Again</button>
      </div>
      }
    </div>
  )
}

export default Board