import React from 'react';
import { Box, Grid, Link, Text } from 'theme-ui';
import styled from 'styled-components';
import { useTable } from 'react-table';
import makeData from '../somethings/makeData';
import Sticky from 'react-stickynode';

export default ({ pageContext: { name } }) =>
  <Box w={'100%'}>
    <header
      sx={{
        variant: 'styles.header',
      }}>
      <Box
        sx={{
          maxWidth: 1920,
          mx: 'auto',
          px: 3,
          display: 'flex',
          alignItems: 'baseline',
        }}>
        <Link to='/'
              sx={{
                variant: 'styles.navlink',
                fontSize: 5,
                py: 2,
              }}>
          {name.toUpperCase()}
        </Link>
        <Box sx={{ mx: 'auto' }} />

      </Box>
    </header>

    <Grid p={20} columns={[1, 2, 2, 2]}>
      <Box>
        <Text as={'h2'}> Disruptions </Text>
        <Box w={'100%'}>
          <ProductItem name={'DNA Sequencing'} />
          <ProductItem name={'DNA Sequencing'} />
          <ProductItem name={'DNA Sequencing'} />
          <ProductItem name={'DNA Sequencing'} />
          <ProductItem name={'DNA Sequencing'} />
          <ProductItem name={'DNA Sequencing'} />
          <ProductItem name={'DNA Sequencing'} />
        </Box>
      </Box>
      <Box sx={{}}>
        <Text as={'h2'}> Performance </Text>
        <Text py={20} as={'h3'}> Current Market size </Text>
        <Text py={20} sx={{
          fontSize: '2rem',
        }}>$1 Trillion</Text>
        <Text py={20} as={'h3'}> Expected market size by 2025 </Text>
        <Text
          py={20}
          sx={{
            fontSize: '2rem',
          }}>$5 Trillion</Text>
      </Box>

    </Grid>
    <Box py={20}>
      <CompaniesList />
    </Box>
  </Box>;


const Styles = styled(Box)`
  padding: 1rem;

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
          background: rgba(0,0,0,0.02);
          box-shadow:  0 1px 0 rgba(0,0,0,0.24);
          border-right: none;
        }
      }
    }
   th {
    background: ${({ bg }) => bg}
    color: ${({ headerColor }) => headerColor}
   }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      cursor: pointer;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

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
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

function CompaniesList() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Basic Info',
        accessor: 'name',
        columns: [
          {
            Header: 'Company Name',
            accessor: 'companyName',
          },
          {
            Header: 'Sector',
            accessor: 'sector',
          },
        ],
      },
      {
        Header: 'Fundamentals',
        accessor: 'fundamentals',
        columns: [
          {
            Header: 'PE ratio',
            accessor: 'peRatio',
          },
          {
            Header: 'PB ratio',
            accessor: 'pbRatio',
          },
          {
            Header: 'Market Cap',
            accessor: 'marketCap',
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <Styles bg={'color.background'} headerColor={'primary'}>
      <Sticky enabled={true} top={0} bottomBoundary={0}>
        <Table columns={columns} data={data} />
      </Sticky>
    </Styles>
  );
}

function ProductItem({name}) {
  return <Grid columns={[2]} sx={{
    '::hover': {
      color: 'red'
    }
  }}
  >
    <Box py={2} >
      <Text>{name}</Text>
    </Box>
  </Grid>;
};
