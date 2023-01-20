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
        <Stack className="mx-16 gap-8">
          <div className="mr-8">
            <UmkmRwTable title="Daftar UMKM RW 1" />
          </div>
          <div className="ml-8">
            <UmkmRwTable title="Daftar UMKM RW 2" tableHeaderTitle="2" />
          </div>
          <div className="mr-8">
            <UmkmRwTable title="Daftar UMKM RW 3" />
          </div>
          <div className="ml-8">
            <UmkmRwTable title="Daftar UMKM RW 4" tableHeaderTitle="2" />
          </div>
          <div className="mr-8">
            <UmkmRwTable title="Daftar UMKM RW 5" />
          </div>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default Umkm;
