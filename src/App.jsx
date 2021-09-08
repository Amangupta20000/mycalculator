import React, { useState } from 'react'

function App() {
    const [result,setresult] =useState('')
    const handleCLick = (e) => {
        setresult(result.concat(e.target.name))
    }
    const clear = ()=>{
        setresult('')
    }
    const backspace = ()=>{
        setresult(result.slice(0,-1))
    }
    const calculate = ()=>{
        try{
            // eslint-disable-next-line 
            setresult(eval(result).toString())       
        }
        catch{
            setresult('Error')
        }
    }
    return (
        <div className='container' >
            <div className='calculator'>
            <form action="" id='result' >
                <input id="output" type="text" value={result} />
            </form>
            
            <div className='keypad' >
                <button className='highlight ' onClick={clear} id='clear'>Clear</button>
                <button className='highlight ' onClick={backspace} >C</button>
                <button className='highlight operator' name='/' onClick={handleCLick}>&divide;</button>
                <button name='7' className='number'  onClick={handleCLick}>7</button>
                <button name='8' className='number' onClick={handleCLick}>8</button>
                <button name='9' className='number' onClick={handleCLick}>9</button>
                <button className='highlight operator' name='*' onClick={handleCLick}>&times;</button>
                <button name='4' className='number' onClick={handleCLick}>4</button>
                <button name='5' className='number' onClick={handleCLick}>5</button>
                <button name='6' className='number' onClick={handleCLick}>6</button>
                <button className='highlight operator' name='-' onClick={handleCLick}>&ndash;</button>
                <button name='1' className='number' onClick={handleCLick}>1</button>
                <button name='2' className='number' onClick={handleCLick}>2</button>
                <button name='3' className='number' onClick={handleCLick}>3</button>
                <button className='highlight operator' name='+' onClick={handleCLick}>+</button>
                <button name='0' className='number' onClick={handleCLick}>0</button>
                <button name='.' className='number' onClick={handleCLick}>.</button>
               
                <button className='highlight' onClick={calculate} id='result'>=</button>
            </div>
        </div>
        </div>
        
    )
}

export default App