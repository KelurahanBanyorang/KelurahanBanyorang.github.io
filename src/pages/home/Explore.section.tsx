import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import ExploreCard from "./ExploreCard.component";
import umkm from "../../assets/img/umkm2.jpg";
import fotoKkn from "../../assets/img/foto_kkn3.jpg";
import bagan from "../../assets/img/bagan.png";
import galeri from "../../assets/img/galeri.jpg";

export interface IExplore {}

const Explore: React.FC<IExplore> = ({}) => {
  return (
    <Stack className="mx-12 mt-20">
      <Text className="font-poppins-semibold text-[32px] text-primary-text-500 text-center mb-4">
        Jelajahi
      </Text>
      <Grid className="" gutter={64}>
        <Grid.Col span={6} className="hover:scale-[1.01] transition-all">
          <ExploreCard src={umkm} to="umkm" title="UMKM" />
        </Grid.Col>
        <Grid.Col span={6} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={bagan}
            to="bagan-kelurahan"
            title="Bagan Kelurahan"
          />
        </Grid.Col>
        <Grid.Col span={6} className="hover:scale-[1.01] transition-all">
          <ExploreCard src={galeri} to="galeri" title="Galeri" />
        </Grid.Col>
        <Grid.Col span={6} className="hover:scale-[1.01] transition-all">
          <ExploreCard src={fotoKkn} to="tentang" title="Tentang" />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default Explore;
