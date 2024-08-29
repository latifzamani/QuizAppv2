import React from 'react'
import Options from './options';

export default function Question({question,dispatch,Answer}) {
    // console.log(question);
    
  return (
    <div >
        <h3 className=' text-white mt-8 mb-8 text-3xl'>{question.question}</h3>
        <Options question={question} dispatch={dispatch} Answer={Answer}/>
    </div>
  )
}
