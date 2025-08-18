import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}:Props) => {
  
   const {data, isLoading, error} = useGenres()

   if (error) return null
   if (isLoading) return <Spinner/>
    return (
    <List.Root>
        {data.map(data => 
        <List.Item key = {data.id} paddingY="5px">
            <HStack>
                <Image
                    boxSize= "32px" 
                    borderRadius={8} 
                    src = {getCroppedImageUrl(data.image_background)}/>
                <Button fontWeight = {data.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize="lg" variant = "plain" onClick={() => onSelectGenre(data)}>{data.name}</Button>    
            </HStack>
        </List.Item>)}
    </List.Root>
  )
}

export default GenreList