import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();

  const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      
      <SimpleGrid columns = {{sm:1, md:2, lg:3, xl:5}} padding = "10px" gap = "10px">
      {isLoading == true && skeletons.map(skeleton => <GameCardSkeleton key = {skeleton}></GameCardSkeleton>)}
      {data.map((ele) => (
          <GameCard game = {ele}></GameCard>
        ))}
        
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
