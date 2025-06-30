import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Statistics } from "../../assets/data.js";
import StatisticsCard from "./StatisticsCard.jsx";

const CodingStatistics = () => {
  return (
    <SimpleGrid columns={4} spacing={4} mt={5} mb={5}>
      {Statistics.map((statistic, index) => (
        <StatisticsCard key={statistic.id} {...statistic} />
      ))}
    </SimpleGrid>
  );
};

export default CodingStatistics;
