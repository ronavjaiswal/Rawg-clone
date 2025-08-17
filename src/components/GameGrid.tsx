import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { li, ul } from "framer-motion/client";
import React, { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((ele) => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
