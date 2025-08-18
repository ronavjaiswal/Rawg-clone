import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";


interface FetchResponse <T>{
    count: number
    results: T[]
}

const useData = <T>(endpoint : string) => {
    const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true)
        const controller = new AbortController()
    
        apiClient
          .get<FetchResponse<T>>(endpoint, {signal : controller.signal})
          .then((res) => 
            {setData(res.data.results);
              setLoading(false)
    
    
            })
          .catch((err) =>{ 
            if (err.message === "canceled") return;
    
            setError(err.message)});
            // setLoading(false)    
    
          return () => controller.abort()
      }, []);
    
      return {data, error, isLoading}
}

export default useData