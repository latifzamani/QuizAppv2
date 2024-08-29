import React from 'react'

export default function NextButton({dispatch,answer,index,QNo}) {
  
    if(answer===null) return null ;
   if(index < QNo-1) return (<div>
        <button 
          className=' bg-blue-200 w-32 mt-6  rounded-xl p-1 text-black'
          onClick={()=>dispatch({type:'nextQuestion'})}
        >Next</button>
    </div>)
   if(index == QNo-1) return (<div>
        <button 
          className=' bg-blue-200 w-32 mt-6  rounded-xl p-1 text-black'
          onClick={()=>dispatch({type:'finish'})}
        >Finish</button>
    </div>)
}
