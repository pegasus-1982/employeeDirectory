import { useState } from "react";


function useDebounce = (searchTerm, delay) => {
    //useState()
    const[debouncedValue, setDebouncedValue] = useState(searchTerm);

    //useEffect(() =>{},[])
    //return something
    return debouncedValue;
    
}