import React from 'react';
import { Box, Grid, Text } from 'theme-ui';
import { BsFillGearFill } from 'react-icons/bs'

const CardWrapper = ({ children }) => {
    return (
        <Box
            ml={10} pb={50} sx={{
            maxWidth: ['200', '400'],
            height: ['300', '400'],
            border: '1px solid rgb(255, 255, 255)',
            display: 'grid',
            gridTemplateRows: ['230px 70px', '280px 120px'],
            gridAutoFlow: 'row',
            alignItems: 'end',
            justifyItems: 'center',
            color: 'color4',
            textAlign: 'center',
        }}
        >
            {children}
        </Box>
    );
};

const CardFigure = ({ children }) => {
    return (
        <Box px={['20px', '20px', '50px']} sx={{
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
