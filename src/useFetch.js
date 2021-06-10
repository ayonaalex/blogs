import { useState,useEffect } from "react";


const  useFetch= (url) => {
    const [blogs, setBlog] = useState(null);
    const [isPenidng,setIsPending] =useState(true);
    const [error,setError] = useState(null);


    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(res.status !== 200){
                throw Error('sorry we couldnt fetch the data')
            }
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setBlog(data);
            setIsPending(false);
            setError(null);
    
        })
        .catch(err=>{
          setError(err.message);
          setIsPending(false);
        })
    },[url]);
    
    return{blogs,isPenidng,error}

}
 
export default useFetch ;