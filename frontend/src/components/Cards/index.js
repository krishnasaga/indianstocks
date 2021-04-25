import React from 'react';
import { Box, Grid, Text } from 'theme-ui';
import { BsFillGearFill } from 'react-icons/bs'

const CardWrapper = ({ children }) => {
    return (
        <Box
            ml={10} pb={50} sx={{
            maxWidth: 300,
            height: 400,
            border: '1px solid rgb(255, 255, 255)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: 'color4',
            textAlign: 'center',
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
            fontWeight: 'bold',
            paddingX: '60px'
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
                columns={[1, 2, 4]} sx={{
                // justifyItems: 'center',
            }}>
            <CardWrapper>
              <BsFillGearFill size={100} />
              <CardText>ARK Disruptive Innovation</CardText>
            </CardWrapper>
            <CardWrapper>
              <BsFillGearFill size={100} />
              <CardText>Autonomous Tech & Robotics</CardText>
            </CardWrapper>
            <CardWrapper>
              <BsFillGearFill size={100} />
              <CardText>Genomic Revolution</CardText>
            </CardWrapper>
            <CardWrapper>
              <BsFillGearFill size={100} />
              <CardText>Next Generation Internet</CardText>
            </CardWrapper>
            </Grid>
        </Box>
    </Box>;
};
