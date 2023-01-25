import { Divider, Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LocationIcon
} from "../assets/icons/Fluent";
import logoBantaeng from "../assets/img/logo-bantaeng.png";
import logoKKN from "../assets/img/logo-kknt.png";
import qrCode from "../assets/img/qrcode.png";
import logoUnhas from "../assets/img/unhas_logo.png";
import FooterDescription from "../components/FooterDescription.component";
import { FloatingTooltip } from "../components/Tooltip.component";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  return (
    <Stack className="mt-[100px] bg-primary-text-500 px-4 md:px-14 pt-10 pb-4 border-t-8 border-r-8 rounded-tr-sm border-primaryGreen mr-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between w-full mb-6 items-center">
        {/* <Text className="font-poppins text-[20px] text-primary-text-500">
              KKN Unhas
            </Text> */}
        <Group className="">
          <FloatingTooltip label="Logo Kabupaten Bantaeng">
            <div className={`w-[62px]`}>
              <img src={logoBantaeng} />
            </div>
          </FloatingTooltip>
          <FloatingTooltip
            label="Logo KKNT ITTG Unhas Gel. 109 Banyorang Posko 2"
            maxWidth={175}
          >
            <div className={`w-[66px]`}>
              <img src={logoKKN} />
            </div>
          </FloatingTooltip>
          <FloatingTooltip label="Logo Universitas Hasanuddin ">
            <div className={`w-[58px]`}>
              <img src={logoUnhas} />
            </div>
          </FloatingTooltip>
        </Group>
        <Stack className="gap-0 items-center md:mt-0 mt-4">
          <Text className="font-poppins-semibold text-[22px] md:text-[26px] text-white self-center text-center">
            Kelurahan Banyorang
          </Text>
          <Text className="text-white -mt-1 text-center">
            Kec. Tompobulu, Kab. Bantaeng, Sulawesi Selatan
          </Text>
        </Stack>
        <Group className="gap-4 self-center">
          <a
            href="https://web.facebook.com/kitabanyorang/?_rdc=1&_rdr"
            target={"_blank"}
            className="p-[6px] rounded-full hover:bg-primaryGreen transition-all"
          >
            <FacebookIcon color="#FFFFFF" size={32} />
          </a>
          <a
            href="https://www.instagram.com/kknt109_banyorang/"
            target={"_blank"}
            className="p-2 rounded-full hover:bg-primaryGreen transition-all"
          >
            <InstagramIcon color="#FFFFFF" size={28} />
          </a>
          <a
            href="https://www.google.com/maps/place/Banyorang,+Tompobulu,+Bantaeng+Regency,+South+Sulawesi/@-5.4628325,120.0316885,14z/data=!3m1!4b1!4m5!3m4!1s0x2dbeae8d7db5888b:0x6fad451a5622546f!8m2!3d-5.4630263!4d120.0347441"
            target={"_blank"}
            className="p-1 rounded-full hover:bg-primaryGreen transition-all"
          >
            <LocationIcon color="#FFFFFF" size={34} />
          </a>
          <a
            href="https://github.com/KelurahanBanyorang"
            target={"_blank"}
            className="p-[6px] rounded-full hover:bg-primaryGreen transition-all"
          >
            <GithubIcon color="#FFFFFF" size={32} />
          </a>
        </Group>
      </div>
      <Grid className="mb-4 mx-0 md:mx-8" columns={12}>
        <Grid.Col span={12} sm={3}>
          <FooterDescription
            title="Website Profil Kelurahan"
            description="Website profil kelurahan merupakan situs web yang memuat informasi dasar mengenai kelurahan, sejarah, visi dan misi kelurahan, sampai dengan peta wilayah kelurahan."
          />
        </Grid.Col>
        <Grid.Col span={12} sm={3}>
          <FooterDescription
            title="Developer"
            description="Website ini dibuat oleh Mahasiswa KKNT Inovasi Teknologi Tepat Guna Universitas Hasanuddin Gelombang 109 Posko 2 Kelurahan Banyorang pada Januari 2023."
          />
          <Link
            to={"/tentang"}
            className="text-primaryBlue-300 text-lg tracking-4"
          >
            Selengkapnya
          </Link>
        </Grid.Col>
        <Grid.Col span={12} sm={3}>
          <FooterDescription
            title="Harapan & Tujuan"
            description="Situs web profil ini dibuat untuk tujuan promosi dan publisitas kelurahan Banyorang agar lebih dikenal oleh khalayak ramai baik di dalam maupun di luar kelurahan Banyorang."
          />
        </Grid.Col>
        <Grid.Col
          span={12}
          sm={3}

          // className="items-center justify-items-center h-fit self-center p-2 pt-10"
          // className="bg-error-50"
        >
          <FooterDescription title="Kode QR Website" description=" " />
          <img
            src={qrCode}
            alt="QR Code Web"
            className="align-middle w-[50%] self-end"
          />
        </Grid.Col>
      </Grid>
      <Divider className="w-[60%] self-center" />
      <Text className="text-white text-md text-center">
        &copy; 2023 Kelurahan Banyorang - All rights reserved
      </Text>
    </Stack>
  );
};
export default FooterLayout;
