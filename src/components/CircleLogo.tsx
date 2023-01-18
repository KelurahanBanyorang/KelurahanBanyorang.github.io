import { Stack, Image } from "@mantine/core";
import React from "react";

export interface ICircleLogo {
  src: any
  p?: string
}

const CircleLogo: React.FC<ICircleLogo> = ({src, p="p-3"}) => {
  return (
    <div className={`w-[86px] bg-white rounded-full ${p} shadow-[0_0_7px_2px_rgba(139,139,139,0.9)]`}>
      <img src={src} />
    </div>
  );
};
export default CircleLogo;
