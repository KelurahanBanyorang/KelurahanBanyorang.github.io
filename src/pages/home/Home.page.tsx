import { Stack } from "@mantine/core";
import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import Explore from "./Explore.section";
import Jumbotron from "./Jumbotron.section";
import Location from "./Location.section";
import Monograph from "./Monograph";
import Profile from "./Profile.section";
import Speech from "./Speech.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  return (
    <MainLayout>
      <Stack>
        <Jumbotron />
        <Speech />
        <Profile />
        <Monograph />
        <Explore />
        {/* <Location /> */}
      </Stack>
    </MainLayout>
  );
};
export default Home;
