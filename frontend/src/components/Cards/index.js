import React from 'react';
import {Box, Grid, Text, Card,Image} from 'theme-ui';

export const Cards = () => {
    return <Box
        as={'cards'}
        bg={'color4'}
        sx={{
            color: 'rgb(255, 255, 255)',
            fontSize: '0.9rem'
        }}>
        <Box>
            <Grid
                columns={[2, 4]}>
                <Card
                    sx={{
                        maxWidth: 256,
                    }}>
                    <Image src={''} />
                    <Text>Card text</Text>
                </Card>
                <Card
                    sx={{
                        maxWidth: 256,
                    }}>
                    <Image src={''} />
                    <Text>Card text</Text>
                </Card>
                <Card
                    sx={{
                        maxWidth: 256,
                    }}>
                    <Image src={''} />
                    <Text>Card text</Text>
                </Card>
                <Card
                    sx={{
                        maxWidth: 256,
                    }}>
                    <Image src={''} />
                    <Text>Card text</Text>
                </Card>
            </Grid>
        </Box>
    </Box>;
};
