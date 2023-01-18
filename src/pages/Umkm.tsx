import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import UmkmRwTable from "../components/UmkmRwTable";
import MainLayout from "../layouts/MainLayout";

export interface IUmkm {}

const Umkm: React.FC<IUmkm> = ({}) => {
  return (
    <MainLayout>
      <Stack className="mb-10">
        <Group className="border-l-[10px] pl-6 border-primaryBlue mx-24 gap-2 mt-10 mb-4">
          <Text className="self-end font-poppins-semibold text-[48px] text-primary-text-500">
            Data UMKM
          </Text>
          <Text className="self-end mb-3 font-poppins-semibold text-[24px] text-secondary-text-500 -mt-2">
            Kelurahan Banyorang
          </Text>
        </Group>
        <Stack className="mx-24 gap-4">
          <UmkmRwTable title="Daftar UMKM RW 1" />
          <UmkmRwTable title="Daftar UMKM RW 2" tableHeaderTitle="2" />
          <UmkmRwTable title="Daftar UMKM RW 3" />
          <UmkmRwTable title="Daftar UMKM RW 4" tableHeaderTitle="2" />
          <UmkmRwTable title="Daftar UMKM RW 5" />
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default Umkm;
