import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import { LocationIcon } from "../../assets/icons/Fluent";
import VerticalDivider from "../../components/VerticalDivider.component";
import mapThumbnail from "../../assets/img/peta-thumbnail.jpg";

export interface ILocation {}

const Location: React.FC<ILocation> = ({}) => {
  return (
    <Group className="mx-[48px] mt-14 self-center gap-10 relative">
      <LocationIcon
        size={120}
        color={"#deddf1"}
        className="absolute top-6 right-6"
      />
      <Stack>
        <Text className="font-poppins-semibold text-[32px] text-primary-text-500">
          Lokasi
        </Text>
        <div className="p-4 bg-primaryGreen">
          <img src={mapThumbnail} className={"w-96"} />
        </div>
      </Stack>
      <Stack className="gap-2">
        <Group className="gap-2">
          <Stack className="gap-0">
            <Text className="font-poppins-semibold text-[32px] text-primary-text-500">
              Kelurahan Banyorang
            </Text>
            <Text className="text-[22px] font-poppins-semibold -mt-2 text-secondary-text-500">
              Di Peta (Google Maps)
            </Text>
          </Stack>
        </Group>
        <VerticalDivider />
        <Text className="w-[600px] text-primary-text-500 tracking-1 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          inventore incidunt, quaerat excepturi, nostrum deserunt sed sit enim
          vero aut doloremque iste! Culpa, praesentium ad totam distinctio
          numquam quidem modi? Quas tempora sequi facere amet? Repellat
          cupiditate ullam molestiae magnam, id atque, eligendi aperiam
          repudiandae aspernatur beatae ab reprehenderit enim?
        </Text>
      </Stack>
    </Group>
  );
};
export default Location;
