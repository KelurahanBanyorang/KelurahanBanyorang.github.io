import { AppShell, Group, Header, Navbar, Stack, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export interface IMainLayout {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <AppShell
      padding={0}
      header={
        <Stack p="xs" className="items-center flex flex-row pr-6 pt-4">
          <Group className="w-full justify-between">
            <Text className="text-primary-text-500 text-[30px] font-poppins-semibold ml-4">
              Kelurahan Banyorang
            </Text>
            <Group className="self-end mb-1">
              <Link to={"/"} className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer">
                Beranda
              </Link>
              <Link to={"/umkm"} className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer">
                UMKM
              </Link>
              <Link to={"#"} className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer">
                Galeri
              </Link>
              <Link to={"#"} className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer">
                Tentang
              </Link>
            </Group>
          </Group>
        </Stack>
      }
    >
      {children}
    </AppShell>
  );
};
export default MainLayout;
