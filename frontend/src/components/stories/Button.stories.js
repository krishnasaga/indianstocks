import React from 'react';

import {Button} from '../Button';
import {withThemeProvider} from 'storybook-addon-theme-ui'

export default {
  title: 'Button',
  component: Button,
  decorators: [withThemeProvider],
  argTypes: {
    bg: {control: 'color'},
    variant: {
      control: 'text'
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {

  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
