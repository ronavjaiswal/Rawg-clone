import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";

interface Props {
    onSelectPlatform: (platform:Platform) => void
}

const PlatformSelector = () => {
  const { data } = usePlatforms();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button marginLeft = {2} variant="outline" size="sm">
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map(
              (platform: {
                name:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined;
                id: Key | null | undefined;
              }) => (
                <Menu.Item value = "hello" key={platform.id}>{platform.name}</Menu.Item>
              )
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
