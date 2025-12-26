import { useEffect,useState } from "react";

function useCuernecyinfo(curency){
    const [data,setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[curency]))
        console.log(data);
    },[curency])
    console.log(data);
    return data
}
export default useCuernecyinfo;