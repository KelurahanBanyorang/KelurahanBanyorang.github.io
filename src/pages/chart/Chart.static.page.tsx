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
  // const viewport = useRef<HTMLDivElement>(null);
  const { array, clear, push } = useArray([]);
  const [rwData, rwActions] = useMap();

  const [ketuaLurahName, setKetuaLurahName] = useState("");
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
          <ScrollArea
            style={{ width: "100vw" }}
            type="always"
            offsetScrollbars
            // className="mr-10"
            styles={() => ({
              scrollbar: {
                '&[data-orientation="horizontal"] .mantine-ScrollArea-thumb': {
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
              <TreeNode
                label={
                  <ChartNode
                    nodeOrder={1}
                    name={"Syamsul Bahri"}
                    position={"RW 1"}
                  />
                }
              >
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"Andi Martani"}
                      position={"RT 1"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"A. Fatahuddin"}
                      position={"RT 2"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"M. Arwan"}
                      position={"RT 3"}
                    />
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <ChartNode
                    nodeOrder={1}
                    name={"M. Syahrir"}
                    position={"RW 2"}
                  />
                }
              >
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"A. Abd. Rahman"}
                      position={"RT 1"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"H. Nasaruddin"}
                      position={"RT 2"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"Abd. Asis"}
                      position={"RT 3"}
                    />
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <ChartNode
                    nodeOrder={1}
                    name={"Saparuddin"}
                    position={"RW 3"}
                  />
                }
              >
                <TreeNode
                  label={
                    <ChartNode nodeOrder={2} name={"Imran"} position={"RT 1"} />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"Syamsuddin. U"}
                      position={"RT 2"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"Baso Gili"}
                      position={"RT 3"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"Abd. Gani"}
                      position={"RT 4"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"Junaedi"}
                      position={"RT 5"}
                    />
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <ChartNode
                    nodeOrder={1}
                    name={"Abd. Haris"}
                    position={"RW 4"}
                  />
                }
              >
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"Syamsuddin. HM"}
                      position={"RT 1"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"M. Dahlan"}
                      position={"RT 2"}
                    />
                  }
                />
                <TreeNode
                  label={
                    <ChartNode nodeOrder={2} name={"Ramli"} position={"RT 3"} />
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <ChartNode nodeOrder={1} name={"Firman"} position={"RW 5"} />
                }
              >
                <TreeNode
                  label={
                    <ChartNode
                      nodeOrder={2}
                      name={"M. Arsyad"}
                      position={"RT 1"}
                    />
                  }
                />
              </TreeNode>
            </Tree>
          </ScrollArea>
        </div>
      </Stack>
    </MainLayout>
  );
};
export default Chart;
