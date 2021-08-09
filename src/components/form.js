import React,{useState}from 'react';
import InputItem from './input';

const Form=(props)=>{

const[answer, setAnswer]=useState('')
const item1 = React.createRef();
 
const  mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + answer);
        event.target.value=answer
        setAnswer({answer:event.target.value})
      }

    return(

        <>

 <form onSubmit={mySubmitHandler}>
      
      <InputItem
       ref={item1}
       id="question1"
       itemName="textlabel"
       ariaLabel='Question!'
       answer="anser"
       required={true}
      />
   <p><input
        type='submit'
    /></p>
      
     
  </form>

        </>
    )
}


export default Form