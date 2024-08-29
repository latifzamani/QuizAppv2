export default function StartView({QNo,dispatch}){
    return (
        <div className="text-white mt-4">
            <h1 className=" font-bold text-5xl mt-12">Welcome to the react quiz</h1>
            <h4 className=" text-3xl mt-8">{QNo} questions to test your react mastery</h4>
            <button className=" bg-blue-300 text-blue-900 p-3 mt-12 w-32 rounded-xl" onClick={()=>dispatch({type:'start'})}>Let's start</button>
        </div>
    )
}