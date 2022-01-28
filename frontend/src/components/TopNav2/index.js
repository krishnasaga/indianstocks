import React from 'react';
import { Box,Grid,Button} from 'theme-ui';


export const TopNav2 = ({}) => {
    return <Box as={'nav'} bg={'white'} sx={{
        boxShadow: [0]
    }}>
        <Grid columns={['1fr 1fr 10fr 1fr']}>
          <Box>
          </Box>
          <Box>

          </Box>
           <Box>

           </Box>
           <Box p={2} >
               <Button> Login </Button>
           </Box>
        </Grid>
    </Box>
};
