import React from 'react';

import * as Components from '../components';

export default {
  title: 'strings/Hello',
  component: Components.strings.GlobalWrapper,
  argTypes: {
    title: { control: 'text' },
  },
};

const Template = ({title}) => (
  <Components.strings.GlobalWrapper title={title}>
    <Components.strings.Hello>
      {title}
    </Components.strings.Hello>
  </Components.strings.GlobalWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hello',
};
