import './progressbar.css'

export default function Progressbar({index,QNo,points,PNo,answer}){
    return (
        <header >
             {/* <input type="range"></input> */}
             <progress id='progressbar' max={QNo} className="w-[80%] mt-10" value={index + Number(answer !==null)} />
            <div className=" flex justify-between ml-[10%] w-[80%]">
            <p>questions <strong>{index+1}</strong>/{QNo}</p>
            <p>points <strong>{points}</strong>/{PNo}</p>
            </div>
        </header>
    )
} 