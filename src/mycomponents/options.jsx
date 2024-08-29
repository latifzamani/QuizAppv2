import React from 'react'

export default function Options({question,dispatch,Answer}) {

  const hasAnswered= Answer !== null;
  return (
    <div className=''>
            {question.options.map((option,index)=>(
                <button className={` pl-6 text-start ${hasAnswered ? (index ===question.correctOption) ? " bg-green-300 cursor-not-allowed":" bg-orange-300 cursor-not-allowed":""}  ${ index==Answer ?' ml-[15%]':' ml-[0%]'} bg-blue-300 w-[60%] mt-4 p-3 rounded-3xl text-black  transition-all`}
                 key={option}
                 onClick={()=>dispatch({type:'newAnswer',payload:index})}
                 disabled={hasAnswered}
                 >
                    {option}
                </button>
            ))}
        </div>
  )
}
