import { Button, Card, Image, Text } from "@chakra-ui/react"
import { Game } from "@/hooks/useGames"

interface Props {
    game: Game
}

const GameCard = ({game} : Props) => {
  
    
    return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src= {game.background_image}
        alt= {game.name}
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
        {/* <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description> */}
      </Card.Body>
      {/* <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer> */}
    </Card.Root>
  )
}

export default GameCard