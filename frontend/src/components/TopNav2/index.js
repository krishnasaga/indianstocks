import React from 'react';
import { Box,Grid,Button,Image,Text} from 'theme-ui';
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading,loginWithRedirect } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    return (
      isAuthenticated ? (
        <Grid columns={[2]} sx={{ alignItems: 'center'}}>
          <Text as={'span'}>{user.name.split(' ')[0]}</Text>
          <Image sx={{
              borderRadius: '50px',
              height: '50px',
              width: '50px'
          }} src={user.picture} alt={user.name} />
        </Grid>
      ) : <Button onClick={() => loginWithRedirect()}>Log In</Button>
    );
  };


export const TopNav2 = ({}) => {
    return <Box as={'nav'} bg={'white'} sx={{
        boxShadow: [0]
    }}>
        <Grid columns={['1fr 1fr 10fr 2fr']}>
          <Box>
          </Box>
          <Box>

          </Box>
           <Box>

           </Box>
           <Box p={2} sx={{
               display: ['none','block']
           }}>
               <Profile/>
           </Box>
        </Grid>
    </Box>
};

