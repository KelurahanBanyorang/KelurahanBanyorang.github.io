import { Stack, Text } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";
import MainLayout from "../../layouts/MainLayout.layout";
import UmkmHeader from "./UmkmHeader.section";
import UmkmRwTable from "./UmkmRwTable.component";

export interface IUmkm {}

const Umkm: React.FC<IUmkm> = ({}) => {
  return (
    <MainLayout>
      <Stack>
        <UmkmHeader />
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
