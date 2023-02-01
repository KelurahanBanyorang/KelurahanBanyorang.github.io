import { Loader, ScrollArea, Stack, Text } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import MainLayout from "../../layouts/MainLayout.layout";
import ChartNode from "./ChartNode.component";
// import ketuaLurahImg from "../../assets/img/ketua-lurah.jpg";
import useArray from "../../hooks/useArray";
import useMap from "../../hooks/useMap";
// import logoBantaeng from "../../assets/img/logo-bantaeng-hq.png";

export interface IChart {}

// const StyledNode = styled.div`
//   padding: 5px;
//   border-radius: 8px;
//   display: inline-block;
//   border: 1px solid red;
// `;

const Chart: React.FC<IChart> = ({}) => {
  // const viewport = useRef<HTMLDivElement>(null);
  const { array: arrayRw, clear: clearRw, push: pushRw } = useArray([]);
  const { array: arrayRw1, clear: clearRw1, push: pushRw1 } = useArray([]);
  const { array: arrayRw2, clear: clearRw2, push: pushRw2 } = useArray([]);
  const { array: arrayRw3, clear: clearRw3, push: pushRw3 } = useArray([]);
  const { array: arrayRw4, clear: clearRw4, push: pushRw4 } = useArray([]);
  const { array: arrayRw5, clear: clearRw5, push: pushRw5 } = useArray([]);
  const [rwData, rwActions] = useMap();
  const [ketuaLurahName, setKetuaLurahName] = useState("");
  const [ketuaLurahImg, setKetuaLurahImg] = useState<any>(null);

  // useEffect(() => {
  //   if (viewport != null && rwData.size > 0) {
  //     viewport!.current!.scrollTo({
  //       left: viewport!.current!.scrollWidth / 4,
  //       behavior: "auto"
  //     });
  //   }
  // }, [rwData]);

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

  // RW
  useEffect(() => {
    let SHEET_TITLE = `RW`;

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
        clearRw();
        for (let i = 1; i < data.table.rows.length; i++) {
          let element = data.table.rows[i];

          const getFileId = patternFileIdGDrive.exec(
            data.table.rows[1].c[3] == null ? "" : element.c[3].v
          );

          pushRw({
            name: element.c[0] == null ? "" : element.c[0].v.trim(),
            image:
              getFileId == null
                ? null
                : "https://drive.google.com/uc?export=view&id=" + getFileId[1]
          });
        }
      });
  }, []);

  // RW 1
  useEffect(() => {
    let SHEET_TITLE = `RT RW 1`;

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
        clearRw1();
        for (let i = 1; i < data.table.rows.length; i++) {
          let element = data.table.rows[i];

          const getFileId = patternFileIdGDrive.exec(
            data.table.rows[1].c[3] == null ? "" : element.c[3].v
          );

          pushRw1({
            name: element.c[0] == null ? "" : element.c[0].v.trim(),
            image:
              getFileId == null
                ? null
                : "https://drive.google.com/uc?export=view&id=" + getFileId[1]
          });
        }
      });
  }, []);

  // useEffect(() => {
  //   rwActions.reset();

  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];

  //     let rw = element.c[2].v;
  //     if (rwData.has(rw)) {
  //       let tempArr: Array<any> = rwData.get(rw) as any;
  //       tempArr.push(element);
  //       rwActions.set(rw, tempArr);
  //     } else {
  //       let tempArr: Array<any> = [];
  //       rwActions.set(rw, tempArr);
  //     }
  //   }
  // }, [array]);
  console.log("Ketua lurah ", ketuaLurahImg);
  return (
    <MainLayout activePage="bagan">
      <Stack className="mb-8">
        <Stack className="gap-0 self-center mt-16 ">
          <Text className="font-poppins-bold text-[46px] text-primary-text-500 text-center">
            Bagan Kelurahan
          </Text>
          <Text className="text-secondary-text-500 text-center -mt-1">
            Bagan struktur Ketua Lurah dan RW / RT
          </Text>
          <Text className="text-secondary-text-500 text-center text-sm w-fit self-center border-b-[8px] border-primaryDarkBlue pb-3 rounded-b-lg">
            Sumber: Kelurahan Banyorang
          </Text>
        </Stack>
        <div className="overflow-hidden mt-10 relative">
          {/* <img src={logoBantaeng} className="absolute h-full opacity-20 left-1/4" /> */}
          {arrayRw.length == 0 ? (
            <Loader
              size="xl"
              variant="dots"
              color={"#00337C"}
              className="mx-auto mt-14"
            />
          ) : (
            <ScrollArea
              style={{ width: "100vw", height: "700px" }}
              type="always"
              offsetScrollbars
              // className="mr-10"
              styles={() => ({
                scrollbar: {
                  '&[data-orientation="horizontal"] .mantine-ScrollArea-thumb':
                    {
                      backgroundColor: "#03C988"
                    }
                }
              })}
            >
              <Tree
                nodePadding="4px"
                lineWidth={"3px"}
                lineColor={"#b5c2d1"}
                lineBorderRadius={"2px"}
                label={
                  <ChartNode
                    nodeOrder={0}
                    img={ketuaLurahImg}
                    position="Ketua Lurah"
                    name={ketuaLurahName}
                  />
                }
                lineHeight="72px"
              >
                {arrayRw.map((rwArrElement: any, e: number) => {
                  return (
                    <TreeNode
                      label={
                        <ChartNode
                          key={`RW ${e + 1}`}
                          nodeOrder={1}
                          name={rwArrElement.name}
                          img={rwArrElement.image}
                          position={`RW ${e + 1}`}
                        />
                      }
                    >
                      {arrayRw1.map((rwArrElement: any, e: number) => {
                        return (
                          <TreeNode
                            label={
                              <ChartNode
                                key={`RW ${e + 1}`}
                                nodeOrder={1}
                                name={rwArrElement.name}
                                img={rwArrElement.image}
                                position={`RW ${e + 1}`}
                              />
                            }
                          ></TreeNode>
                        );
                      })}
                    </TreeNode>
                  );
                })}
              </Tree>
            </ScrollArea>
          )}
        </div>
      </Stack>
    </MainLayout>
  );
};
export default Chart;
