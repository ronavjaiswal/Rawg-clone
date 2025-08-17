import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import { Button } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import GameGrid from "./components/GameGrid"


function App() {

  const currentBp = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  })


  return (
    
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      
    <GridItem area = 'nav'> <NavBar></NavBar> </GridItem>

    <Show when = {currentBp == "lg" || currentBp == "xl" || currentBp == "2xl" ? true : false}>
      <GridItem area = 'aside'> Aside </GridItem>
    </Show>

    <GridItem area = 'main'>   <GameGrid></GameGrid> </GridItem>
    </Grid>
  )
}

export default App
