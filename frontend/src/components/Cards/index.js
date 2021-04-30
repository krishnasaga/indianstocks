import React from 'react';
import { Box, Grid, Text, Button } from 'theme-ui';
import { BsFillGearFill } from 'react-icons/bs'
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

const CardWrapper = ({ children }) => {
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
            // opacity: '0',

        }}
        >
            {children}
        </Box>
    );
};

const CardFigure = ({ children }) => {
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

const CardText = ({ children }) => {
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

const CardOverlay = ({ children }) => {
    return (
        <Box px={'20px'} py={'30px'} sx={{
            maxWidth: ['200', '600'],
            maxHeight: ['300', '300', '350'],
            border: '1px solid black',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyItems: 'start',
            color: 'color4',
            textAlign: 'left',
            opacity: '1',
            // transform: 'translate(0,-100%)',


        }}
        >
            {children}
        </Box>
    );
};

const CardOverlayHeading = ({ children }) => {
    return (
        <Text pb={1} sx={{
        fontWeight: 'bold',
            color: 'color5',
    }}
        >
            {children}
        </Text>
    );
};

const CardOverlayText = ({ children }) => {
    return (
        <Text sx={{
            color: 'color4',
            fontSize: '1.05rem',
        }}
        >
            {children}
        </Text>
    );
};

const CardOverlayButton = ({ children }) => {
    return (

        <Button sx={{
            backgroundColor: 'white',
            color: 'color5',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            fontWeight: 'bold',
            fontSize: '1rem',
        }}> {children}
            <HiArrowRight size={25} style={{
             transform: 'translate(0,10%)',
             paddingLeft: '10px'}}/>
        </Button>
    );
};




export const Cards = () => {
    return <Box
        as={'cards'}
        sx={{
            fontSize: '0.9rem',
            paddingBottom: '50px',
        }}>
        <Box >
            <Grid
                columns={[2, 4]} sx={{
                justifyItems: 'center',
            }}>


                    <CardWrapper sx={{
                        position: 'relative',
                        opacity: '1',
                    }}>
                    <CardFigure>
                        <BsFillGearFill size={'100%'} />
                    </CardFigure>
                    <CardText>ARK Disruptive Innovation</CardText>
                </CardWrapper>

                    <CardOverlay>
                        <CardOverlayHeading>ARK Disruptive Innovation</CardOverlayHeading>
                        <CardOverlayText>Aims to provide broad exposure to disruptive innovation.
                            ARK believes innovations centered around artificial intelligence,
                            robotics, energy storage, DNA sequencing, and blockchain technology
                            will change the way the world works and deliver outsized growth as industries transform.
                        </CardOverlayText>
                        <CardOverlayButton>
                            See more
                        </CardOverlayButton>
                    </CardOverlay>



            <CardWrapper>
                <CardFigure>
                    <BsFillGearFill size={'100%'} />
                </CardFigure>
              <CardText>Autonomous Tech & Robotics</CardText>
            </CardWrapper>
            <CardWrapper>
                <CardFigure>
                    <BsFillGearFill size={'100%'} />
                </CardFigure>
              <CardText>Genomic Revolution</CardText>
            </CardWrapper>
            <CardWrapper>
                <CardFigure>
                    <BsFillGearFill size={'100%'} />
                </CardFigure>
              <CardText>Next Generation Internet</CardText>
            </CardWrapper>
            </Grid>
        </Box>
    </Box>;
};
