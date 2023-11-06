import React from "react";
import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme={"green"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>Dark</Text>
    </HStack>
  );
};
