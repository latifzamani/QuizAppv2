import React from 'react'

export default function FinishView({points,PNo,dispatch}) {
    const percentage=(points/PNo) *100;
  return (
    <div>
        <h1 className=' mt-12 bg-blue-400 rounded-3xl p-4'>
            📃
        You scored <strong>{points}</strong> out of {PNo} ( {Math.ceil(percentage)}% )
        </h1>
        <button 
        className=' bg-blue-200 w-32 mt-6  rounded-xl p-1 text-black'
        onClick={()=>dispatch({type:'restart'})}
        >Restart</button>

    </div>
  )
}
