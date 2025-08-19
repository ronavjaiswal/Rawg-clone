import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";
import { Platform } from "@/hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const GameGrid = ({ selectedGenre, selectedPlatform, sortOrder, searchText }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform, sortOrder, searchText);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="10px" padding="10px">
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
