import { Button, Group, Stack, Text } from "@mantine/core";
import React from "react";
import CircleLogo from "./CircleLogo";
import logoBantaeng from "../assets/img/logo-bantaeng.png";
import logoKKN from "../assets/img/logo-kknt.png";


export interface IJumbotron {}

const Jumbotron: React.FC<IJumbotron> = ({}) => {
  return (
    <div className="rounded-bl-lg bg-jumbotron m-0 p-0 w-full ml-7 h-[500px] bg-cover mb-32">
      <Stack className="rounded-bl-lg bg-gradient-to-r from-primaryDarkerBlue to-transparent h-full w-full relative">
        {/* <Stack className="gap-0 bg-white w-fit pr-6 rounded-r-md mt-40">
        <Text className="font-poppins-semibold text-2xl text-primaryGreen">Selamat Datang,</Text>
        <Text className="font-poppins-semibold text-[38px] text-primaryGreen -mt-2">Di Website Promosi</Text>
        <Text className="font-poppins-semibold text-[38px] text-primaryGreen -mt-4">Kelurahan Banyorang</Text>
        </Stack> */}
        <Stack className="gap-2 w-fit pr-6 rounded-r-md mt-40 pl-6">
          <Stack className="gap-0 border-l-[10px] pl-6 border-primaryGreen">
            <Text className="font-poppins-semibold text-2xl text-white">
              Selamat Datang,
            </Text>
            <Text className="font-poppins-semibold text-[38px] text-white -mt-2">
              Di Website Profil
            </Text>
            <Text className="font-poppins-semibold text-[38px] text-white -mt-4">
              Kelurahan Banyorang
            </Text>
          </Stack>
          <Button
            variant="light"
            className="bg-transparent hover:bg-transparent text-white text-lg w-fit h-10 border border-white px-3 py-2 self-end mt-2"
          >
            Selengkapnya
          </Button>
        </Stack>
        <Group className="absolute -bottom-10 right-0 mr-20 gap-8">
          <CircleLogo src={logoBantaeng} />
          {/* <CircleLogo src={logoBantaeng} /> */}
          <CircleLogo src={logoKKN} p="p-[10px]" />
        </Group>
      </Stack>
    </div>
  );
};
export default Jumbotron;
