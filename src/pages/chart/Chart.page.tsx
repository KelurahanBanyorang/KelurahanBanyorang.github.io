import { ScrollArea, Stack, Text } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import MainLayout from "../../layouts/MainLayout.layout";
import ChartNode from "./ChartNode.component";
import ketuaLurah from "../../assets/img/ketua-lurah.jpg";
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

  useEffect(() => {
    if(viewport!=null){
      viewport!.current!.scrollTo({ left: (viewport!.current!.scrollWidth/10 ), behavior: 'auto' });
    }
  }, [])

  
  const [rwData, rwActions] = useMap()
  const [ketuaLurah, setKetuaLurah] = useState('')

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
          // rwActions.reset()
          
          setKetuaLurah(data.table.rows[1].c[0].v)
          for (let i = 2; i < data.table.rows.length; i++) {
            let element = data.table.rows[i];
            let rw = data.table.rows[i].c[2].v
            // console.log(element)
            console.log(rw)
            if(rwData.has(rw)){
              let tempArr : Array<any> = rwData.get(rw) as any
              tempArr.push(element)
              rwActions.set(rw, tempArr)
              console.log('Sudah ada!', tempArr)
            }else{
              let tempArr : Array<any> = [element]
              rwActions.set(rw, tempArr)
              console.log('Belum ada!', tempArr)
            }
            console.log('RW Sekarang!',rwData)


            // if ()
            // push({
            //   id: i,
            //   businessMen:
            //     element.c[1] == null ? "Tidak ada" : element.c[1].v.trim(),
            //   businessType:
            //     element.c[2] == null ? "Tidak ada" : element.c[2].v.trim(),
            //   sdm: element.c[3] == null ? "Tidak ada" : element.c[3].v.trim(),
            //   partners:
            //     element.c[4] == null ? "Tidak ada" : element.c[4].v.trim(),
            //   businessAge:
            //     element.c[5] == null ? "Tidak ada" : element.c[5].v.trim(),
            //   rw: element.c[7] == null ? "Tidak ada" : element.c[7].v.trim()
            // });
          }
        });
  }, []);

  console.log(rwData)
  
  return (
    <MainLayout>
      <Stack className="mb-10">
        <Stack className="gap-0 self-center mt-20">
          <Text className="font-poppins-bold text-[46px] text-primary-text-500 text-center">
            Bagan Kelurahan
          </Text>
          <Text className="text-secondary-text-500 text-center -mt-1">
            Bagan struktur Ketua Lurah dan RW / RT
          </Text>
          <Text className="text-secondary-text-200 text-center text-sm">
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
            viewportRef={viewport}
          >
            {/* <div className="w-[200vw] overflow-x-scroll"> */}
            <Tree
              nodePadding="4px"
              lineWidth={"3px"}
              lineColor={"#b5c2d1"}
              lineBorderRadius={"2px"}
              label={<ChartNode nodeOrder={0} img={ketuaLurah} />}
              lineHeight="72px"
            >
              <TreeNode label={<ChartNode nodeOrder={1} />} className="">
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
              </TreeNode>
              <TreeNode label={<ChartNode nodeOrder={1} />}>
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
              </TreeNode>
              <TreeNode label={<ChartNode nodeOrder={1} />}>
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
              </TreeNode>
              <TreeNode label={<ChartNode nodeOrder={1} />}>
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
                <TreeNode label={<ChartNode nodeOrder={2} />} />
              </TreeNode>
              <TreeNode label={<ChartNode nodeOrder={1} />}>
                <TreeNode label={<ChartNode nodeOrder={2} />} />
              </TreeNode>
            </Tree>
            {/* </div> */}
          </ScrollArea>
        </div>
      </Stack>
    </MainLayout>
  );
};
export default Chart;
