import styled from "styled-components";
import { Box, Button, Grid, Text } from "theme-ui";
import { useSortBy, useTable } from "react-table";
import React, { useState } from "react";
import makeData from "../../somethings/makeData";
import { Filters } from './Filters';
import { BsArrowLeft, BsChevronDown, BsChevronUp, BsFillFunnelFill } from "react-icons/bs";
import ScrollLock from 'react-scrolllock';

const Styles = styled(Box)`
  padding: 0;

  table {
    border-spacing: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 1;
        }
      }
      :hover {
        td {
          background: #ECF3FD;
        }
      }
    }
   th {
    background: ${({ bg }) => bg}
    color:  red;
   }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #e5e5e5;
      cursor: pointer;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const mapCellFormat = (value) => {
  if (typeof value === "string") return "";
  if (value > 0) return "smallPositiveNumber";
  return "smallNegativeNumber";
};

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  }, useSortBy);

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <Text variant={"smallLight"}>{column.render("Header")}</Text>
                <span>{column.isSorted ? (column.isSortedDesc ?
                  <BsChevronDown /> :
                  <BsChevronUp />) : ''} </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                const { number } = cell.getCellProps();
                return (
                  <td {...cell.getCellProps()}>
                    <Text variant={mapCellFormat(cell.value)}>
                      {cell.render("Cell")}
                    </Text>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function CompaniesList({ name }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "companyName",
      },
      {
        Header: "Sector",
        accessor: "sector",
      },
      {
        Header: "PE ratio",
        accessor: "peRatio",
      },
      {
        Header: "PB ratio",
        accessor: "pbRatio",
      },
      {
        Header: "Market Cap",
        accessor: "marketCap",
      },
      {
        Header: "Revenue",
        accessor: "revenue",
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  const [filtersOpen, setFiltersOpen] = useState(false)
  return (
    <Styles bg={"color.background"} headerColor={"primary"} >
      <Box >
        {filtersOpen ? <ScrollLock /> : null}
        <Grid columns={[2]}
          sx={{ display: ['block', 'block', 'none'] }}
        >
          <Box>

          </Box>
          <Box >
            <Button variant="outlined" sx={{ py: "1", px: "3" }} onClick={() => {
              setFiltersOpen(true);
            }}><BsFillFunnelFill size={12} sx={{
              display: 'inline',
            }} /> <Text sx={{
              display: 'inline',
              p: "1",
              fontSize: "0.8rem",
              fontWeight: "600"
            }}>Filters</Text> </Button>
          </Box>
        </Grid>

        <Grid columns={[1, 1, '2fr 7fr']} gap={0}>
          <Box
            bg={'white'}
            sx={{
              overflowY: 'scroll',
              width: '100%',
              height: ['100vh', '100vh', 'initial'],
              display: [
                filtersOpen ? 'block' : 'none',
                filtersOpen ? 'block' : 'none', 'block',
                'block'
              ],
              position: [
                filtersOpen ? 'fixed' : 'static',
                filtersOpen ? 'fixed' : 'static',
                'static'
              ],
              zIndex: '9999',
              top: 0,
              left: 0
            }}
          >
            <Box sx={{
              display: ['block', 'block', 'none']
            }}
              p={10}
              color={'rgb(0, 0, 0)'}
            >
              <BsArrowLeft
                size={40}
                onClick={() => {
                  setFiltersOpen(false);
                }}
              />
            </Box>
            <Filters
              bg={'white'}
              sectorName={name} />
          </Box>
          <Box>
            <Table

              columns={columns}
              data={data}
            />
          </Box>
        </Grid>
      </Box>
    </Styles>
  );
}
