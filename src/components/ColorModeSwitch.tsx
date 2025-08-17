import { HStack, Switch } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root checked = {colorMode == 'dark' ? true : false} onCheckedChange = {toggleColorMode}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Dark Mode</Switch.Label>
    </Switch.Root>
      {/* <Switch checked = {colorMode == 'dark' ? true : false} onChange = {toggleColorMode}></Switch> */}
    </HStack>
  );
};

export default ColorModeSwitch;
