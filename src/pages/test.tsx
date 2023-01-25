import React from "react";
import MainLayout from "../layouts/MainLayout.layout";

export interface ITest {}

const Test: React.FC<ITest> = ({}) => {
  return (
    <MainLayout activePage="beranda">
      <div className="rounded-bl-lg bg-jumbotron m-0 p-0 w-full ml-7 h-[500px] bg-cover mb-32">
        <div className="rounded-bl-lg bg-gradient-to-r from-primaryDarkerBlue via-transparent to-transparent h-full w-full relative">
          <div className="text-white">
            Halo
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Test;
