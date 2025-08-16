import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

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
      <GridItem area = 'aside' bg = 'gold'> Aside </GridItem>
    </Show>
    <GridItem area = 'main' bg = 'dodgerblue'> Main </GridItem>
    </Grid>
  )
}

export default App
