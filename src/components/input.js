import React,{useState} from 'react';
import { Fragment } from 'react';


const InputItem=React.forwardRef((props, ref)=>{
    const[answer, setAnswer]=useState('')
    const[submitted, setSubmitted]=useState(false)
    
    const submitAnswer=(e)=>{
        answer.length>5?setSubmitted(!submitted):error(e)
    }
    
    const editAnswer=()=>{
        setSubmitted(!submitted)    
    }

    const error=(e)=>{
        e.preventDefault()
        const error1=()=>{
            ref.current.value=''
            ref.current.placeholder='Please enter a valid value'
           }
        answer.length>0?  error1():ref.current.placeholder='You have not answered this question'
      
    }
    return(
        <>
 
      <label htmlFor={props.id}>{props.itemName}</label>
      <input
        ref={ref}
        id={props.id}
        type='text'
        aria-label={props.ariaLabel}
        aria-required="true"
        onChange={(e)=>setAnswer(e.target.value)}
        disabled={submitted}
        required={props.required}
      />
     
    
    {answer&&submitted? <> <span>answered</span>
      <button onClick={()=>editAnswer()}>edit</button></>:<button onClick={(e)=>submitAnswer(e)}>Submit Answer</button>} 
     
        </>
    )
})


export default InputItem