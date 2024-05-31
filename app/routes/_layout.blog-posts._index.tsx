import { GetManyResponse, useMany, useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import {
  List,
  ShowButton,
  EditButton,
  DeleteButton,
  DateField,
} from "@refinedev/chakra-ui";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Pagination } from "~/components/pagination";
import { Heading } from "~/components/heading";
import { bearStore } from "~/store";
import styled from "styled-components";

const WarningHeader = styled(Heading)`
  color: #000;
  background: #fde047;
`;

export default function BlogPostList() {
  const bears = bearStore((state) => state.bears)
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "id",
        accessorKey: "id",
        header: "ID",
      },
      {
        id: "first_name",
        accessorKey: "first_name",
        header: "First Name",
      },
      {
        id: "last_name",
        accessorKey: "last_name",
        header: "Last Name",
      },
      {
        id: "email",
        accessorKey: "email",
        header: "Email",
      },
      {
        id: "phone_number",
        accessorKey: "phone_number",
        header: "Phone No",
      },
      {
        id: "address",
        accessorKey: "address",
        header: "Address",
      },
      {
        id: "city",
        accessorKey: "city",
        header: "City",
      },
      {
        id: "state",
        accessorKey: "state",
        header: "State",
      },
      {
        id: "postal_code",
        accessorKey: "postal_code",
        header: "Postal Code",
      },
      {
        id: "country",
        accessorKey: "country",
        header: "Country",
      },
      {
        id: "date_of_birth",
        accessorKey: "date_of_birth",
        header: "Date Of Birth",
      },
      // {
      //   id: "category",
      //   header: "Category",
      //   accessorKey: "categories",
      //   cell: function render({ getValue, table }) {
      //     const meta = table.options.meta as {
      //       categoryData: GetManyResponse;
      //     };

      //     try {
      //       const category = meta.categoryData?.data?.find(
      //         (item) => item.id == getValue<any>()?.id
      //       );

      //       return category?.title ?? "Loading...";
      //     } catch (error) {
      //       return null;
      //     }
      //   },
      // },
      {
        id: "created_at",
        accessorKey: "created_at",
        header: "Created At",
        cell: function render({ getValue }) {
          return new Date(getValue<any>()).toLocaleString(undefined, {
            timeZone: "UTC",
          });
        },
      },
      {
        id: "actions",
        accessorKey: "id",
        header: "Actions",
        cell: function render({ getValue }) {
          return (
            <HStack>
                <ShowButton
                    hideText
                    size="sm"
                    recordItemId={getValue() as number}
                />
                {/* <EditButton
                    hideText
                    size="sm"
                    recordItemId={getValue() as number}
                /> */}
                {/* <DeleteButton
                    hideText
                    size="sm"
                    recordItemId={getValue() as number}
                /> */}
            </HStack>
        );
        },
      },
    ],
    []
  );

  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      setCurrent,
      pageCount,
      current,
      tableQueryResult: { data: tableData },
    },
  } = useTable({
    columns,
    refineCoreProps: {
      meta: {
        select: "*",
      },
      resource: "fake_data"
    },
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    <>
      <WarningHeader>⚠️ Beware {bears} bears 🐻 around here...</WarningHeader>
      <List title="Tabular Data">
        <TableContainer whiteSpace="pre-line">
          <Table variant="simple">
            <Thead>
              {getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Th key={header.id} w="100%">
                      <Text>
                      {!header.isPlaceholder &&
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Text>
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {getRowModel().rows.map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id}>
                      <Text>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Text>
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Pagination
          current={current}
          pageCount={pageCount}
          setCurrent={setCurrent}
        />
      </List>
    </>
  );
}
