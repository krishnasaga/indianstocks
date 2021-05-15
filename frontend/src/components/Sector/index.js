import { Box, Container, Grid, Link, Text } from "theme-ui";
import { AnimatedNumber } from "../Number";
import ReactTable from 'react-table';

import React from "react";

export const SectorBanner = ({ name, intro, insights, backgroundImage }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: ["550px"],
        backgroundImage: `linear-gradient(to right,
          rgba(0,0,0,0.8),
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.1),
          rgba(0,0,0,0.1)),url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid columns={[1, 2]}>
        <Box my={20} px={20} py={70} >
          <Text
            color={"text2"}
            variant="bold1"
            sx={{
              fontSize: 40,
            }}
          >
            {name}
          </Text>

          <Text
            as={"h2"}
            color={"color2"}
            variant="regular2"
            sx={{
              fontSize: 25,
            }}
          >
            {intro}
          </Text>
          <Grid columns={[2, 2]} py={[10, 70]}>
            {insights.map((insight) => {
              return (
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Text color={"color2"} variant="bold1" sx={{ fontSize: 20 }}>
                    {insight.name}
                  </Text>
                  <AnimatedNumber
                    color={"color2"}
                    variant="light2"
                    sx={{ fontSize: "2rem" }}
                  >
                    {insight.number}
                  </AnimatedNumber>
                </Box>
              );
            })}
          </Grid>
        </Box>
        <Box sx={{ textAlign: "center" }}></Box>
      </Grid>
    </Box>
  );
};

export function Subpages({ name }) {
  return (
    <Box
      bg={"color4"}
      sx={{
        textAlign: "center",
        color: "color2",
      }}
    >
      <Container>
        <Grid columns={[5, 5, 5, 5]} align={"center"}>
          <Tab
            name={"Analysis"}
            href={`/sectors/${name}/complete-analysis-of-${name}-sector-in-india`}
          />
          <Tab
            name={"Companies"}
            href={`/sectors/${name}/all-companies-in-${name}-sector-india`}
          />
          <Tab
            name={"Investors"}
            href={`/sectors/${name}/top-investors-in-${name}-in-india`}
          />
          <Tab name={"News"} href={`/sectors/${name}/latest-news`} />
          <Tab name={"Q&A"} href={`/sectors/${name}/latest-news`} />

        </Grid>
      </Container>
    </Box>
  );
}

function Tab({ name, href }) {
  return (
    <Box
      p={2}
      sx={{
        cursor: "pointer",
      }}
    >
      <Link href={href}>
        <Text color={"color2"}> {name} </Text>
      </Link>
    </Box>
  );
}

// export const SectorBanner = ({ name, intro, insights, backgroundImage }) => {
//     return (
//
//     );
// };


// TRIAL CODE FROM GITHUB

// const columns = [
//     {
//         name: 'Amount',
//         selector: 'amount',
//         // cell: row => amountFormatter(row.amount),
//         sortable: true,
//         maxWidth: '25%',
//         fixed: "left",
//     },
//     {
//         name: 'Status',
//         sortable: true,
//         maxWidth: '25%',
//         selector: 'status',
//         // cell: row => <div className={row.status.toLowerCase()}>{row.status}</div>,
//     },
//     {
//         name: 'Method',
//         // selector: row => `${row.bank} *** ${row.last4}`,
//         sortable: true,
//         maxWidth: '25%'
//     },
//     {
//         name: 'Date',
//         sortable: true,
//         selector: 'date',
//         // cell: row => dateFormatter(row.date),
//         // sortFunction: function (a, b) {
//         //     return new Date(a) - new Date(b)
//         // },
//         maxWidth: '25%'
//     }
// ];
//
// export default class Table extends React.Component {
//     render() {
//         return (
//
//                 <ReactTable
//                     columns={columns}
//                     // data={records.default}
//
//                     fixedHeader
//                     allowOverflow	= {false}
//                     overflowY={false}
//                     overflowX={false}
//                     wrap={false}
//                     highlightOnHover={true}
//
//                     pagination={true}
//                     paginationPerPage={10}
//                     paginationRowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300]}
//
//                     // customStyles={customStyles}
//                 />
//
//         )
//     }
// }

// TRIAL CODE FROM CODESANDBOX

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             // data: makeData()
//         };
//
//         this.tableScrollTop = 0;
//     }
//     render() {
//         const { data } = this.state;
//         return (
//             <div>
//                 <ReactTable
//                     data={data}
//                     pageSizeOptions={[20, 30, 50, 100, 200, 500]}
//                     columns={[
//                         {
//                             Header: "Name",
//                             columns: [
//                                 {
//                                     Header: "First Name",
//                                     accessor: "firstName",
//                                     width: 200
//                                 },
//                                 {
//                                     Header: "Last Name",
//                                     id: "lastName",
//                                     accessor: d => d.lastName,
//                                     width: 100,
//                                     className: "frozen",
//                                     headerClassName: "frozen"
//                                 }
//                             ]
//                         },
//                         {
//                             Header: "Info",
//                             columns: [
//                                 {
//                                     Header: "Age",
//                                     accessor: "age",
//                                     minWidth: 300
//                                 },
//                                 {
//                                     Header: "Visits",
//                                     accessor: "visits",
//                                     minWidth: 50
//                                 },
//                                 {
//                                     Header: "Status",
//                                     accessor: "status",
//                                     width: 150
//                                 }
//                             ]
//                         }
//                     ]}
//                     defaultPageSize={20}
//                     className="-striped -highlight"
//                     getTableProps={() => {
//                         return {
//                             onScroll: e => {
//                                 function $(s) {
//
//                                 }
//
//                                 if (this.tableScrollTop === e.target.scrollTop) {
//                                     let left = e.target.scrollLeft > 0 ? e.target.scrollLeft : 0;
//                                     $(".ReactTable .rt-tr .frozen").css({ left: left });
//                                 } else {
//                                     this.tableScrollTop = e.target.scrollTop;
//                                 }
//                             }
//                         };
//                     }}
//                 />
//                 <br />
//             </div>
//         );
//     }
// }
//
// export default App

