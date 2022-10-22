import React ,{useState,useEffect} from 'react';

const Numbers=()=>{
    const [numbers,setNumbers]=useState(['one','two','three'])
    const [letters,setLetters]=useState(['a','b','c'])
    const addNumber=()=>{
        setNumbers([...numbers,'four'])
    }
    const addLetter=()=>{
        setLetters([...letters,'d'])
    }
    useEffect(()=>{
        console.log('our use effect triggers only on numbers ');
    },[numbers,letters]); 
    return(
        <div>
        <h1>Numbers</h1>
        {numbers.map(num=>{
          return <h1>{num}</h1>
        })}
        <button onClick={addNumber}>Add a Number</button>
        {letters.map(letter=>{
          return <h1>{letter}</h1>
        })}
        <button onClick={addLetter}>Add a latter</button>
        </div>
    )
}
 export default Numbers;