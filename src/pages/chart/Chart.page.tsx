import { Loader, ScrollArea, Stack, Text } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import MainLayout from "../../layouts/MainLayout.layout";
import ChartNode from "./ChartNode.component";
import ketuaLurahImg from "../../assets/img/ketua-lurah.jpg";
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
  const viewport = useRef<HTMLDivElement>(null);
  const { array, clear, push } = useArray([]);
  const [rwData, rwActions] = useMap();
  const [ketuaLurahName, setKetuaLurahName] = useState("");

  useEffect(() => {
    if (viewport != null && rwData.size > 0) {
      viewport!.current!.scrollTo({
        left: viewport!.current!.scrollWidth / 4,
        behavior: "auto"
      });
    }
  }, [rwData]);

  useEffect(() => {
    let SHEET_ID = "1nrEMirGuiVBm2DJhrkJ8-a_mRmoRTyY_pv0hOGfZnrw";
    let SHEET_TITLE = `Struktur Kelurahan`;

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
        clear();
        // rwActions.reset()

        setKetuaLurahName(data.table.rows[1].c[0].v);
        for (let i = 2; i < data.table.rows.length; i++) {
          let element = data.table.rows[i];

          push(element);
        }
      });
  }, []);

  useEffect(() => {
    rwActions.reset();

    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      let rw = element.c[2].v;
      if (rwData.has(rw)) {
        let tempArr: Array<any> = rwData.get(rw) as any;
        tempArr.push(element);
        rwActions.set(rw, tempArr);
      } else {
        let tempArr: Array<any> = [];
        rwActions.set(rw, tempArr);
      }
    }
  }, [array]);

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
          {rwData.size == 0 ? (
            <Loader
              size="xl"
              variant="dots"
              color={"#00337C"}
              className="mx-auto mt-14"
            />
          ) : (
            <ScrollArea
              // style={{ width: "100vw" }}
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
              className="w-[100vw]"
              viewportRef={viewport}
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
                {Array.from(rwData.entries()).map((entry: any) => {
                  const [key, rwArr] = entry;
                  return (
                    <TreeNode
                      label={
                        <ChartNode
                          key={key}
                          nodeOrder={1}
                          name={
                            rwArr[0] == null ? "" : (rwArr[0].c[0].v as any)
                          }
                          position={
                            rwArr[0] == null ? "" : (rwArr[0].c[1].v as any)
                          }
                        />
                      }
                    >
                      {rwArr != null && rwArr.length > 0
                        ? rwArr.map((rwArrElement: any, e: number) => {
                            return (
                              <>
                                {e > 0 ? (
                                  <TreeNode
                                    key={key + e}
                                    label={
                                      <ChartNode
                                        key={e}
                                        nodeOrder={2}
                                        name={
                                          rwArrElement == null
                                            ? ""
                                            : (rwArrElement.c[0].v as any)
                                        }
                                        position={
                                          rwArrElement == null
                                            ? ""
                                            : (rwArrElement.c[1].v as any)
                                        }
                                      />
                                    }
                                  />
                                ) : null}
                              </>
                            );
                          })
                        : null}
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
