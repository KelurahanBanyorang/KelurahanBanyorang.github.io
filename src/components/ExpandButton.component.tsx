import { Text } from "@mantine/core";
import React from "react";

export interface IExpandButton {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandButton: React.FC<IExpandButton> = ({
  isExpanded,
  setIsExpanded
}) => {
  return (
    <Text
      className="md:hidden bg-white hover:bg-white text-primaryBlue self-start p-0 tracking-1 text-justify m-0 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? "Lebih Sedikit" : "Selengkapnya"}
    </Text>
  );
};
export default ExpandButton;
