import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}:Props) => {
  const { error, data, isLoading } = useGames(selectedGenre);

  const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      
      <SimpleGrid columns = {{sm:1, md:2, lg:3, xl:5}} padding = "10px" gap = "10px">
      {isLoading == true && skeletons.map(skeleton => <GameCardSkeleton key = {skeleton}></GameCardSkeleton>)}
      {data.map((ele) => (
          <GameCard key = {ele.id} game = {ele}></GameCard>
        ))}
        
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
