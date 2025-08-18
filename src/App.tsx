import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null 
  sortOrder: string
  searchText: string
}

function App() {
  const currentBp = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        {" "}
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}></NavBar>{" "}
      </GridItem>

      <Show
        when={
          currentBp == "lg" || currentBp == "xl" || currentBp == "2xl"
            ? true
            : false
        }
      >
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => {
              setSelectedGenre(genre);
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <PlatformSelector></PlatformSelector>
      <GridItem area="main">
        {" "}
        <PlatformSelector></PlatformSelector>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>{" "}
      </GridItem>
    </Grid>
  );
}

export default App;
