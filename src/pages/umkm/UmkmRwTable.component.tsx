import React, { useEffect, useState } from "react";
import useArray from "../../hooks/useArray";
import FETableComponent, {
  IFETableHeadingProps,
  IFETableRowColumnProps
} from "./UmkmTable.component";
// import {readFile, utils} from "xlsx";

export interface IUmkmRwTable {
  title?: string;
  tableHeaderTitle?: "1" | "2";
  rw?: string | number;
}

function getDataFromBackend() {
  return [
    {
      id: 0,
      businessMen: "Ismail",
      businessType: "Penjual Ikan",
      sdm: "2 Orang",
      partners: "Velip, Patsigi, Sambe",
      businessAge: "8 Tahun",
      rw: "RW 2"
    },
    {
      id: 1,
      businessMen: "Ismail",
      businessType: "Penjual Ikan",
      sdm: "2 Orang",
      partners: "Velip, Patsigi, Sambe",
      businessAge: "8 Tahun",
      rw: "RW 2"
    },
    {
      id: 2,
      businessMen: "Ismail",
      businessType: "Penjual Ikan",
      sdm: "2 Orang",
      partners: "Velip, Patsigi, Sambe",
      businessAge: "8 Tahun",
      rw: "RW 2"
    },
    {
      id: 3,
      businessMen: "Ismail",
      businessType: "Penjual Ikan",
      sdm: "2 Orang",
      partners: "Velip, Patsigi, Sambe",
      businessAge: "8 Tahun",
      rw: "RW 2"
    },
    {
      id: 4,
      businessMen: "Ismail",
      businessType: "Penjual Ikan",
      sdm: "2 Orang",
      partners: "Velip, Patsigi, Sambe",
      businessAge: "8 Tahun",
      rw: "RW 2"
    }
  ];
}

// File path.

const UmkmRwTable: React.FC<IUmkmRwTable> = ({
  title,
  tableHeaderTitle = "1",
  rw = 1
}) => {
  // const { array: dataFromBackend } = useArray(getDataFromBackend());
  const [activePage, setActivePage] = useState<number>(1);
  const [firstRender, setFirstRender] = useState(true);
  const [selectedRow, setSelectedRow] = useState(0);

  const { array: umkmData, push, clear } = useArray([]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      let SHEET_ID = "1hMhkNeM5eycAMisNn1nTDxa5VwGfOvid";
      let SHEET_TITLE = `RW ${rw}`;

      let FULL_URL =
        "https://docs.google.com/spreadsheets/d/" +
        SHEET_ID +
        "/gviz/tq?sheet=" +
        SHEET_TITLE;

      // if (umkmData.length <= 0) {
      fetch(FULL_URL)
        .then((res) => res.text())
        .then((rep) => {
          let data = JSON.parse(rep.substring(47).slice(0, -2));
          clear();
          for (let i = 0; i < data.table.rows.length; i++) {
            let element = data.table.rows[i];
            push({
              id: `RW ${rw} ${i}`,
              businessMen:
                element.c[1] == null ? "Tidak ada" : element.c[1].v.trim(),
              businessType:
                element.c[2] == null ? "Tidak ada" : element.c[2].v.trim(),
              sdm: element.c[3] == null ? "Tidak ada" : element.c[3].v.trim(),
              partners:
                element.c[4] == null ? "Tidak ada" : element.c[4].v.trim(),
              businessAge:
                element.c[5] == null ? "Tidak ada" : element.c[5].v.trim(),
              rw: element.c[7] == null ? "Tidak ada" : element.c[7].v.trim()
            });
          }
        });
    }
  }, []);

  const tableHeadings: IFETableHeadingProps[] = [
    {
      label: "No",
      sortable: false,
      textAlign: "center",
      cellKey: "no",
      width: "80px"
    },
    {
      label: "Pelaku Usaha",
      sortable: true,
      textAlign: "left",
      cellKey: "businessMen"
    },
    {
      label: "Jenis Usaha",
      sortable: true,
      textAlign: "left",
      cellKey: "businessType",
      width: "300px"
    },
    {
      label: "SDM",
      sortable: true,
      textAlign: "left",
      cellKey: "sdm"
    },
    {
      label: "Mitra",
      sortable: true,
      textAlign: "left",
      cellKey: "partners"
    },
    {
      label: "Lama Usaha",
      sortable: true,
      textAlign: "left",
      cellKey: "businessAge"
    },
    {
      label: "Lokasi RW",
      sortable: true,
      textAlign: "left",
      cellKey: "rwLocation"
    }
  ];

  const tableRows = umkmData.map(
    (data: any, idx: number) =>
      ({
        no: {
          label: idx + 1
        },
        businessMen: {
          label: data.businessMen
        },
        businessType: {
          label: data.businessType
        },
        sdm: {
          label: data.sdm
        },
        partners: {
          label: data.partners
        },
        businessAge: {
          label: data.businessAge
        },
        rwLocation: {
          label: data.rw
        }
      } as IFETableRowColumnProps)
  );

  return (
    <FETableComponent
      isLoading={false}
      // dataAmt={dataFromBackend.length}
      headerType={tableHeaderTitle}
      dataPerPageAmt={6}
      onPageChange={setActivePage}
      activePage={activePage}
      tableTitle={title || "Daftar UMKM"}
      tableRows={tableRows}
      tableHeadings={tableHeadings}
      noDataMsg={"Data tidak ditemukan"}
      onProgressData={umkmData.length}
    />
  );
};
export default UmkmRwTable;
