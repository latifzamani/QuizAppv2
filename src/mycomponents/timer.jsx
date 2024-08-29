import React, { useEffect } from 'react'

export default function Timer({dispatch,secondsRemained}) {

    const min=Math.floor(secondsRemained/60);
    const sec=(secondsRemained%60);
    useEffect(function(){
       const id= setInterval(()=>{
             dispatch({type:'timer'});
             
            
        },1000)
        
        return ()=>(
            clearInterval(id)
        )

        }, [dispatch])
    
  return (
    <div className='bg-blue-400 w-32 mt-6 text-white rounded-xl p-1'>
        {min <10 ?'0':''}{min}:
        {sec < 10 ?'0':''}{sec}
    </div>
  )
}
