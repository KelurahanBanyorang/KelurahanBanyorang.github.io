import { Stack, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import test from "../../../assets/img/umkm2.jpg";

export interface IExploreCard {
  src?: string;
  title?: string;
  to?: string;
  description?: string;
}

const ExploreCard: React.FC<IExploreCard> = ({
  src = test,
  title = "",
  to = "#",
  description
}) => {
  return (
    <Link to={to}>
      <Stack className="bg-white relative p-2 border rounded-sm border-secondary-text-500 gap-2 cursor-pointer pb-8 hover:bg-white hover:z-100 z-100">
        <div className="w-full h-full absolute bg-primaryGreen -bottom-2 md:-bottom-4 -left-2 md:-left-4 -z-10"></div>
        <div>
          <img src={src} alt="" className="h-[250px] object-cover w-full" />
        </div>
        <Stack className="px-2 bg-white">
          <Text className="text-primary-text-500 font-poppins-semibold text-xl text-center">
            {title}
          </Text>
          {/* <VerticalDivider h="sm" /> */}
          <Text className="text-lg text-primary-text-500 text-justify line-clamp-3 md:line-clamp-2">
            {description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquideos inventore possimus tenetur sed libero numquam dolores impedit? Iusto."}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};
export default ExploreCard;
