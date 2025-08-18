import apiClient from "@/services/api-client";
import React, { useState, useEffect } from "react";

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: Platform}[]
    metacritic: number
  }
  
export interface GameResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()

    apiClient
      .get<GameResponse>("/games", {signal : controller.signal})
      .then((res) => 
        {setGames(res.data.results);
          setLoading(false)


        })
      .catch((err) =>{ 
        if (err.message === "canceled") return;

        setError(err.message)});
        // setLoading(false)



      return () => controller.abort()
  }, []);

  return {games, error, isLoading}
}

export default useGames;