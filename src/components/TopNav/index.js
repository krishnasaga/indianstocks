import React, {useState} from 'react';
import {Box, Grid, Text,Link} from 'theme-ui';
import {Portal} from "react-portal";
import OutsideClickHandler from 'react-outside-click-handler';

export const TopNav = () => {
  const [open,setOpen] = useState(false);
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
      <Menu onClick={(event) => {
        setOpen(!open);
        event.stopPropagation();
      }} > Disruptions </Menu>
      <Menu onClick={(event) => {
        setOpen(!open);
        event.stopPropagation();
      }} > Research </Menu>
      <Menu onClick={(event) => {
        setOpen(!open);
        event.stopPropagation();
      }} > Sectors </Menu>
      <Menu onClick={(event) => {
        setOpen(!open);
        event.stopPropagation();
      }} > Analysis </Menu>
      <NavButton/>
    </Grid>
    { open ? <Dropdown/> : null }
    <OutsideClickHandler useCapture={true} onOutsideClick={()=>{
      setOpen(false );
    }}/>
  </Box>;
};

function NavButton({children,...remainingProps}){
  return  <Box {...remainingProps} p={25} bg={'primary'} sx={{
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


function Dropdown(){
  return <Portal>
    <Box bg={'pink'} p={20} sx={{
      position: 'fixed',
      left: '0',
      top: '74px',
      width: '90%'
    }}>
      <Grid>
        { [1,2,3,4,5,6,7,8,9,10].map(()=><Box>
          <Text> some text</Text>
        </Box>)}
      </Grid>
    </Box></Portal>;
}
