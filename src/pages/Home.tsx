import { Grid, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import MainLayout from "../layouts/MainLayout";
import ketuaLurah from "../assets/img/ketua-lurah.jpg";
import petaDetail from "../assets/img/peta-detail.jpg";
import dummyMap from "../assets/img/dummy-map.jpg";
import VerticalDivider from "../components/VerticalDivider";
import { LocationIcon, QuotesIconOutline } from "../assets/icons/Fluent";
import MonografiCircle from "../components/MonografiCircle";
import MyModal from "../components/MyModal";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  const [isMapDetailOpened, setIsMapDetailOpened] = useState(false);
  const [isMoreDisplayed, setIsMoreDisplayed] = useState(false);
  console.log(isMoreDisplayed);
  return (
    <MainLayout>
      <Stack className="mb-[600px]">
        <MyModal
          opened={isMapDetailOpened}
          setOpened={setIsMapDetailOpened}
          title={"Detail Peta Kelurahan Banyorang"}
          children={
            <div>
              <img src={petaDetail} />
            </div>
          }
        />
        <Jumbotron />
        <Group className="justify-center w-[80%] self-center gap-20">
          <Stack>
            <div className="border-[16px] border-primaryGreen border-r-white border-b-white rounded-full">
              <img src={ketuaLurah} className="w-64 rounded-full" />
            </div>
            <Stack className="gap-0">
              <Text className="font-poppins-bold text-[22px] text-primary-text-500 self-center">
                Abdul Mannan
              </Text>
              <Text className="font-poppins text-lg text-secondary-text-500 self-center">
                Ketua Lurah Kelurahan Banyorang
              </Text>
            </Stack>
          </Stack>
          <Stack className="relative">
            <QuotesIconOutline
              size={96}
              color={"#deddf1"}
              className="absolute -z-10 right-0 top-0"
            />
            <Stack className="gap-0">
              <Text className="font-poppins-bold text-[22px] text-primary-text-500">
                Kata Sambutan
              </Text>
              <Text className="font-poppins-bold text-[32px] text-secondary-text-500 -mt-2">
                Dari Ketua Lurah
              </Text>
            </Stack>
            <VerticalDivider />
            <Text className="w-[600px] text-primary-text-500 tracking-1 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              nemo minima deserunt ullam at ipsam animi voluptas officia numquam
              consequatur ad hic, reiciendis enim quo nesciunt atque nam unde
              incidunt cum quisquam veritatis rem. Excepturi mollitia, odio
              adipisci iure recusandae voluptas officiis. Eos magni maiores
              facere omnis ipsa illo tenetur?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab
              repellat at odio perspiciatis vel alias obcaecati reiciendis,
              soluta quos?
            </Text>
          </Stack>
        </Group>
        <Stack className="mt-28 mx-[48px]">
          <Stack className="gap-0 border-l-[10px] pl-6 border-l-primaryBlue">
            <Text className="font-poppins-bold text-[46px] text-primary-text-500">
              Profil
            </Text>
            <Text className="text-[22px] font-poppins-semibold -mt-2 text-secondary-text-500">
              Kelurahan Banyorang
            </Text>
          </Stack>
          <div>
            <div
              className="flex items-center justify-center float-right ml-6 mb-6"
              onMouseEnter={() => {
                setIsMoreDisplayed(true);
              }}
              onMouseLeave={() => {
                setIsMoreDisplayed(false);
              }}
            >
              <div className="filter hover:brightness-50 relative">
                <img
                  src={dummyMap}
                  className={"w-[400px] block cursor-pointer"}
                  alt={"Peta detail kelurahan Banyorang"}
                  onClick={() => setIsMapDetailOpened(true)}
                />
                <Stack
                  className="absolute top-4 left-4"
                  styles={{
                    root: {
                      display: isMoreDisplayed ? "block" : "hidden"
                    }
                  }}
                >
                  <Text className="text-white text-xl font-poppins-semibold hover:text-white">
                    Lihat Pratinjau
                  </Text>
                </Stack>
              </div>
            </div>

            <Text className="text-lg text-primary-text-500 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              nesciunt et fugit soluta pariatur! Natus at iusto neque magni
              reprehenderit veniam hic. Error, perferendis dolores sunt aliquam
              veniam labore eligendi accusantium iure cupiditate illum sit modi
              nisi quisquam et aspernatur qui sint officia exercitationem quo
              facere! Culpa veniam, ipsam esse libero quis voluptatibus. Atque
              quia provident recusandae aliquid consectetur eaque nesciunt quod
              eum. Reprehenderit nemo qui ab perspiciatis voluptate reiciendis
              voluptatem, a at quasi dicta voluptatibus animi, eum modi
              repudiandae maiores consectetur eveniet, illo hic deserunt
              laborum! Est recusandae facilis, enim nobis, quae earum architecto
              similique qui debitis laudantium reiciendis ipsum dolore, ab quos
              molestiae! Consequatur quod, praesentium ducimus nemo impedit odio
              quam reprehenderit cum amet atque pariatur similique mollitia? Et,
              corrupti! Unde tenetur est harum, cupiditate distinctio in sit
              assumenda deserunt nisi at nulla laboriosam ducimus delectus
              deleniti consequatur sunt facere sapiente labore obcaecati
              voluptas veniam! Itaque in doloribus sapiente non maiores deserunt
              nulla ducimus mollitia quidem magnam repellat rem nobis, ipsam
              ipsum dolores laborum aspernatur amet praesentium? Modi totam
              voluptatem optio sint, doloribus enim neque maxime itaque?
              Accusantium expedita debitis ex eos quam, neque facere minus,
              sequi non? Ad.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              consectetur saepe excepturi doloremque nulla enim eaque soluta
              officia eum reiciendis ducimus, harum optio suscipit accusantium
              eos, repellendus, delectus laboriosam vitae minima sunt aut ullam?
              Eaque mollitia error quibusdam sed. Nam doloribus facilis, nisi
              odit quaerat eum, delectus cum similique cupiditate esse minus
              alias optio minima voluptas dignissimos exercitationem voluptate,
              rem repudiandae consequatur assumenda? Unde tempore cum possimus
              veritatis eligendi ea ipsam soluta, atque dignissimos maiores!
              Natus molestias, optio qui veniam nihil suscipit aspernatur odit.
              Soluta, quas quo. Officia similique cumque porro eaque iste
              voluptas tenetur. Illo aut tenetur praesentium in laboriosam autem
              impedit harum, architecto ex dolore veniam magnam fugiat placeat
              mollitia expedita nemo unde, voluptas enim suscipit maiores
              doloribus cum! Placeat, quidem animi, dolorum tempora consequatur
              officia ut cupiditate doloremque minima modi odit sint, omnis
              officiis accusantium mollitia nam unde! Non totam nemo illo
              distinctio nihil nisi perferendis corrupti.
            </Text>
          </div>
        </Stack>
        <Stack className="mt-8 gap-6">
          <Text className="font-poppins-bold text-[46px] text-primary-text-500 text-center">
            Data Monografi
          </Text>
          <Group className="justify-center gap-16">
            <MonografiCircle size="sm" text="15" description="RT" />
            <MonografiCircle
              size="md"
              text={"250"}
              description="Jumlah Penduduk"
            />
            <MonografiCircle
              size="lg"
              text={
                <>
                  70.3 Km<sup>2</sup>
                </>
              }
              description={"Luas Kelurahan"}
            />
            <MonografiCircle
              size="md"
              text={"42"}
              description="Kepala Keluarga"
            />
            <MonografiCircle size="sm" text="5" description="RW" />
          </Group>
          <Stack className="mx-[48px] mt-10">
            <Group className="gap-2">
              <LocationIcon size={72} color={"#1C82AD"} />
              <Text className="font-poppins-semibold text-[32px] text-primary-text-500">
                Lokasi
              </Text>
            </Group>
          </Stack>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default Home;
