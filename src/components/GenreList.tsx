import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root>
      {data.map((data) => (
        <List.Item key={data.id} paddingY="5px">
          <HStack gap={1}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(data.image_background)}
            />
            <Button
              height="auto"
              maxW="full"
              textAlign="left"
              justifyContent="flex-start"
              fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="plain"
              onClick={() => onSelectGenre(data)}
            >
              <Text lineClamp={2}>{data.name}</Text>
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
