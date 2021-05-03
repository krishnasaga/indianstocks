import React from 'react';

import {Number} from '../Number';
import {withThemeProvider} from 'storybook-addon-theme-ui'

export default {
  title: 'Number',
  component: Number,
  decorators: [withThemeProvider],
  argTypes: {
    bg: {control: 'color'},
    variant: {
      control: 'text'
    }
  },
};

const Template = (args) => <Number {...args} />;

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
