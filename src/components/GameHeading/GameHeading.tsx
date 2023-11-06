import React from "react";
import { GameQuery } from "../../App";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  //   Games
  // Action Game
  // Xbox Games
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={5}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
