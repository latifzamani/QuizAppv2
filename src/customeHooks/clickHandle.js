import { useEffect, useRef, useState } from "react";

export function useClickHandle(){
   
    const countRef=useRef(0);
    const [count, setCount] = useState({
      countNumber:countRef.current
    })
    function  clickHandle(e) {
      e.preventDefault();
      // console.log('click');
      
      setCount({...count,countNumber:countRef.current});
      
    }
    let  countVariable=1;
    useEffect(()=>{
      // console.log('countRef');
        countRef.current++;
        countVariable=countVariable+1;
        console.log(`countRef.current : ${countRef.current}`);
        console.log(`countVariable : ${countVariable}`);
      },[count])


      return {clickHandle};

}