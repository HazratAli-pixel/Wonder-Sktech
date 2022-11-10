import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} -Wonder Sketches`
    },[title])
}

export default useTitle;