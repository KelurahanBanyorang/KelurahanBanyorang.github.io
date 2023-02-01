import { Burger, Group, MediaQuery, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoBantaeng from "../assets/img/logo-bantaeng.png";

export interface IHeaderLayout {
  activePage: string;
}

const HeaderLayout: React.FC<IHeaderLayout> = ({ activePage }) => {
  const navigate = useNavigate();
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  return (
    <Stack className="items-center sticky top-0 z-50 bg-white">
      <Group className="w-full pl-4 md:pl-8 justify-between py-3 md:border-b border-secondary-500 pr-12 ">
        <Group
          className="relative cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logoBantaeng}
            alt="Logo Bantaeng"
            className="w-12 absolute "
          />
          <Text className="text-primaryDarkBlue text-[30px] font-poppins-bold ml-16">
            Banyorang
          </Text>
        </Group>
        <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
          <Group className="">
            <Link
              to={"/"}
              className={`${
                activePage == "beranda"
                  ? "text-primary-text-500"
                  : "text-secondary-text-500"
              } font-poppins text-[18px] tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
            >
              Beranda
            </Link>
            <Link
              to={"/umkm"}
              className={`${
                activePage == "umkm"
                  ? "text-primary-text-500"
                  : "text-secondary-text-500"
              } font-poppins text-[18px] tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
            >
              UMKM
            </Link>
            <Link
              to={"/bagan-kelurahan"}
              className={`${
                activePage == "bagan"
                  ? "text-primary-text-500"
                  : "text-secondary-text-500"
              } font-poppins text-[18px] tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
            >
              Bagan
            </Link>
            <Link
              to={"/galeri"}
              className={`${
                activePage == "galeri"
                  ? "text-primary-text-500"
                  : "text-secondary-text-500"
              } font-poppins text-[18px] tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
            >
              Galeri
            </Link>
            <Link
              to={"/tentang"}
              className={`${
                activePage == "tentang"
                  ? "text-primary-text-500"
                  : "text-secondary-text-500"
              } font-poppins text-[18px] tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
            >
              Tentang
            </Link>
          </Group>
        </MediaQuery>
        <MediaQuery smallerThan={"sm"} styles={{ display: "block" }}>
          <Burger
            opened={isBurgerOpened}
            onClick={() => setIsBurgerOpened((o) => !o)}
            size="sm"
            color="#94a3b8"
            className="md:hidden"
          />
        </MediaQuery>
      </Group>
      <div
        className={`${
          isBurgerOpened ? "flex" : "hidden"
        } md:hidden pb-6 flex-col gap-4 w-full px-8 border-b border-secondary-500 absolute bg-white z-10 top-16 pt-8`}
      >
        <Link
          to={"/"}
          className={`${
            activePage == "beranda"
              ? "text-primary-text-500"
              : "text-secondary-text-500"
          } font-poppins text-[18px] self-start tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
        >
          Beranda
        </Link>
        <Link
          to={"/umkm"}
          className={`${
            activePage == "umkm"
              ? "text-primary-text-500"
              : "text-secondary-text-500"
          } font-poppins text-[18px] self-start tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
        >
          UMKM
        </Link>
        <Link
          to={"/bagan-kelurahan"}
          className={`${
            activePage == "bagan"
              ? "text-primary-text-500"
              : "text-secondary-text-500"
          } font-poppins text-[18px] self-start tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
        >
          Bagan
        </Link>
        <Link
          to={"/galeri"}
          className={`${
            activePage == "galeri"
              ? "text-primary-text-500"
              : "text-secondary-text-500"
          } font-poppins text-[18px] self-start tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
        >
          Galeri
        </Link>
        <Link
          to={"/tentang"}
          className={`${
            activePage == "tentang"
              ? "text-primary-text-500"
              : "text-secondary-text-500"
          } font-poppins text-[18px] self-start tracking-[0.01em] cursor-pointer hover:text-primary-text-500 transition-all`}
        >
          Tentang
        </Link>
      </div>
    </Stack>
  );
};
export default HeaderLayout;
