import React from 'react';
import {Box, Grid, Image, Text} from 'theme-ui';
import './index.css';
import {useBlockLayout, useSortBy, useTable} from "react-table";

const StickyColStar = ({children}) => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: 0}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",
      }}>
        <Text sx={{
          color: "red",
          fontSize: "1rem",
        }}>
          {children}
        </Text>
      </Grid>
    </Box>
  )
}

const StickyColNumber = ({children}) => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: "50px"}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",
      }}>
        <Text sx={{
          color: "blue",
          fontSize: "1rem",
        }}>
          {children}
        </Text>
      </Grid>
    </Box>
  )
}

const StickyColName = ({children}) => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: "100px"}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",

      }}>
        <Image src={'/company-icons/tata.png'} width={'40px'} height={'40px'} sx={{alignSelf: 'center'}}/>
        <Text sx={{
          color: "black",
          fontSize: "1rem",
        }}>
          {children}
        </Text>
      </Grid>
    </Box>
  )
}

export const TableRow = ({row}) => {
  return <tr >
    <StickyColStar>Star</StickyColStar>
    {row.cells.map((cell) =>{
      return cell.render('Cell')
    })}
    <td>Market Cap</td>
    <td>Revenue</td>
    <td>PE ratio</td>
    <td>PB ratio</td>
    <td></td>
  </tr>;
};

const columnComponents = {
  id: (cell) => <StickyColNumber>{cell.value}</StickyColNumber>,
  name: (cell) => <StickyColName>{cell.value}</StickyColName>
}

export const Table = ({columns, data}) => {

  /** table hook starts here **/
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 200,
      width: 150,

    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
      columns: columns.map(column => {
        return {
          ...column,
          Cell: columnComponents[column.accessor]
        }
      }),
      data,
      defaultColumn
    }, useSortBy,
    useBlockLayout);
  /** table hook ends here **/


  return <Box>
    <div role="region" aria-labelledby="caption" tabIndex="0">
      <table {...getTableProps()} >
        <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Company Name</th>
          <th>Market Cap</th>
          <th>Revenue</th>
          <th>PE ratio</th>
          <th>PB ratio</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {/*Example code without components*/}
        {/*<tr>*/}
        {/*  <th>Star</th>*/}
        {/*  <th>Number</th>*/}
        {/*  <th>Name</th>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*</tr>*/}
        {rows.map((data, index) =>
          <TableRow key={index} row={prepareRow(data) || data}/>)
        }
        </tbody>
      </table>
    </div>
  </Box>;
}






