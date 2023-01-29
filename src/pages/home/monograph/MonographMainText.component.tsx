import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IMonographMainText {
  text?: string | JSX.Element;
  description?: string;
  size?: "sm" | "md" | "lg";
}

const MonographMainText: React.FC<IMonographMainText> = ({
  text = "",
  description = "",
  size = "sm"
}) => {
  let ts: string;

  if (size == "sm") {
    ts = "text-[26px] sm:text-[32px] md:text-[36px]";
  } else if (size == "md") {
    ts = "text-[30px] sm:text-[36px] md:text-[40px]";
  } else {
    ts = "text-[34px] sm:text-[44px] md:text-[48px]";
  }
  return (
    <Stack
      className={`gap-0 
    ${size == "sm" ? "hidden md:flex flex-col gap-0" : ""} `}
    >
      <Text
        className={`${ts} font-poppins-bold align-middle text-primaryDarkBlue text-center`}
      >
        {text}
      </Text>
      <Text className="text-lg md:text-[18px] font-poppins -mt-1 text-secondary-text-500 text-center">
        {description}
      </Text>
    </Stack>
  );
};
export default MonographMainText;
