import { Group, Stack, Text, Tooltip } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";
import MainLayout from "../../layouts/MainLayout.layout";
import fotoKKN from "../../assets/img/foto_kkn3.jpg";
import logoKKN from "../../assets/img/logo-kknt.png";
import { StaticTooltip } from "../../components/Tooltip.component";

export interface IAbout {}

const About: React.FC<IAbout> = ({}) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <MainLayout>
      <Stack className="mx-24 mt-10">
        <Stack className="gap-0 mb-8">
          <Stack className="gap-0 mb-0">
            <Text className="font-poppins-semibold text-[42px] text-primary-text-500">
              Tentang Website
            </Text>
            <Text className="mb-3 font-poppins-semibold text-[22px] text-secondary-text-500 -mt-2">
              Kelurahan Banyorang
            </Text>
          </Stack>
          <Group className="relative gap-16 mb-4">
            <Text className="text-lg text-primary-text-500 text-justify w-[60%] mt-4">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quaerat odit provident cum architecto assumenda tenetur
              perspiciatis repudiandae sequi distinctio quae vitae quibusdam
              minima vel sit impedit temporibus, delectus ipsam. Nobis, a enim
              animi fugit repellendus consectetur iste repellat, eaque labore
              molestiae maxime ab quibusdam suscipit quia nemo necessitatibus
              nostrum.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui
              eum ea eligendi quis deserunt inventore dolore itaque suscipit
              aliquid, similique omnis, voluptas consectetur incidunt.
              Recusandae autem cumque debitis molestiae! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quas illo natus consequuntur
              nam est tempore nobis sapiente laboriosam cumque fugiat laborum
              illum id officiis amet quo similique nesciunt, sed quia. */}
              Kuliah Kerja Nyata (KKN) Universitas Hasanuddin gelombang 109
              dengan tema Inovasi Teknologi Tepat Guna beranggotakan 10 orang
              dengan koordinator posko Jailani Ahmad mahasiswa teknik mesin
              angkatan 2019. lokasi posko terletak di Kelurahan Banyorang
              Kecamatan Tompobulu Kabupaten Bantaeng. kegiatan kegiatan yang
              dilakukan adalah pengadaan peta kelurahan, pembuatan website
              promosi kelurahan, kerja bakti dengan masyarakat setiap hari
              kamis, penyuluhan pengenalan bahan alam untuk pembuatan pupuk
              organik, perancangan mesin penyortir biji kopi, perancangan mesin
              pengering hasil pertanian dan banyak lainnya.
            </Text>

            <VerticalDivider h="lg" />

            <img src={logoKKN} alt="Logo KKN" className="w-[260px]" />
          </Group>
        </Stack>
        <div className="w-[75%] relative self-center mt-10">
          <img src={fotoKKN} />
          <div className="absolute -top-6 -right-6 h-40 w-40 bg-primaryBlue -z-10"></div>
          <div className="absolute -bottom-1 -left-6 h-40 w-40 bg-primaryBlue -z-10"></div>
          <StaticTooltip label="Halo" position="top-end">
            <div className="absolute top-[65px] right-[340px] w-12 h-12 bg-transparent" />
          </StaticTooltip>

          <Text className="text-secondary-text-500 text-sm text-end">
            Gambar: Mahasiswa KKNT ITTG Unhas Gel. 109 Posko 2 Banyorang
          </Text>
        </div>
      </Stack>
    </MainLayout>
  );
};
export default About;
