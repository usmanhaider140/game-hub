import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeSwitch } from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
export const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
