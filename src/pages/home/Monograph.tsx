import { Button, Divider, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { ForwardIconBold } from "../../assets/icons/Fluent";
import MonografiCircle from "../../components/MonografiCircle.component";
import MyModal from "../../components/MyModal.component";
import MonographDetailText from "./MonographDetailText.component";

export interface IMonograph {}

const Monograph: React.FC<IMonograph> = ({}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Stack className="mt-8 gap-6">
      <MyModal
        opened={isOpened}
        setOpened={setIsOpened}
        title="Detail Data Monografi Kelurahan Banyorang"
        maxWidth={800}
      >
        <Stack className="">
          <Group className="mb-2">
            <Stack className="w-[50%]">
              <MonographDetailText
                label="Provinsi"
                description="Sulawesi Selatan"
              />
              <MonographDetailText
                label="Kabupaten/Kota"
                description="Bantaeng"
              />
              <MonographDetailText label="Kecamatan" description="Tompobulu" />
            </Stack>
            <Stack>
              <MonographDetailText label="Kode Desa" description="7303041003" />
              <MonographDetailText label="Jumlah RW" description="5" />
              <MonographDetailText label="Jumlah RT" description="15" />
            </Stack>
          </Group>
          <Divider />
          <Group className="mb-2">
            <Stack className="w-[50%]">
              <MonographDetailText
                label="Luas Wilayah (Km Persegi)"
                description="5.06"
              />
              <MonographDetailText label="Kepadatan" description="586" />
            </Stack>
            <Stack>
              <MonographDetailText
                label="Jumlah Penduduk"
                description="3000"
                wPlusMinusIcon
              />
              <MonographDetailText
                label="Jumlah Kepala Keluarga"
                description="979"
                wPlusMinusIcon
              />
            </Stack>
          </Group>
          <Divider />
          <Stack>
            <Text className="text-primary-text-500 font-semibold font-poppins text-xl">
              Profesi Penduduk
            </Text>
            <Group className="mb-2">
              <Stack className="w-[50%]">
                <MonographDetailText
                  label="Petani"
                  description="350"
                  wPlusMinusIcon
                />
                <MonographDetailText
                  label="Wiraswasta"
                  description="450"
                  wPlusMinusIcon
                />
                <MonographDetailText
                  label="Pelajar"
                  description="500"
                  wPlusMinusIcon
                />
              </Stack>
              <Stack>
                <MonographDetailText
                  label="Tenaga Pendidik"
                  description="50"
                  wPlusMinusIcon
                />
                <MonographDetailText
                  label="Pegawai"
                  description="150"
                  wPlusMinusIcon
                />
                <MonographDetailText
                  label="Dan lain-lain"
                  description="1500"
                  wPlusMinusIcon
                />
              </Stack>
            </Group>
          </Stack>
          <Text className="self-end mt-4 text-md text-secondary-text-500">
            Sumber :{" "}
            <a
              href="https://www.big.go.id/"
              target={"_blank"}
              className="text-primaryBlue"
            >
              BIG (Badan Informasi Geospasial)
            </a>{" "}
            per tanggal 30 Juni 2019
          </Text>
        </Stack>
      </MyModal>
      <Text className="font-poppins-bold text-[46px] text-primary-text-500 text-center">
        Data Monografi
      </Text>
      <Group className="justify-center gap-16">
        <MonografiCircle size="sm" text="15" description="RT" />
        <MonografiCircle
          size="md"
          text={"2968"}
          description="Jumlah Penduduk"
        />
        <MonografiCircle
          size="lg"
          text={
            <>
              5.06 Km<sup>2</sup>
            </>
          }
          description={"Luas Kelurahan"}
        />
        <MonografiCircle size="md" text={"979"} description="Kepala Keluarga" />
        <MonografiCircle size="sm" text="5" description="RW" />
      </Group>
      <Button
        variant="light"
        className="self-center flex gap-2 hover:bg-white"
        onClick={() => setIsOpened(true)}
        leftIcon={<ForwardIconBold color={"#03C988"} />}
      >
        <Text className="text-center font-poppins font-normal text-primaryGreen text-lg">
          Selengkapnya
        </Text>
      </Button>
    </Stack>
  );
};
export default Monograph;
