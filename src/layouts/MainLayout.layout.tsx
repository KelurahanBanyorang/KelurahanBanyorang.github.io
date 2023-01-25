import {
  AppShell
} from "@mantine/core";
import React from "react";
import FooterLayout from "./FooterLayout.layout";
import HeaderLayout from "./HeaderLayout.layout";

export interface IMainLayout {
  children: JSX.Element;
  activePage: "umkm" | "beranda" | "galeri" | "bagan" | "tentang";
}

const MainLayout: React.FC<IMainLayout> = ({ children, activePage }) => {
  return (
    <AppShell
      padding={0}
      header={<HeaderLayout activePage={activePage} />}
      footer={<FooterLayout />}
    >
      {children}
    </AppShell>
  );
};
export default MainLayout;
