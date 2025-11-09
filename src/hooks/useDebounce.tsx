import { useEffect, useState } from "react";

export function useDebounce<T> (value:T,delay:number):T{
    const [debounce,setDebounce] = useState<T>(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounce(value)
        },delay);
// ======== cleanup ============//
    return()=> clearTimeout(handler)
    },[value,delay]);
    
    
}