import { Stack, Text } from "@mantine/core";
import React from "react";
import noImage from "../../assets/img/no-image.png";

export interface IChartNode {
  nodeOrder: 0 | 1 | 2;
  img?: string;
  name?: string;
  position?: string;
}

const ChartNode: React.FC<IChartNode> = ({ nodeOrder, img=noImage, name="Pak ..", position="Jabatan" }) => {
  return (
    <Stack
    // w-[150vw] md:w-[125vw]
      className={`gap-0 ${
        nodeOrder == 2 ? "mb-4" : ""
      }`}
    >
      <img
        src={img==null? noImage : img}
        className={`${
          nodeOrder == 0
            ? "md:w-20 md:h-20 h-14 w-14"
            : nodeOrder == 1
            ? "w-10 h-10"
            : "w-8 h-w-8"
        } self-center rounded-full ${
          nodeOrder == 0
            ? "bg-secondary-500"
            : nodeOrder == 1
            ? "bg-secondary-500"
            : "bg-secondary-500"
        }`}
        alt="Foto RT/RW"
      />
      <Stack className="gap-0">
        <Text className="text-primary-text-500 text-[18px] font-poppins-semibold">{position}</Text>
        <Text className="text-secondary-text-500 font-semibold -mt-1 text-md">{name}</Text>
      </Stack>
    </Stack>
  );
};
export default ChartNode;
