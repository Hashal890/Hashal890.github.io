import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Statistics } from "../../assets/data";
import StatisticsCard from "./StatisticsCard";

const CodingStatistics = () => {
  return (
    <SimpleGrid columns={[2, 2, 4]} spacing="4" mt="5" mb="5">
      {Statistics.map((statistic, index) => {
        const { id, count, title, subject } = statistic;

        return (
          <StatisticsCard
            key={id}
            count={count}
            title={title}
            subject={subject}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default CodingStatistics;
