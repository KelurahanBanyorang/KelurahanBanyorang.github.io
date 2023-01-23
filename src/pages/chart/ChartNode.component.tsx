import { Stack, Text } from "@mantine/core";
import React from "react";
import noImage from "../../assets/img/no-image.png";

export interface IChartNode {
  nodeOrder: 0 | 1 | 2;
  img?: string;
}

const ChartNode: React.FC<IChartNode> = ({ nodeOrder, img=noImage }) => {
  return (
    <Stack
      className={`gap-0 ${nodeOrder == 0 ? "w-[125vw] sm:2-[150vw]" : ""} ${
        nodeOrder == 2 ? "mb-4" : ""
      }`}
    >
      <img
        src={img}
        className={`${
          nodeOrder == 0
            ? "w-24 h-24"
            : nodeOrder == 1
            ? "w-20 h-20"
            : "w-[72px] h-[72px]"
        } self-center rounded-full ${
          nodeOrder == 0
            ? "bg-secondary-500"
            : nodeOrder == 1
            ? "bg-secondary-500"
            : "bg-secondary-500"
        }`}
      />
      <Stack className="gap-0">
        <Text className="text-primary-text-500">Ketua Lurah</Text>
        <Text className="text-secondary-text-500 font-semibold -mt-[2px] text-md">Abdul Mannan</Text>
      </Stack>
    </Stack>
  );
};
export default ChartNode;
