import {
  AppShell,
  Grid,
  Group,
  Header,
  Navbar,
  Divider,
  Stack,
  Text
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LocationIcon
} from "../assets/icons/Fluent";
import FooterDescription from "../components/FooterDescription";
import logoBantaeng from "../assets/img/logo-bantaeng.png";
import logoKKN from "../assets/img/logo-kknt.png";

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
            <Group className="self-end">
              <Link
                to={"/"}
                className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer"
              >
                Beranda
              </Link>
              <Link
                to={"/umkm"}
                className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer"
              >
                UMKM
              </Link>
              <Link
                to={"#"}
                className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer"
              >
                Galeri
              </Link>
              <Link
                to={"#"}
                className="text-primary-text-500 text-xl tracking-[0.01em] cursor-pointer"
              >
                Tentang
              </Link>
            </Group>
          </Group>
        </Stack>
      }
      footer={
        <Stack className="mt-[100px] bg-primary-text-500 px-14 pt-10 pb-4 border-t-8 border-r-8 rounded-tr-sm border-primaryGreen mr-8">
          <Group className="justify-between w-full mb-6">
            {/* <Text className="font-poppins text-[20px] text-primary-text-500">
              KKN Unhas
            </Text> */}
            <Group>
              <div className={`w-[72px]`}>
                <img src={logoBantaeng} />
              </div>
              <div className={`w-[72px]`}>
                <img src={logoKKN} />
              </div>
            </Group>
            <Text className="font-poppins-semibold text-[26px] text-white self-center">
              Kelurahan Banyorang
            </Text>
            <Group className="gap-6">
              <a
                href="https://web.facebook.com/kitabanyorang/?_rdc=1&_rdr"
                target={"_blank"}
              >
                <FacebookIcon color="#FFFFFF" size={32} />
              </a>
              <a
                href="https://www.instagram.com/kknt109_banyorang/"
                target={"_blank"}
              >
                <InstagramIcon color="#FFFFFF" size={30} />
              </a>
              <a
                href="https://www.google.com/maps/place/Banyorang,+Tompobulu,+Bantaeng+Regency,+South+Sulawesi/@-5.4628325,120.0316885,14z/data=!3m1!4b1!4m5!3m4!1s0x2dbeae8d7db5888b:0x6fad451a5622546f!8m2!3d-5.4630263!4d120.0347441"
                target={"_blank"}
              >
                <LocationIcon color="#FFFFFF" size={34} />
              </a>
              <a href="https://github.com/KelurahanBanyorang" target={"_blank"}>
                <GithubIcon color="#FFFFFF" size={32} />
              </a>
            </Group>
          </Group>
          <Grid gutter={"xl"} className="mb-4">
            <Grid.Col span={3}>
              <FooterDescription
                title="Tentang"
                description="Website ini dibuat oleh Mahasiswa KKNT Inovasi Teknologi Tepat Guna Universitas Hasanuddin Gelombang 109 Posko 2 Kelurahan Banyorang pada Januari 2023."
              />
              <Link to={"/tentang"} className="text-primaryBlue-300 text-lg tracking-4">
                Selengkapnya
              </Link>
            </Grid.Col>
            <Grid.Col span={3}>
              <FooterDescription />
            </Grid.Col>
            <Grid.Col span={3}>
              <FooterDescription />
            </Grid.Col>
            <Grid.Col span={3}>
              <FooterDescription />
            </Grid.Col>
          </Grid>
          <Divider className="w-[60%] self-center" />
          <Text className="text-white text-md text-center">
            &copy; 2023 Kelurahan Banyorang - All rights reserved
          </Text>
        </Stack>
      }
    >
      {children}
    </AppShell>
  );
};
export default MainLayout;
