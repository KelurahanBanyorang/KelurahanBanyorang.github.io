import { Loader, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { DownloadIconOutline } from "../../../assets/icons/Fluent";
import petaDetail from "../../../assets/img/peta-detail.jpg";
import mapThumbnail from "../../../assets/img/peta-thumbnail.jpg";
import ExpandButton from "../../../components/ExpandButton.component";
import MyModal from "../../../components/MyModal.component";

export interface IProfile {}

const Profile: React.FC<IProfile> = ({}) => {
  const [isMapDetailOpened, setIsMapDetailOpened] = useState(false);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  return (
    <>
      <MyModal
        opened={isMapDetailOpened}
        setOpened={setIsMapDetailOpened}
        title={"Detail Peta Kelurahan Banyorang"}
        children={
          <div className="flex flex-col">
            <Stack className="z-10 gap-6">
              <img src={petaDetail} className="" />
              <a href={petaDetail} download className="bg-primaryGreen text-white px-3 py-[6px] w-fit rounded-md font-semibold">
                <DownloadIconOutline color="#FFFFFF" className="inline -mt-1 mr-1" /> 
                Unduh Gambar
              </a>
            </Stack>
            <Loader
              size="xl"
              variant="dots"
              color={"#00337C"}
              className="-z-10 self-center absolute top-1/2"
            />
          </div>
        }
      />
      <Stack className="mt-12 md:mt-28 mx-[24px] md:mx-[96px]">
        <Stack className="gap-0 border-l-[6px] md:border-l-[10px] pl-4 md:pl-6 border-l-primaryBlue">
          <Text className="font-poppins-bold text-[36px] md:text-[46px] text-primary-text-500">
            Profil
          </Text>
          <Text className="text-[22px] font-poppins-semibold -mt-2 text-secondary-text-500">
            Kelurahan Banyorang
          </Text>
        </Stack>
        <div>
          <div className="flex items-center justify-center md:float-right md:ml-6 mb-6">
            <Stack className="filter hover:brightness-50 relative gap-0">
              <img
                src={mapThumbnail}
                className={"w-[400px] block cursor-pointer md:float-right"}
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
          <Text className={`text-lg inline text-primary-text-500 text-justify`}>
            Kelurahan Banyorang merupakan salah satu kelurahan yang ada di
            Kecamatan Tompobulu Kabupaten Bantaeng Provinsi Sulawesi Selatan.
            Nama Kelurahan Banyorang berasal dari kata "banyak orang", nama ini
            diambil karena Kelurahan Banyorang merupakan kelurahan dengan jumlah
            penduduk yang banyak serta datang dari berbagai daerah Banyorang
            adalah salah satu kelurahan yang terletak di sebelah utara kabupaten
            bantaeng, tepatnya di ibu kota kecamatan Tompobulu dengan jarak ibu
            kota kabupaten ± 23 Km2 dengan ketinggian 600-1200 m dari permukaan
            laut.
            <br /> <br />
            Luas wilayah kelurahan ini seluas 5.06 km persegi. Kelurahan ini
            berbatasan dengan kabupaten Bulukumba dan kecamatan Eramerasa.
            Sebelah timur berbatasan dengan kabupaten Bulukumba. Sebelah selatan
            berbatasan dengan kecamatan Gantarang Keke. Dan Sebelah Barat
            Berbatasan dengan kecamatan Eramerasa.
            <br /> <br />
            Banyorang Merupakan kelurahan yang menjadi pusat dari Kecamatan
            Tompobulu, di kelurahan ini terdapat kantor kecamatan Tompobulu,
            polsek Tompobulu, kantor urusan agama, serta Rumah Sakit Umum, dan
            banyak UMKM yang terdapat di Kelurahan Banyorang salah satunya ialah
            Sentra Kopi dan jenis usaha lainnya. Kelurahan Banyorang sendiri
            memiliki 5 Rukun Warga dan 15 Rukun Tetangga.
          </Text>

          {/* <ExpandButton
            key={"profile"}
            isExpanded={isProfileExpanded}
            setIsExpanded={setIsProfileExpanded}
          /> */}
        </div>
      </Stack>
    </>
  );
};
export default Profile;
