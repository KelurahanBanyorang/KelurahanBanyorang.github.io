import { Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import FETableComponent, {
  IFETableAction,
  IFETableHeadingProps,
  IFETableRowColumnProps
} from "./UmkmTable";
import useArray from "../assets/hooks/useArray";
// import {readFile, utils} from "xlsx";

export interface IUmkmRwTable {
  title?: string;
  tableHeaderTitle?: "1" | "2";
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
  tableHeaderTitle = "1"
}) => {
  const { array: dataFromBackend } = useArray(getDataFromBackend());
  const [activePage, setActivePage] = useState<number>(1);
  const [selectedRow, setSelectedRow] = useState(0);

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

  const tableRows = dataFromBackend.map(
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
      dataPerPageAmt={5}
      onSearch={(value) => {
        console.log("Searching for: ", value);
      }}
      onPageChange={setActivePage}
      activePage={activePage}
      tableTitle={title || "Daftar UMKM"}
      tableRows={tableRows}
      tableHeadings={tableHeadings}
      noDataMsg={"Data tidak ditemukan"}
      actionColumnWidth="270px"
      onProgressData={dataFromBackend.length}
    />
  );
};
export default UmkmRwTable;
