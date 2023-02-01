import { Group, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { QuotesIconOutline } from "../../../assets/icons/Fluent";
import ExpandButton from "../../../components/ExpandButton.component";
import VerticalDivider from "../../../components/VerticalDivider.component";
import ketuaLurah from "../../../assets/img/ketua-lurah.jpg";

export interface ISpeech {}

const Speech: React.FC<ISpeech> = ({}) => {
  const [isSpeechExpanded, setIsSpeechExpanded] = useState(false);
  
  const [ketuaLurahName, setKetuaLurahName] = useState("");
  const [ketuaLurahImg, setKetuaLurahImg] = useState<any>(null);
  
  const SHEET_ID = "1Vxhi_7CaqnTCbx-54aDUfVV4Qf0PKADL93DxhOz-3KA";

  const patternFileIdGDrive = /\/file\/d\/([^\/]+)/;
  // Set Nama Ketua Lurah
  useEffect(() => {
    let SHEET_TITLE = `Lurah`;

    let FULL_URL =
      "https://docs.google.com/spreadsheets/d/" +
      SHEET_ID +
      "/gviz/tq?sheet=" +
      SHEET_TITLE;

    // if (baganData.length <= 0) {
    fetch(FULL_URL)
      .then((res) => res.text())
      .then((rep) => {
        let data = JSON.parse(rep.substring(47).slice(0, -2));
        setKetuaLurahName(data.table.rows[1].c[0].v);
        const getFileId = patternFileIdGDrive.exec(
          data.table.rows[1].c[3] == null ? null : data.table.rows[1].c[3].v
        );

        setKetuaLurahImg(
          getFileId == null
            ? null
            : "https://drive.google.com/uc?export=view&id=" + getFileId[1]
        );
      });
  }, []);
  return (
    <Group className="justify-center w-[80%] self-center gap-10 md:gap-20">
      <Stack className="gap-2 md:gap-4">
        <div className="self-center w-[200px] md:w-[280px] border-[12px] md:border-[16px] border-primaryGreen border-r-white border-b-white rounded-full">
          <img
            src={ketuaLurahImg}
            className="w-fit rounded-full"
            alt="Foto Ketua Lurah"
          />
        </div>
        <Stack className="gap-0">
          <Text className="font-poppins-bold text-[22px] text-primary-text-500 self-center">
            {ketuaLurahName}
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
        <Stack className="gap-0">
          <Text
            className={`md:w-[600px] text-primary-text-500 tracking-1 text-justify ${
              isSpeechExpanded ? "line-clamp-none" : "line-clamp-[10]"
            } md:line-clamp-none`}
          >
            Assalamualaikum Warahmatullahi Wabarakatuh. Puji syukur kepada Allah
            Subhana wa Taala atas nikmat yang dianugerahkan, Salawat serta salam
            kepada junjungan nabi besar Muhammad Sallahu Alai wa Sallam. Salam
            sejahterah untuk kita semua
            <br />
            <br />
            Dewasa ini, perkembangan teknologi, komunikasi dan informasi membawa
            kemajuan yang sangat pesat di berbagai bidang kehidupan. Dengan
            adanya pemanfaatan teknologi, komunikasi dan informasi inovasi bisa
            hadir lewat media transformasi digital hal ini juga sebagai
            perwujudan Reformasi Birokrasi dan Penerapan E-government yang
            merupakanamanat Inpres No.3 tahun 2003 tentang penyelenggaran tata
            kelola pemerintahan secara elektronik. Saya berharap website ini
            meningkatkan daya tarik masyarakat untuk sama sama memajukan
            Kelurahan Banyorang baik dari aspek ekonomi dan lain lain.
            Mudah-mudahan dengan adanya website ini Kelurahan Banyorang dapat
            berkembang jauh lebih baik.
          </Text>
          <ExpandButton key={"speech"} isExpanded={isSpeechExpanded} setIsExpanded={setIsSpeechExpanded} />
        </Stack>
      </Stack>
    </Group>
  );
};
export default Speech;
