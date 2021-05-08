import React from 'react';
import {Box, Button, Grid, Text} from 'theme-ui';
import {BsFillGearFill} from 'react-icons/bs'
import {HiArrowRight} from "react-icons/hi";

// LOOP CARDS IN AN ARRAY

// == TRY 1 ==
// const Cards=['Card 1', 'Card 2', 'Card 3', 'Card 4'];
// const CardsList=[];
// Cards.forEach((card,index)=>{
//     CardsList.push(<Box key={index}>{card}</Box>)
// })
// function App() {
//     return (
//         <Box>
//             {CardsList}
//         </Box>
//     );
// }

// export default App;

// == TRY 2 ==

// render(){
//     const Cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
//     const CardsList = [];
//     for (const [index,value] of Cards.entries()) {
//         CardsList.push(<Box key={index}>{value}</Box>)
//     }
// }
//
// return (
//     <Box>
//         {CardsList}
//     </Box>
// )

const CardContainer = ({children}) => {
  return (
    <Box sx={{
      position: 'relative',
      opacity: '1',
      width: '100%',
      ':hover': {
        '.overlay': {opacity: '1'},
      },
    }}
    >
      {children}
    </Box>
  );
};

const CardWrapper = ({children}) => {
  return (
    <Box
      ml={10} pb={50} sx={{
      maxWidth: ['200', '600'],
      height: ['300', '300', '350'],
      border: '1px solid rgb(255, 255, 255)',
      display: 'grid',
      gridTemplateRows: ['180px 70px', '230px 120px'],
      gridAutoFlow: 'row',
      alignItems: 'end',
      justifyItems: 'center',
      color: 'color4',
      textAlign: 'center',
      cursor: 'pointer',

      width: '100%',


    }}
    >
      {children}
    </Box>
  );
};

const CardFigure = ({children}) => {
  return (
    <Box px={['20px', '20px', '70px']} sx={{
      display: 'flex',
      alignItems: 'flex-end',
    }}
    >
      {children}
    </Box>
  );
};

const CardText = ({children}) => {
  return (
    <Text p={20} sx={{
      color: 'white',
      fontSize: ['1rem', '1rem', '1.3rem'],
      fontWeight: 'bold',
      paddingX: '60px',
      paddingTop: '30px',
      display: 'grid',
      gridAutoFlow: 'row',
      alignSelf: 'start',
    }}
    >
      {children}
    </Text>
  );
};

const CardOverlayWrapper = ({children}) => {
  return (
    <Box className={'overlay'} sx={{
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: ['10px'],
      right: '0',
      height: '100%',
      width: '100%',
      opacity: '0',
      transition: '.5s ease',
      border: ['2px solid white'],
    }}
    >
      {children}
    </Box>
  );
};

const CardOverlay = ({children}) => {
  return (
    <Box px={'20px'} py={'30px'} sx={{
      maxWidth: ['200', '600'],
      maxHeight: ['300', '300', '350'],

      backgroundColor: ['color5', 'white'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyItems: 'start',
      color: 'color4',
      textAlign: 'left',

      position: 'absolute',
      height: '100%',
      width: '100%',
    }}
    >
      {children}
    </Box>
  );
};

const CardOverlayHeading = ({children}) => {
  return (
    <Text pb={1} sx={{
      fontWeight: 'bold',
      color: 'color5',
      display: ['none', 'block']
    }}
    >
      {children}
    </Text>
  );
};

const CardOverlayText = ({children}) => {
  return (
    <Text sx={{
      color: 'color4',
      fontSize: '1.05rem',
      display: ['none', 'block']
    }}
    >
      {children}
    </Text>
  );
};

const CardOverlayButton = ({children, onClick}) => {
  return (

    <Button onClick={onClick} sx={{
      backgroundColor: ['color5', 'white'],
      color: ['white', 'color5'],
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      marginTop: 'auto',
      fontWeight: 'bold',
      fontSize: '1rem',
      position: 'absolute',
      bottom: ['6', '3'],
      left: ['5', '3'],
    }}
    > {children}
      <HiArrowRight size={25} style={{
        transform: 'translate(0,10%)',
        paddingLeft: '10px'
      }}/>
    </Button>
  );
};

export const Cards = ({items = []}) => {
  return <Box
    id={'explore'}
    as={'cards'}
    sx={{
      fontSize: '0.9rem',
      paddingBottom: '50px',
    }}>
    <Box>
      <Grid
        columns={[1, 2, 4, 4]} sx={{
        justifyItems: 'center',
      }}>

        {items.map(({name, displayName}, index) => {
          return <CardContainer key={index + 1} sx={{
            position: 'relative',
            opacity: '1',
          }}
          >
            <CardWrapper>
              <CardFigure>
                <BsFillGearFill size={'100%'}/>
              </CardFigure>
              <CardText>{displayName}</CardText>
            </CardWrapper>
            <CardOverlayWrapper>
              <CardOverlay>
                <CardOverlayHeading>
                  {displayName}
                </CardOverlayHeading>
                <CardOverlayText>Aims to provide broad exposure to disruptive innovation.
                  ARK believes innovations centered around artificial intelligence,
                  robotics, energy storage, DNA sequencing, and blockchain technology
                  will change the way the world works and deliver outsized growth as industries transform.
                </CardOverlayText>
                <CardOverlayButton onClick={() => {
                  window.location.href = `/sectors/${name}`
                }}>
                  See more
                </CardOverlayButton>
              </CardOverlay>
            </CardOverlayWrapper>
          </CardContainer>
        })}
      </Grid>
    </Box>
  </Box>;
};
