import React, {useState} from "react";
import {Box, Button, Slider} from "theme-ui";
import { Link } from "@reach/router"

export const Filters = ({sectorName}) => {
  return <Box>
    <FilterGroup name={"Market Cap"}>
      <MarketCap/>
    </FilterGroup>
    <FilterGroup name={"Focus Areas"}>
      <Focus/>
    </FilterGroup>
    <FilterGroup name={"Company Type"}>
      <CompanyType sectorName={sectorName}/>
    </FilterGroup>
    <FilterGroup name={"Hello"}/>
    <FilterGroup name={"Hello"}/>
  </Box>
}

function FilterGroup({children, ...remainingProps}) {
  const [open, setOpen] = useState(false);

  return <Box><Box {...remainingProps}
                   p={2}
                   sx={{
                     color: 'red',
                     borderBottom: '1px solid #e5e5e5',
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


function MarketCap() {
  return <Box>
    <Slider/>
    <Button>Small</Button>
    <Button>Mid</Button>
    <Button>Large</Button>
  </Box>
}

function Focus() {
  return <Box>
    List of focus areas
  </Box>
}

function CompanyType({sectorName}) {
  return <Box>
    <Link  to={`/sectors/${sectorName}/all-publicly-listed-companies-in-${sectorName}-sector-india`}>
      Public
    </Link>
    <Link  to={`/sectors/${sectorName}/all-private-limited-companies-in-${sectorName}-sector-india`}>
      Private
    </Link>
    <Link  to={`/all-companies-in-${sectorName}-india`}>
      All
    </Link>
    <Link  to={`/all-startup-companies-in-${sectorName}-india`}>
      Startup
    </Link>
  </Box>
}
