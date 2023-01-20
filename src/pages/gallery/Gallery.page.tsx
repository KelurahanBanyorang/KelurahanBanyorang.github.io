import { Group, Modal, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import {
  BackIconBold,
  DownArrowNoTailOutlineBold,
  ForwardIconBold,
  UpArrowNoTailOutlineBold
} from "../../assets/icons/Fluent";
import VerticalDivider from "../../components/VerticalDivider.component";
import MainLayout from "../../layouts/MainLayout.layout";
import camera from "../../assets/img/camera.jpg";
import { images } from "./Gallery.const";

export interface IMyGallery {}

const MyGallery: React.FC<IMyGallery> = ({}) => {
  const [galleryImages, setGalleryImages] = useState(images);
  const [isGalleryModalOpened, setIsGalleryModalOpened] = useState(false);
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  function onClickGallery(idx: number) {
    setSelectedImageIdx(idx);
    // console.log(idx);
    setIsGalleryModalOpened(true);
  }
  return (
    <MainLayout>
      <Stack>
        <Modal
          opened={isGalleryModalOpened}
          onClose={() => {
            setIsGalleryModalOpened(false);
          }}
          title={galleryImages[selectedImageIdx].alt || "Foto"}
          centered
          padding={0}
          styles={{
            modal: {
              maxWidth: `900px`,
              width: "100%",
              borderRadius: "6px",
              zIndex: 10
            },
            title: {
              // display: "none"
              // margin: "20px"
              fontSize: 18,
              color: "#334155",
              fontWeight: 600,
              marginTop: "16px",
              marginBottom: "12px",
              marginLeft: "20px",
              zIndex: 10
            },
            close: {
              // display: "none"
              marginTop: "6px",
              marginRight: "20px"
            },
            header: {
              marginBottom: "6px",
              zIndex: 10
              // backgroundColor: "white"
            }
          }}
        >
          <div className="relative">
            {/* <div className="absolute -top-16 -left-6 h-40 w-40 bg-primaryBlue -z-50"></div> */}
            <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-primaryGreen -z-10"></div>
            <img src={galleryImages[selectedImageIdx].src} />
            <Group className="absolute -bottom-8 left-6 mr-20 gap-8">
              <div
                className={`flex flex-col justify-center cursor-pointer w-[72px] h-[72px] bg-white rounded-full p-3 shadow-[0_0_7px_2px_rgba(139,139,139,0.9)]`}
                onClick={() => {
                  setSelectedImageIdx(selectedImageIdx - 1);
                }}
              >
                <BackIconBold
                  size={42}
                  color={"#03C988"}
                  className="self-center"
                />
              </div>
              <div
                className={`flex flex-col justify-center cursor-pointer w-[72px] h-[72px] bg-white rounded-full p-3 shadow-[0_0_7px_2px_rgba(139,139,139,0.9)]`}
                onClick={() => {
                  setSelectedImageIdx(selectedImageIdx + 1);
                }}
              >
                <ForwardIconBold
                  size={42}
                  color={"#03C988"}
                  className="self-center"
                />
              </div>
            </Group>
          </div>
        </Modal>
        <div className="mt-10 mb-4 mx-24 bg-galeri bg-cover h-[400px] flex flex-col justify-center relative">
          <Stack className="gap-0 border-[6px] w-[50%] border-white ml-6 p-4 bg-black/[0.3] rounded-sm">
            <Group className="gap-2">
              <Text className="self-end font-poppins-semibold text-[48px] text-white">
                Galeri
              </Text>
            </Group>
            <Text className="text-lg text-white text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quaerat odit provident cum architecto assumenda tenetur
              perspiciatis repudiandae sequi distinctio quae vitae quibusdam
            </Text>
          </Stack>
          <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-gradient-to-r from-primaryGreen to-primaryBlue -z-10"></div>
        </div>
        <Stack className="mx-12 mt-10 gap-0">
          {/* <Text className="font-poppins-semibold text-[48px] text-primaryBlue px-3 text-center">
            Galeri
          </Text> */}
          <Group className="justify-center w-[60%] self-center gap-12 mb-20">
            <Stack>
              <div className="border-[16px] border-primaryGreen border-r-white border-b-white rounded-full">
                <img src={camera} className="w-48 rounded-full" />
              </div>
            </Stack>
            <Stack className="relative">
              <Stack className="gap-0">
                <Text className="font-poppins-bold text-[22px] text-primary-text-500">
                  Disclaimer
                </Text>
              </Stack>
              <VerticalDivider h="sm" />
              <Text className="w-[300px] text-primary-text-500 tracking-1 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                nemo minima deserunt ullam at ipsam animi voluptas officia
                numquam
              </Text>
            </Stack>
          </Group>
          <div className="p-3">
            <Gallery
              images={galleryImages}
              margin={8}
              onClick={onClickGallery}
              maxRows={isGalleryExpanded ? 999 : 3}
            />
            {/* <div className="absolute w-full h-20 flex justify-center bottom-5">
              <div className="bg-gradient-to-b from-transparent to-black w-[94%] px h-20"></div>
            </div> */}
            <div
              className="bg-primaryGreen w-full h-6 mt-2 rounded-b-full flex justify-center cursor-pointer"
              onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
            >
              {isGalleryExpanded ? (
                <UpArrowNoTailOutlineBold
                  size={24}
                  color={"#FFFFFF"}
                  className="mt-[1px]"
                />
              ) : (
                <DownArrowNoTailOutlineBold
                  size={24}
                  color={"#FFFFFF"}
                  className=""
                />
              )}
            </div>
          </div>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default MyGallery;
