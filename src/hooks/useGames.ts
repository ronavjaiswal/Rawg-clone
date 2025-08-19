import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  sortOrder: string,
  searchText: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: sortOrder,
        search: searchText && searchText.trim().length > 0 ? searchText : undefined,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText]
  );

export default useGames;
