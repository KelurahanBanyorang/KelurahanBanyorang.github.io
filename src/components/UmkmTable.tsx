import {
  Table,
  Group,
  Stack,
  Button,
  Title,
  MediaQuery,
  Pagination,
  Text,
  Loader,
  Collapse
} from "@mantine/core";
import React, { useState } from "react";
import {
  DownArrowNoTailOutline,
  UpArrowNoTailOutline
} from "../assets/icons/Fluent";

type TableRowCellKey = string;
interface IUmkmTableProps {
  tableTitle: string;
  tableHeadings: IFETableHeadingProps[];
  tableRows: IFETableRowColumnProps[];
  noDataMsg: string;
  dataPerPageAmt: number;
  isLoading: boolean;
  actions?: IFETableAction[];
  onSearch?: (value: string) => void;
  activePage: number;
  onPageChange?: (page: number) => void;
  actionOrientation?: "vertical" | "horizontal";
  actionColumnWidth?: string;
  actionColumnRounded?: false;
  onProgressData?: number;
  withSearch?: boolean;
  headerType?: "1" | "2";
}

export interface IFETableHeadingProps {
  label: string;
  sortable: boolean;
  cellKey: TableRowCellKey;
  width?: string;
  textAlign: "left" | "right" | "center";
}

export type IFETableRowColumnProps = {
  [x in TableRowCellKey]:
    | {
        label: string | number;
        element?: JSX.Element;
      }
    | number
    | string;
};

export interface IActiveSort {
  column: string;
  order: "ASC" | "DESC";
}

export type IActionButtonBgColor =
  | "primary"
  | "primaryGradient"
  | "errorGradient"
  | "white";

export interface IFETableAction {
  label: string;
  icon?: JSX.Element;
  type?: "button" | "element";
  backgroundColor: IActionButtonBgColor;
  onClick: (row: any) => void;
  padding?: string | number;
  width?: string | number;
  eachButtonRounded?: boolean;
  display?: (row: any) => boolean;
  element?: (row: any) => JSX.Element;
}

// Add action color here
const aciontBtnClsNames: { [x in IActionButtonBgColor]: string } = {
  primary: "",
  primaryGradient: "!bg-primary !bg-opacity-20 !text-primary-900",
  errorGradient: "!bg-error-900 !bg-opacity-20 text-error-900",

  white: "!bg-white"
};

const UmkmTable: React.FC<IUmkmTableProps> = ({
  tableTitle,
  tableHeadings,
  tableRows,
  actions,
  noDataMsg,
  isLoading,
  onSearch,
  dataPerPageAmt,
  activePage,
  onPageChange,
  actionOrientation = "horizontal",
  actionColumnWidth = "fit-content",
  actionColumnRounded = true,
  onProgressData = 0,
  withSearch = true,
  headerType = "1"
}) => {
  const headKeys = tableHeadings.map((th) => ({
    key: th.cellKey,
    textAlign: th.textAlign
  }));

  const [isOpened, setIsOpened] = useState(false);
  const pageAmt = Math.round(tableRows.length / dataPerPageAmt + 0.4);

  function handlePageChange(e: number) {
    onPageChange && onPageChange(e);
  }

  const paginationComp = (
    <>
      <Collapse
        in={isOpened}
        transitionDuration={100}
        transitionTimingFunction="linear"
        className="w-full flex flex-row justify-between"
      >
        <Text className="text-secondary-text-500" size={16}>
          Halaman {activePage >= pageAmt ? pageAmt : activePage} dari {pageAmt}
        </Text>
        <Pagination
          onChange={handlePageChange}
          page={activePage >= pageAmt ? pageAmt : activePage}
          total={pageAmt}
          disabled={pageAmt == 0}
          withEdges
          styles={(theme) => ({
            item: {
              "&[data-active]": {
                backgroundColor: "#1C82AD"
              }
            }
          })}
        />
      </Collapse>
    </>
  );

  const isEmpty = !tableRows.length;

  return (
    <div className={`h-fit`}>
      <div className={`mt-4 ${headerType==="1"? "bg-gradient-to-r from-primaryBlue to-primaryGreen" : "bg-gradient-to-r from-primaryBlue to-primaryDarkerBlue"} w-full h-4 rounded-t-lg`}></div>
      <div className="grow basis-0 block overflow-x-auto whitespace-nowrap border-2 border-t-0 rounded-b-md border-[#dfdfdf] overflow-y-auto">
        <Group
          p={"lg"}
          position="apart"
          onClick={() => setIsOpened(!isOpened)}
          className="cursor-pointer"
        >
          {/* {headerType === "2" ? (
            <div className="mr-4">
              {isOpened ? (
                <UpArrowNoTailOutline size={20} />
              ) : (
                <DownArrowNoTailOutline size={20} />
              )}
            </div>
          ) : null} */}
          <Group className="gap-2">
            {!!tableTitle && (
              <Text className="text-primary-text-500 text-xl font-poppins-semibold">
                {tableTitle}
              </Text>
            )}
            {onProgressData > 0 ? (
              <div className="w-[22px] h-[22px] pt-[2px] text-center rounded-full bg-primaryDarkerBlue text-white text-sm relative -top-1">
                {onProgressData > 9 ? "9+" : onProgressData}
              </div>
            ) : null}
          </Group>
          {/* {headerType === "1" ? (
            <div className="mr-4">
              {isOpened ? (
                <UpArrowNoTailOutline size={20} />
              ) : (
                <DownArrowNoTailOutline size={20} />
              )}
            </div>
          ) : null} */}
          <div className="mr-4">
              {isOpened ? (
                <UpArrowNoTailOutline size={20} />
              ) : (
                <DownArrowNoTailOutline size={20} />
              )}
            </div>
        </Group>
        <Collapse
          in={isOpened}
          transitionDuration={100}
          transitionTimingFunction="linear"
        >
          <Table className={`w-full`} verticalSpacing={"md"}>
            {isLoading ? (
              <Group position="center" className={`h-60`}>
                <Loader />
              </Group>
            ) : (
              <>
                <thead className="border-t border-[#dfdfdf] relative">
                  <tr>
                    {tableHeadings.map((head, index) => {
                      return (
                        <th
                          style={{
                            textAlign: head.textAlign,
                            position: "sticky",
                            top: 0,
                            zIndex: 1,
                            background: "white",
                            width: head.width,
                            cursor: head.sortable ? "pointer" : "default"
                          }}
                          key={index}
                        >
                          <Group
                            spacing={"sm"}
                            align={"center"}
                            noWrap
                            position={head.textAlign}
                          >
                            <Text className="text-primary-text-500 text-md font-semibold">
                              {head.label}
                            </Text>
                          </Group>
                        </th>
                      );
                    })}
                    {!!actions?.length && (
                      <th
                        style={{
                          textAlign: "center",
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                          background: "white",
                          cursor: "default",
                          width: actionColumnWidth || "fit-content"
                        }}
                      ></th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {isEmpty ? (
                    <tr className={`h-40`}>
                      <td colSpan={tableHeadings.length + 1}>
                        <Text weight={"bold"} size="lg" align="center">
                          {noDataMsg}
                        </Text>
                      </td>
                    </tr>
                  ) : (
                    tableRows
                      .slice(
                        (activePage - 1) * dataPerPageAmt,
                        (activePage - 1) * dataPerPageAmt + dataPerPageAmt
                      )
                      .map((row: IFETableRowColumnProps, idx: number) => {
                        return (
                          <tr key={idx + "row-"}>
                            {headKeys.map((th) => {
                              const col = row[th.key];

                              if (
                                typeof col === "string" ||
                                typeof col === "number"
                              ) {
                                return (
                                  <td
                                    key={th.key}
                                    className="border-b border-gray-200"
                                  >
                                    <Text className="text-md">{col}</Text>
                                  </td>
                                );
                              }

                              return (
                                <td
                                  key={col.label + "td-key"}
                                  className={`text-primary-text-500  text-${th.textAlign}`}
                                >
                                  {col.element != null ? (
                                    col.element
                                  ) : (
                                    <Text className="text-md">{col.label}</Text>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })
                  )}
                </tbody>
              </>
            )}
          </Table>
        </Collapse>
      </div>

      <Collapse
        in={isOpened}
        transitionDuration={100}
        transitionTimingFunction="linear"
      >
        <footer className="mt-5">
          <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
            <Group position="apart">{paginationComp}</Group>
          </MediaQuery>
          <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
            <Stack align={"center"}>{paginationComp}</Stack>
          </MediaQuery>
        </footer>
      </Collapse>
    </div>
  );
};
export default UmkmTable;
