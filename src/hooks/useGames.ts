import apiClient from "@/services/api-client";
import React, { useState, useEffect } from "react";


export interface Game {
    id: number;
    name: string;
  }
  
export interface GameResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<GameResponse>("/games", {signal : controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) =>{ 
        if (err.message === "canceled") return;
        
        setError(err.message)});

      return () => controller.abort()
  }, []);

  return {games, error}
}

export default useGames;