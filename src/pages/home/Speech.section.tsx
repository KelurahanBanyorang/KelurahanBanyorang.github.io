import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";
import ketuaLurah from "../../assets/img/ketua-lurah.jpg";
import { QuotesIconOutline } from "../../assets/icons/Fluent";

export interface ISpeech {}

const Speech: React.FC<ISpeech> = ({}) => {
  return (
    <Group className="justify-center w-[80%] self-center gap-10 md:gap-20">
      <Stack>
        <div className="self-center w-[200px] md:w-[280px] border-[12px] md:border-[16px] border-primaryGreen border-r-white border-b-white rounded-full">
          <img src={ketuaLurah} className="w-fit rounded-full" alt="Foto Ketua Lurah" />
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
          className="absolute -z-10 right-0 -bottom-6 md:top-0"
        />
        <Stack className="gap-2 md:gap-0">
          <Text className="font-poppins-bold text-[18px] md:text-[22px] text-primary-text-500">
            Kata Sambutan
          </Text>
          <Text className="font-poppins-bold text-[22px] md:text-[32px] text-secondary-text-500 -mt-2">
            Untuk Pengunjung Website
          </Text>
        </Stack>
        <VerticalDivider />
        <Text className="md:w-[600px] text-primary-text-500 tracking-1 text-justify">
          Assalamualaikum Warahmatullahi Wabarakatuh.
          Puji syukur kepada Allah Subhana wa Taala atas nikmat yang
          dianugerahkan, Salawat serta salam kepada junjungan nabi besar
          Muhammad Sallahu Alai wa Sallam. Salam sejahterah untuk kita semua
          <br />
          <br />
          Dewasa ini, perkembangan teknologi, komunikasi dan informasi membawa
          kemajuan yang sangat pesat di berbagai bidang kehidupan. Dengan adanya
          pemanfaatan teknologi, komunikasi dan informasi inovasi bisa hadir
          lewat media transformasi digital hal ini juga sebagai perwujudan
          Reformasi Birokrasi dan Penerapan E-government yang merupakanamanat
          Inpres No.3 tahun 2003 tentang penyelenggaran tata kelola pemerintahan
          secara elektronik. Saya berharap website ini meningkatkan daya tarik
          masyarakat untuk sama sama memajukan Kelurahan Banyorang baik dari
          aspek ekonomi dan lain lain. Mudah-mudahan dengan adanya website ini
          Kelurahan Banyorang dapat berkembang jauh lebih baik.
        </Text>
      </Stack>
    </Group>
  );
};
export default Speech;
