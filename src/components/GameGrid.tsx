import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { error, games } = useGames();

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
