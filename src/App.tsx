import { Grid, GridItem, HStack, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import usePlatforms, { Platform } from "./hooks/usePlatforms";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const currentBp = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

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
        <NavBar onSearch={(text: string) => setSearchText(text)} />
      </GridItem>
      <Show when={
          currentBp == "lg" || currentBp == "xl" || currentBp == "2xl"
            ? true
            : false
        }>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={2} marginBottom={5}>
          <PlatformSelector/>
          <SortSelector
            sortOrder={sortOrder}
            onSelectSortOrder={(order) => setSortOrder(order)}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          sortOrder={sortOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
