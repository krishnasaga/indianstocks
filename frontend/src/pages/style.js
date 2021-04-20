import {Box, Grid, Text} from 'theme-ui';
import React from 'react';
import { TextArrow } from "../components/TextArrow";

export default () => {
  return <Box><Grid columns={[4]}><Box>
    <Text as={'h1'} variant={'bold2'}>
      Heading 1
    </Text>
    <Text as={'h2'} variant={'bold2'}>
      Heading 2
    </Text>
    <Text as={'h3'} variant={'bold2'}>
      Heading 3
    </Text>
    <Text as={'h4'} variant={'bold2'}>
      Heading 4
    </Text>
    <Text as={'h5'} variant={'bold2'}>
      Heading 5
    </Text>
    <Text as={'h6'} variant={'bold2'}>
      Heading 6
    </Text>
    <Text as={'p'} variant={'bold2'}>
      body text
    </Text>
    <Text variant={'bold2'}>
      Link
    </Text>
  </Box>
    <Box>
      <Text as={'h1'} variant={'bold2'}>
        Heading 1
      </Text>
      <Text as={'h2'} variant={'bold2'}>
        Heading 2
      </Text>
      <Text as={'h3'} variant={'bold2'}>
        Heading 3
      </Text>
      <Text as={'h4'} variant={'bold2'}>
        Heading 4
      </Text>
      <Text as={'h5'} variant={'bold2'}>
        Heading 5
      </Text>
      <Text as={'h6'} variant={'bold2'}>
        Heading 6
      </Text>
      <Text as={'p'} variant={'bold2'}>
        body text
      </Text>
      <Text variant={'bold2'}>
        Link
      </Text>
    </Box>
    <Box>
      <Text as={'h1'} variant={'bold2'}>
        Heading 1
      </Text>
      <Text as={'h2'} variant={'bold2'}>
        Heading 2
      </Text>
      <Text as={'h3'} variant={'bold2'}>
        Heading 3
      </Text>
      <Text as={'h4'} variant={'bold2'}>
        Heading 4
      </Text>
      <Text as={'h5'} variant={'bold2'}>
        Heading 5
      </Text>
      <Text as={'h6'} variant={'bold2'}>
        Heading 6
      </Text>
      <Text as={'p'} variant={'bold2'}>
        body text
      </Text>
      <Text variant={'bold2'}>
        Link
      </Text>
    </Box>
    <Box>
      <Text as={'h1'} variant={'bold2'}>
        Heading 1
      </Text>
      <Text as={'h2'} variant={'bold2'}>
        Heading 2
      </Text>
      <Text as={'h3'} variant={'bold2'}>
        Heading 3
      </Text>
      <Text as={'h4'} variant={'bold2'}>
        Heading 4
      </Text>
      <Text as={'h5'} variant={'bold2'}>
        Heading 5
      </Text>
      <Text as={'h6'} variant={'bold2'}>
        Heading 6
      </Text>
      <Text as={'p'} variant={'bold2'}>
        body text
      </Text>
      <Text variant={'bold2'}>
        Link
      </Text>
    </Box>
  </Grid>
  <Grid>
    <Box>
      <TextArrow>Hello</TextArrow>
    </Box>
  </Grid>
  </Box>;
}
