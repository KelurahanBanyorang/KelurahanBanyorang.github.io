import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IMonografiCircle {
  text?: string | JSX.Element;
  description?: string;
  size?: "sm" | "md" | "lg"
}

const MonografiCircle: React.FC<IMonografiCircle> = ({
  text = "",
  description = "",
  size = "sm"
}) => {
  let ts : string;

  if(size=="sm"){
    ts= "text-[36px]"
  }else if(size=="md"){
    ts= "text-[40px]"
  }else{
    ts= "text-[48px]"
  }
  return (
    <Stack className="gap-0">
      <Text className={`${ts} font-poppins-bold align-middle text-primaryDarkBlue text-center`}>
        {text}
      </Text>
      <Text className="text-[18px] font-poppins -mt-1 text-secondary-text-500 text-center">
        {description}
      </Text>
    </Stack>
  );
};
export default MonografiCircle;
