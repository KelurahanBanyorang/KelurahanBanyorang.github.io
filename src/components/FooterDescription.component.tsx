import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IFooterDescription {
  title?: string;
  description?: string;
}

const FooterDescription: React.FC<IFooterDescription> = ({
  description,
  title
}) => {
  return (
    <Stack className="">
      <Text className="text-white text-xl tracking-[0.01em] font-semibold">
        {title || "Lorem"}
      </Text>
      <Text className="text-white text-lg tracking-4">
        {description ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis nulla aspernatur optio qui eius quibusdam veritatis cupiditate eaque natus! Lorem ipsum dolor sit amet."}
      </Text>
    </Stack>
  );
};
export default FooterDescription;
