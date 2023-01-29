import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import ExploreCard from "./ExploreCard.component";
import umkm from "../../../assets/img/umkm2.jpg";
import fotoKkn from "../../../assets/img/foto_kkn3.jpg";
import bagan from "../../../assets/img/bagan.png";
import galeri from "../../../assets/img/galeri.jpg";

export interface IExplore {}

const Explore: React.FC<IExplore> = ({}) => {
  return (
    <Stack className="mx-8 md:mx-12 mt-14 md:mt-20">
      <Text className="font-poppins-semibold text-[28px] md:text-[32px] text-primary-text-500 text-center mb-4">
        Jelajahi
      </Text>
      <Grid className="" gutter={80}>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={umkm}
            to="umkm"
            title="UMKM"
            description="UMKM (Usaha Mikro Kecil dan Menengah) adalah usaha produktif yang
            dimiliki perorangan maupun badan usaha yang telah memenuhi kriteria
            sebagai usaha mikro"
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={bagan}
            to="bagan-kelurahan"
            title="Bagan Kelurahan"
            description="Bagan Kelurahan Banyorang, yang mencakup mulai dari Ketua Lurah, Ketua RW, sampai ketua RT masing-masing RW"
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={galeri}
            to="galeri"
            title="Galeri"
            description="Galeri dan kumpulan foto Kelurahan Banyorang Tompobulu, mulai dari
              kehidupan keseharian dan aktivitas warga, pemandangan alam
              kelurahan Banyorang, perkebunan, pertanian, suasana kelurahan, dan
              lain-lain."
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={fotoKkn}
            to="tentang"
            title="Tentang"
            description="Website profil Kelurahan Banyorang ini dibuat oleh mahasiswa KKNT Inovasi Teknologi Tepat Guna Posko 2 Banyorang Universitas Hasanuddin atas inisiatif sendiri dengan tujuan memperkenalkan kelurahan Banyorang ke masyarakat umum"
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default Explore;
