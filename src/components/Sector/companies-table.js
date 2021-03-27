import styled from "styled-components";
import {Box, Grid, Text,Slider,Button} from "theme-ui";
import {useTable} from "react-table";
import React, {useState} from "react";
import makeData from "../../somethings/makeData";

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
    background: ${({bg}) => bg}
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

function Table({columns, data}) {
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
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>
              <Text variant={"smallLight"}>{column.render("Header")}</Text>
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
              const {number} = cell.getCellProps();
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

export function CompaniesList() {
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

  return (
    <Styles bg={"color.background"} headerColor={"primary"}>
      <Box>
        <Grid columns={['1fr 4fr']} gap={0}>
          <Box>
            <FilterGroup name={"Market Cap"}>
              <MarketCap/>
            </FilterGroup>
            <FilterGroup name={"Hello"}/>
            <FilterGroup name={"Hello"}/>
            <FilterGroup name={"Hello"}/>
            <FilterGroup name={"Hello"}/>
          </Box>
          <Box>
            <Table columns={columns} data={data}/>
          </Box>
        </Grid>
      </Box>
    </Styles>
  );
}

function FilterGroup({children, ...remainingProps}) {
  const [open, setOpen] = useState(true);

  return <Box><Box {...remainingProps}
                   p={2}
                   sx={{
                     color: 'red',
                     borderBottom: '1px solid grey',
                     cursor: 'pointer',
                     transition: 'height 0.2s'
                   }}

                   onClick={() => {
                     setOpen(!open)
                   }}
  >
    {remainingProps.name}
  </Box>
    {open ? <Box>
      {children}
    </Box> : null}
  </Box>;
}


function MarketCap(){
  return <Box>
    <Slider/>
    <Button>Small</Button>
    <Button>Mid</Button>
    <Button>Large</Button>
  </Box>
}