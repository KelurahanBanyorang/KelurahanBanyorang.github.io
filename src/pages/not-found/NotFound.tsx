import { Button, Stack, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ForwardIconBold } from "../../assets/icons/Fluent";
import MainLayout from "../../layouts/MainLayout.layout";

export interface INotFound {}

const NotFound: React.FC<INotFound> = ({}) => {
  const navigate = useNavigate();
  return (
    <MainLayout activePage="beranda">
      <Stack className="justify-center h-full">
        <Stack>
          <Stack className="gap-0">
            <Text className="font-poppins-bold text-[28px] sm:text-[32px] md:text-[42px] text-primary-text-500 text-center">
              Halaman Tidak Ditemukan!
            </Text>
            <Text className="text-center text-secondary-text-500 -mt-2">
              Halaman tidak ditemukan atau URL website yang dimasukkan salah
            </Text>
          </Stack>
          <Button
            onClick={() => navigate("/")}
            className="text-center font-poppins font-normal text-primaryGreen text-lg hover:bg-white bg-white"
          >
            <ForwardIconBold size={22} color={"#03C988"} className="mr-1" />
            Kembali ke Halaman Beranda
          </Button>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default NotFound;
