import { Stack } from "@mantine/core";
import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import UmkmHeader from "./UmkmHeader.section";
import UmkmRwTable from "./UmkmRwTable.component";

export interface IUmkm {}

const Umkm: React.FC<IUmkm> = ({}) => {
  return (
    <MainLayout>
      <Stack>
        <UmkmHeader />
        <Stack className="mx-16 gap-12">
          <div className="mr-8">
            <UmkmRwTable title="Daftar UMKM RW 1" rw={1} />
          </div>
          <div className="ml-8">
            <UmkmRwTable title="Daftar UMKM RW 2" tableHeaderTitle="2" rw={2} />
          </div>
          <div className="mr-8">
            <UmkmRwTable title="Daftar UMKM RW 3" rw={3} />
          </div>
          <div className="ml-8">
            <UmkmRwTable title="Daftar UMKM RW 4" tableHeaderTitle="2" rw={4} />
          </div>
          <div className="mr-8">
            <UmkmRwTable title="Daftar UMKM RW 5" rw={5} />
          </div>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default Umkm;
