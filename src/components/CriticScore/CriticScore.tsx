import React from "react";
import { Badge } from "@chakra-ui/react";

function CriticScore({ score }: { score: number }) {
  const color: string = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge
      fontSize={"15px"}
      borderRadius={"5px"}
      colorScheme={color}
      paddingX={1.5}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
