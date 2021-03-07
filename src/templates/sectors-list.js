import React from 'react';
import { Box,Grid,Text } from 'theme-ui';
import { Link } from 'gatsby';
import { GraphLine } from '../components/GraphLine';

export default ({pageContext: { sectors }}) => <Grid columns={[1,2,4,7]} p={20} gap={40}>
  {
    sectors.map((data)=>{
      return <Link key={data.name} to={`/sectors/${data.name}`} >
        <Box
          bg={'background'}
          color={'primary'}
          p={20}
          sx={{
            textAlign: 'center',
            boxShadow: '0 3px 20px 0 rgb(0 77 165 / 7%)',
            height: 'auto',
            textDecoration: 'none',
            color: 'initial',
          }}
       >
          <Text as={'h4'}>{data.name.toUpperCase()}</Text>
          <Text py={40} as={'h4'}>{+445}</Text>
          <GraphLine/>
        </Box>
      </Link>;
    })
  }
</Grid>;
