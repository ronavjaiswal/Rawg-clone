import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      
      <SimpleGrid columns = {{sm:1, md:2, lg:3, xl:5}} padding = "10px" gap = "10px">
        
      {games.map((ele) => (
          <GameCard game = {ele}></GameCard>
        ))}
        
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
