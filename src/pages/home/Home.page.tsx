import { Stack } from "@mantine/core";
import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import Explore from "./explore/Explore.section";
import Jumbotron from "./jumbotron/Jumbotron.section";
import Location from "./location/Location.section";
import Monograph from "./monograph/Monograph.section";
import Profile from "./profile/Profile.section";
import Speech from "./speech/Speech.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  return (
    <MainLayout activePage="beranda">
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
