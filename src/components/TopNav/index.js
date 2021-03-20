import React, {useState} from 'react';
import {Box, Grid, Text,Link} from 'theme-ui';
import {Portal} from "react-portal";
import OutsideClickHandler from 'react-outside-click-handler';



export const TopNav = () => {
  const [open,setOpen] = useState(false);
  const [dropdownComponent,setDropdownComponent] = useState('');

  const menuHandler = (event,componentName) => {
    setOpen(!open);
    setDropdownComponent(componentName)
    event.stopPropagation();
  };

  return <Box bg={'grey'} sx={{
    position: 'fixed',
    top: '0',
    zIndex: '99',
    width: '90%'
  }} >
    <Grid columns={['1fr 1fr 1fr 1fr 1fr 1fr 1fr']} >
      <Box p={25} sx={{
        gridAlignSelf: 'start'
      }}> <Link href={'/'} sx={{ textDecoration: 'none', color: 'black'}}>Invest </Link></Box>
      <Box p={25} >  </Box>
      <Menu onClick={(event) => menuHandler(event,'disruptions')}> Disruptions </Menu>
      <Menu onClick={(event) => menuHandler(event,'research')} > Research </Menu>
      <Menu onClick={(event) => menuHandler(event,'sectors')} > Sectors </Menu>
      <Menu onClick={(event) => menuHandler(event,'analytics')} > Analytics </Menu>
      <NavButton/>
    </Grid>
    { open ? <Dropdown component={dropdownComponent}/> : null }
    <OutsideClickHandler useCapture={true} onOutsideClick={()=>{
      setOpen(false );
    }}/>
  </Box>;
};


function NavButton({children,...remainingProps}){
  return  <Box {...remainingProps} p={25}  bg={'primary'} sx={{
    width: '100%',
    textAlign: 'center',
    gridAlignSelf: 'end',
    cursor: 'pointer'
  }}>

    Explore

  </Box>;
}

export const Menu = ({children,...remainingProps}) => {
  return  <Box {...remainingProps} >
    <Box
      p={20} color={'text2'} sx={{
      textAlign: 'center',
      gridAlignSelf: 'end',
      cursor: 'pointer'
    }}>

      {children}
    </Box>

  </Box>;
}

const dropdownComponents = {
  analytics: AnalyticsDropdown,
  disruptions: DisruptionsDropdown,
  research: ResearchDropdown,
  sectors: SectorsDropdown
};

function Dropdown({component}){
  const Component = dropdownComponents[component];
  return <Portal>
    <Box onClick={(event)=>{
      event.stopPropagation();
    }
    } bg={'pink'} p={20} bg={'white'}  sx={{
      position: 'fixed',
      left: '0',
      top: '74px',
      width: '90%'
    }}>
      <Component/>
    </Box></Portal>;
}

function AnalyticsDropdown(){
  return <Box  sx={{
    height: '200px'
  }} >
    <Text py={10}>Analytics</Text>
    <Grid columns={[4]}>
      <Box sx={{ borderRight: '1px solid grey'}}>
        <Text> Electric two wheeler penetration </Text>
        <Text> Electric Cars penetration </Text>
        <Text> Battery ecosystems </Text>
        <Text> Materials </Text>
      </Box>
      <Box>
        <Text> Telecom performance </Text>
        <Text> 5G ready </Text>
      </Box>
      <Box>
        <Text> Information Technology </Text>
        <Text> Internet of things </Text>
      </Box>
      <Box>
        <Text> Bioinformatics usage </Text>
        <Text> Bioinformatics usage  </Text>
      </Box>
    </Grid>
  </Box>
}

function DisruptionsDropdown(){
  return <Box  sx={{
    height: '200px'
  }} >
    Disruptions
  </Box>
}

function ResearchDropdown(){
  return <Box  sx={{
    height: '200px'
  }} >
    Research
  </Box>
}

function SectorsDropdown(){
  return <Box sx={{
    height: '200px'
  }} >
    Sectors
  </Box>
}
