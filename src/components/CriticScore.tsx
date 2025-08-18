import { Badge } from "@chakra-ui/react";
import React from "react";

const CriticScore = ({ criticScore }: { criticScore: number }) => {
  const badgeColor =
    criticScore > 90 ? "green" : criticScore > 70 ? "yellow" : "red";
  return <Badge colorPalette={badgeColor}>{criticScore}</Badge>;
};

export default CriticScore;
