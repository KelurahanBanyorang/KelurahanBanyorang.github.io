import { Stack, Text } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";

export interface IUmkmHeader {}

const UmkmHeader: React.FC<IUmkmHeader> = ({}) => {
  return (
    <>
      <div className="mt-10 mb-4 mx-24 bg-umkm bg-cover h-[300px]">
        <Stack className="gap-0 bg-gradient-to-r from-white via-white to-transparent h-full w-full">
          <Stack className="gap-0">
            <Text className="font-poppins-semibold text-[48px] text-primary-text-500">
              Data UMKM
            </Text>
            <Text className="mb-3 font-poppins-semibold text-[24px] text-secondary-text-500 -mt-2">
              Kelurahan Banyorang
            </Text>
          </Stack>
          <VerticalDivider h="sm" />
          <Text className="text-lg text-primary-text-500 text-justify w-[50%] mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
            soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat quaerat odit provident cum architecto assumenda tenetur
            perspiciatis repudiandae sequi distinctio quae vitae quibusdam
            nostrum.
          </Text>
        </Stack>
      </div>
      {/* <div className="mt-10 mb-4 mx-24 bg-umkm2 bg-cover h-[400px] flex flex-col justify-center">
          <Stack className="gap-0 border-[8px] w-[50%] border-white ml-6 p-4 bg-black/[0.3] rounded-sm">
            <Group className="gap-2">
              <Text className="self-end font-poppins-semibold text-[48px] text-white">
                Data UMKM
              </Text>
              <Text className="self-end mb-3 font-poppins-semibold text-[24px] text-white -mt-6">
                Kelurahan Banyorang
              </Text>
            </Group>
            <Text className="text-lg text-white text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quaerat odit provident cum architecto assumenda tenetur
              perspiciatis repudiandae sequi distinctio quae vitae quibusdam
            </Text>
          </Stack>
        </div> */}
    </>
  );
};
export default UmkmHeader;
