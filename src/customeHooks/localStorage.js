import { useEffect, useState } from "react";

export function useLocalStorage(){

    const [list,setList]=useState([]);
  const [show,setShow]=useState(()=>{
    const storedValue=localStorage.getItem('movieList');
    return JSON.parse(storedValue);
  })
  const [movie,setMovie]=useState(['mName','Titanic','year','1999','director','John']);
  const [watched,setWached]=useState(['mName','Attack','year','2000','publish','USA']);
  useEffect(()=>{
      setList([...movie,...watched]);

      localStorage.setItem('movieList',JSON.stringify([...movie,...watched]));
  },[])

  return {show};
}