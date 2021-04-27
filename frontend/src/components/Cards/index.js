import React from 'react';
import { Box, Grid, Text, Button } from 'theme-ui';
import { BsFillGearFill } from 'react-icons/bs'
import {HiArrowRight} from "react-icons/hi";

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
        <Box
            ml={10} sx={{
            maxWidth: ['200', '600'],
            height: ['300', '300', '350'],
            border: '1px solid black',
            backgroundColor: 'white',
            display: 'grid',
            gridAutoFlow: 'row',
            gridTemplateRows: ['20 400 180'],
            alignItems: 'center',
            justifyItems: 'start',
            color: 'color4',
            textAlign: 'left',
            paddingLeft: '10px',
            // opacity: '0',
            // transform: 'translate(-100%,0)',
        }}
        >
            {children}
        </Box>
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
            <CardWrapper>
                <CardFigure>
                    <BsFillGearFill size={'100%'} />
                </CardFigure>
              <CardText>ARK Disruptive Innovation</CardText>
            </CardWrapper>

            <CardOverlay sx={{
                display: 'flex',
            }}>
                <Text pb={'5px'} sx={{
                    fontWeight: 'bold',
                    color: 'color5',
                }}>ARK Disruptive Innovation</Text>
                <Text sx={{
                    color: 'color4',
                    fontSize: '1.1rem',
                }}>Aims to provide broad exposure to disruptive innovation.
                    ARK believes innovations centered around artificial intelligence,
                    robotics, energy storage, DNA sequencing, and blockchain technology
                    will change the way the world works and deliver outsized growth as industries transform.
                </Text>
                <Button sx={{

                }}>See more <HiArrowRight/> </Button>

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
