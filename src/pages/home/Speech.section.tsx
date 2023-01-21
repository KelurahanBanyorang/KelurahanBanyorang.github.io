import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";
import ketuaLurah from "../../assets/img/ketua-lurah.jpg";
import { QuotesIconOutline } from "../../assets/icons/Fluent";

export interface ISpeech {}

const Speech: React.FC<ISpeech> = ({}) => {
  return (
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
            Untuk Pengunjung Website
          </Text>
        </Stack>
        <VerticalDivider />
        <Text className="w-[600px] text-primary-text-500 tracking-1 text-justify">
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo
          minima deserunt ullam at ipsam animi voluptas officia numquam
          consequatur ad hic, reiciendis enim quo nesciunt atque nam unde
          incidunt cum quisquam veritatis rem. Excepturi mollitia, odio adipisci
          iure recusandae voluptas officiis. Eos magni maiores facere omnis ipsa
          illo tenetur?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab
          repellat at odio perspiciatis vel alias obcaecati reiciendis, soluta
          quos? */}
          Assalamualaikum Warahmatullahi Wabarakatuh.
          <br />
          Puji syukur kepada Allah Subhana wa Taala atas nikmat yang
          dianugerahkan, Salawat serta salam kepada junjungan nabi besar
          Muhammad Sallahu Alai wa Sallam. Saya ucapkan banyak terima kasih
          kepada mahasiswa KKN Universitas Hasanuddin gelombang 109 yang telah
          membantu membuatkan website profil untuk Kelurahan Banyorang, dengan
          adanya website ini supaya meningkatkan daya tarik masyarakat untuk
          sama sama memajukan Kelurahan Banyorang baik dari aspek ekonomi dan
          lain lain. mudah mudahan dengan adanya website ini Kelurahan Banyorang
          dapat berkembang jauh lebih baik.
          Wassalamualaikum Warohmatullahi Wabarokatuh.
        </Text>
      </Stack>
    </Group>
  );
};
export default Speech;
