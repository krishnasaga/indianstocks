import React from 'react';

import {Paper} from '../Paper';
import {withThemeProvider} from 'storybook-addon-theme-ui'

export default {
  title: 'Paper',
  component: Paper,
  decorators: [withThemeProvider],
  argTypes: {
    bg: {control: 'color'},
    variant: {
      control: 'text'
    }
  },
};

const Template = (args) => <Paper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: '50%',
  label: 'Number',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Number',
  children: '200%'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Number',
  children: '100%'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Number',
  children: '-10%'
};
