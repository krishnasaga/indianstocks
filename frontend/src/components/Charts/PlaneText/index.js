import React from 'react';
import { Box,Text } from 'theme-ui';

const PlaneText = ({options, series}) => {

    const { titleProps,textProps } = options;

    return <Box>
        <Text as={'h1'} {...titleProps} />
        <Text as={'p'} {...textProps} />
    </Box>
};

export default PlaneText;
