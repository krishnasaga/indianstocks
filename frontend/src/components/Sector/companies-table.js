import styled from "styled-components";
import {Box, Button, Grid, Image, Text} from "theme-ui";
import {useBlockLayout, useSortBy, useTable} from "react-table";
import React, {useState} from "react";
import {Filters} from './Filters';
import {BsArrowLeft, BsChevronDown, BsChevronUp, BsFillFunnelFill} from "react-icons/bs";
import ScrollLock from 'react-scrolllock';
import {useSticky} from "react-table-sticky";

// STYLING DOESN'T WORK IN Styles FOR FONT-SIZE, COLOR FOR th

const Styles = styled(Box)`
  padding: 0;

  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid black;
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {     
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      //overflow: hidden;
      color: green;    
      background: white;
      padding: 5px;
      text-align: end;
      :last-child {
        border-right: 0;
      }

    //.resizer {
    //  display: inline-block;
    //  width: 5px;
    //  height: 100%;
    //  position: absolute;
    //  right: 0;
    //  top: 0;
    //  transform: translateX(50%);
    //  z-index: 1;
    //
    //  &.isResizing {
    //    background: blue;
    //  }
    //}
  }
    
    &.sticky {
      overflow: scroll;
      .header {
        position: sticky;
        z-index: 1;
        width: fit-content;
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
        background: #ECF3FD;
      }

      .body {
        position: relative;
        z-index: 0;
        width: 100%;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
      
    tr {
      height: 50px;
      :hover {
        background: #ECF3FD;
      }
      :last-child {
        td {
          //border-bottom: 1;
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
   }
   
   tr {
     display: flex;
     border: 1px solid blue;
     align-items: center;
     padding: 0;
     margin: 0;
     
     td {
       background: white;
       //border: 1px solid grey;
     }
   }
   }
    }     
  
`;

const BodyCell = ({children}) => {
    return (
        <Text sx={{
            color: "black",
            // border: "1px solid red",
            fontSize: "1rem",
        }}>
            {children}
        </Text>
    )
}

const StickyCell = ({children}) => {
    return (
        <Text sx={{
            color: "black",
            // border: "1px solid red",
            fontSize: "1rem",
        }}>
            {children}
        </Text>
    )
}

const mapCellFormat = (value) => {
  if (typeof value === "string") return "";
  if (value > 0) return "smallPositiveNumber";
  return "smallNegativeNumber";
};

function Table({columns, data}) {
  // Use the state and functions returned from useTable to build your UI
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 200,
      width: 150,

    }),
    []
  );
  {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
        columns,
        data,
        defaultColumn
      }, useSortBy,
      useBlockLayout,
      useSticky);

    // Render the UI for your table
    return (

      <table {...getTableProps()}
             className="table sticky"
             style={{height: 400 }}>
        <thead className={'header'}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className={"tr"}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                <Text variant={"smallLight"}>{column.render("Header")}</Text>
                <span>{column.isSorted ? (column.isSortedDesc ?
                  <BsChevronDown/> :
                  <BsChevronUp/>) : ''} </span>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()} className={"body"}>
        {rows.map((row, i) => {
          prepareRow(row);
          return <TableRow row={row} className={"tr"}/>;
        })}
        </tbody>
      </table>
    );
  }
}

export function CompaniesList({name, companies}) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "name",
        sticky: "left",
        Cell: (cell) => {
          return <Grid columns={['28px 1fr']}   >
            <Image src={'/company-icons/tata.png'} width={'40px'} height={'40px'} sx={{alignSelf: 'center'}}/>
            <Box sx={{
              lineHeight: '20px',
              sticky: "left",
            }}>
              <Text sx={{fontSize: '1rem', color: 'black'}}>{cell.value}</Text>
            </Box>
          </Grid>;
        }
      },
      {
        Header: "Focus",
        accessor: "sector",
        Cell: (cell) => {
          return <Grid>
            <BodyCell>
              Hello
            </BodyCell>
          </Grid>
        }
      },
      {
        Header: "PE ratio",
        accessor: "peRatio",
        Cell: (cell) => {
          return <Grid>
            <BodyCell>
              Hello
            </BodyCell>
          </Grid>
        }
      },
      {
        Header: "PB ratio",
        accessor: "pbRatio",
        Cell: (cell) => {
          return <Grid>
            <BodyCell>
              Hello
            </BodyCell>
          </Grid>
        }
      },
      {
        Header: "Market Cap",
        accessor: "marketCap",
        Cell: (cell) => {
          return <Grid>
            <BodyCell>
              Hello
            </BodyCell>
          </Grid>
        }
      },
      {
        Header: "Revenue",
        accessor: "revenue",
        Cell: (cell) => {
          return <Grid>
            <BodyCell>
              Hello
            </BodyCell>
          </Grid>
        }
      },
    ],
    []
  );

  const [filtersOpen, setFiltersOpen] = useState(false)
  return (
    <Styles bg={"color.background"} headerColor={"primary"}>
      <Box>
        {filtersOpen ? <ScrollLock/> : null}
        <Box
          p={2}
          sx={{display: ['block', 'block', 'none']}}
        >
          <Grid columns={['1fr 110px']}
          >
            <Box>

            </Box>
            <Box>
              <Button variant="outlined" sx={{py: "1", px: "3"}} onClick={() => {
                setFiltersOpen(true);
              }}>
                <BsFillFunnelFill size={14}/>
                <Text
                  as={'span'}
                  mx={2}
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "600"
                  }}
                >Filters

                </Text>
              </Button>
            </Box>
          </Grid>
        </Box>
        <Grid columns={[1, 1, '7fr']} gap={0}>
          <Box
            bg={'white'}
            sx={{
              overflowY: 'scroll',
                overflowX: 'scroll',
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
              display: ['block', 'block', 'none'],
            }}
                 p={[1, 10]}
                 color={'rgb(0, 0, 0)'}
            >
              <BsArrowLeft
                size={40}
                onClick={() => {
                  setFiltersOpen(false);
                }}
              />
            </Box>
            {false ? <Filters
              bg={'white'}
              sectorName={name}
              sx={{
                borderRight: '1px solid #e5e5e5',
                height: '100%',
              }}
            /> : null}
          </Box>
          <Box>
            <Table
              columns={columns}
              data={companies}
            />
          </Box>
        </Grid>
      </Box>
    </Styles>
  );
}


function TableRow({row}) {
  return <Box as={'tr'} {...row.getRowProps()} sx={{

  }}>
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
  </Box>;
}
