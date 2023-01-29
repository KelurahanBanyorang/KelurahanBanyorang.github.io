import { Stack, Text } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";

export interface IUmkmHeader {}

const UmkmHeader: React.FC<IUmkmHeader> = ({}) => {
  return (
    <>
      <div className="mt-10 mb-8 md:mb-4 mx-4 md:mx-24 md:bg-umkm bg-cover h-[310px] overflow-hidden">
        <Stack className="gap-0 bg-gradient-to-r from-white via-white/[0.9] to-transparent h-full w-full">
          <Stack className="gap-0">
            <Text className="font-poppins-semibold text-[36px] md:text-[48px] text-primary-text-500">
              Data UMKM
            </Text>
            <Text className="mb-3 font-poppins-semibold text-[20px] md:text-[24px] text-secondary-text-500 -mt-2">
              Kelurahan Banyorang
            </Text>
          </Stack>
          {/* <VerticalDivider h="sm" /> */}
          <Text className="text-lg text-primary-text-500 text-justify sm:line-clamp-5 md:w-[50%] md:line-clamp-none mt-4">
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
            soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat quaerat odit provident cum architecto assumenda tenetur
            perspiciatis repudiandae sequi distinctio quae vitae quibusdam
            nostrum. */}
            UMKM (Usaha Mikro Kecil dan Menengah) adalah usaha produktif yang
            dimiliki perorangan maupun badan usaha yang telah memenuhi kriteria
            sebagai usaha mikro. Seperti diatur dalam peraturan
            perundang-undangan No. 20 tahun 2008, kriteria UMKM dibedakan secara
            masing-masing meliputi usaha mikro, usaha kecil, dan usaha menengah.
            Berikut Daftar UMKM di Kelurahan Banyorang dikelompokkan berdasarkan RW-nya.
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
