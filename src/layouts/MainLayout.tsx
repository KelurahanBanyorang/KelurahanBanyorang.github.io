import { AppShell, Group, Header, Navbar, Stack, Text } from "@mantine/core";
import React from "react";

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
              <Text className="text-primary-text-500 text-xl tracking-[0.01em]">
                Beranda
              </Text>
              <Text className="text-primary-text-500 text-xl tracking-[0.01em]">
                UMKM
              </Text>
              <Text className="text-primary-text-500 text-xl tracking-[0.01em]">
                Galeri
              </Text>
              <Text className="text-primary-text-500 text-xl tracking-[0.01em]">
                Tentang
              </Text>
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
