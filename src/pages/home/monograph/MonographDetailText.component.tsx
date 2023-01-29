import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import PlusMinusIcon from "../../../components/PlusMinusIcon.component";

export interface IMonographDetailText {
  label: string | JSX.Element;
  description: string | JSX.Element;
  wPlusMinusIcon?: boolean;
}

const MonographDetailText: React.FC<IMonographDetailText> = ({
  description,
  label,
  wPlusMinusIcon = false
}) => {
  return (
    <Stack className="gap-0">
      <Text className="text-lg text-secondary-text-500 font-semibold">
        {label}
      </Text>
      <Group className="gap-2">
        {wPlusMinusIcon ? <PlusMinusIcon /> : null}
        <Text className="text-xl text-primary-text-500 font-semibold">
          {description}
        </Text>
      </Group>
    </Stack>
  );
};
export default MonographDetailText;
