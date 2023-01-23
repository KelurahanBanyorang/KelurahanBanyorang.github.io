import { Loader, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import petaDetail from "../../assets/img/peta-detail.jpg";
import mapThumbnail from "../../assets/img/peta-thumbnail.jpg";
import MyModal from "../../components/MyModal.component";

export interface IProfile {}

const Profile: React.FC<IProfile> = ({}) => {
  const [isMapDetailOpened, setIsMapDetailOpened] = useState(false);
  return (
    <>
      <MyModal
        opened={isMapDetailOpened}
        setOpened={setIsMapDetailOpened}
        title={"Detail Peta Kelurahan Banyorang"}
        children={
          <div className="flex flex-col">
            <img src={petaDetail} className="z-10" />
            <Loader
              size="xl"
              variant="dots"
              color={"#00337C"}
              className="-z-10 self-center absolute top-1/2"
            />
          </div>
        }
      />
      <Stack className="mt-28 mx-[96px]">
        <Stack className="gap-0 border-l-[10px] pl-6 border-l-primaryBlue">
          <Text className="font-poppins-bold text-[46px] text-primary-text-500">
            Profil
          </Text>
          <Text className="text-[22px] font-poppins-semibold -mt-2 text-secondary-text-500">
            Kelurahan Banyorang
          </Text>
        </Stack>
        <div>
          <div className="flex items-center justify-center float-right ml-6 mb-6">
            <Stack className="filter hover:brightness-50 relative gap-0">
              <img
                src={mapThumbnail}
                className={"w-[400px] block cursor-pointer"}
                alt={"Peta detail kelurahan Banyorang"}
                onClick={() => setIsMapDetailOpened(true)}
              />
              {/* <Stack
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
                </Stack> */}
              <Text className="text-sm text-secondary-text-500 text-center">
                Gambar Peta Kelurahan Banyorang, Klik untuk melihat lebih detail
              </Text>
            </Stack>
          </div>

          <Text className="text-lg text-primary-text-500 text-justify">
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nesciunt et fugit soluta pariatur! Natus at iusto neque magni
            reprehenderit veniam hic. Error, perferendis dolores sunt aliquam
            veniam labore eligendi accusantium iure cupiditate illum sit modi
            nisi quisquam et aspernatur qui sint officia exercitationem quo
            facere! Culpa veniam, ipsam esse libero quis voluptatibus. Atque
            quia provident recusandae aliquid consectetur eaque nesciunt quod
            eum. Reprehenderit nemo qui ab perspiciatis voluptate reiciendis
            voluptatem, a at quasi dicta voluptatibus animi, eum modi
            repudiandae maiores consectetur eveniet, illo hic deserunt laborum!
            Est recusandae facilis, enim nobis, quae earum architecto similique
            qui debitis laudantium reiciendis ipsum dolore, ab quos molestiae!
            Consequatur quod, praesentium ducimus nemo impedit odio quam
            reprehenderit cum amet atque pariatur similique mollitia? Et,
            corrupti! Unde tenetur est harum, cupiditate distinctio in sit
            assumenda deserunt nisi at nulla laboriosam ducimus delectus
            deleniti consequatur sunt facere sapiente labore obcaecati voluptas
            veniam! Itaque in doloribus sapiente non maiores deserunt nulla
            ducimus mollitia quidem magnam repellat rem nobis, ipsam ipsum
            dolores laborum aspernatur amet praesentium? Modi totam voluptatem
            optio sint, doloribus enim neque maxime itaque? Accusantium expedita
            debitis ex eos quam, neque facere minus, sequi non? Ad.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            consectetur saepe excepturi doloremque nulla enim eaque soluta
            officia eum reiciendis ducimus, harum optio suscipit accusantium
            eos, repellendus, delectus laboriosam vitae minima sunt aut ullam?
            Eaque mollitia error quibusdam sed. Nam doloribus facilis, nisi odit
            quaerat eum, delectus cum similique cupiditate esse minus alias
            optio minima voluptas dignissimos exercitationem voluptate, rem
            repudiandae consequatur assumenda? Unde tempore cum possimus
            veritatis eligendi ea ipsam soluta, atque dignissimos maiores! Natus
            molestias, optio qui veniam nihil suscipit aspernatur odit. Soluta,
            quas quo. Officia similique cumque porro eaque iste voluptas
            tenetur. Illo aut tenetur praesentium in laboriosam autem impedit
            harum, architecto ex dolore veniam magnam fugiat placeat mollitia
            expedita nemo unde, voluptas enim suscipit maiores doloribus cum!
            Placeat, quidem animi, dolorum tempora consequatur officia ut
            cupiditate doloremque minima modi odit sint, omnis officiis
            accusantium mollitia nam unde! Non totam nemo illo distinctio nihil
            nisi perferendis corrupti. */}
            Kelurahan Banyorang merupakan salah satu kelurahan yang ada di
            Kecamatan Tompobulu Kabupaten Bantaeng Provinsi Sulawesi Selatan.
            Adalah kelurahan yang menjadi pusat dari Kecamatan Tompobulu,
            terdapat kantor kecamatan, polsek, kantor urusan agama, serta Rumah
            Sakit Umum, dan banyak UMKM yang terdapat di Kelurahan Banyorang
            salah satunya ialah Sentra Kopi. Kelurahan Banyorang sendiri
            memiliki 5 Rukun Warga dan 15 Rukun Tetangga. untuk nama dari
            Kelurahan Banyorang berasal dari kata "banyak orang", nama ini
            diambil karena di Kelurahan Banyorang merupakan kelurahan dengan
            jumlah penduduk yang banyak serta datang dari berbagai daerah.
          </Text>
        </div>
      </Stack>
    </>
  );
};
export default Profile;
