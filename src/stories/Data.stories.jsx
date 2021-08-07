import React from 'react';

import { Data } from './Data';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Data',
  component: Data,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Data {...args} />;


export const FirstView = Template.bind({});
FirstView.args = {
  /*👇 The args you need here will depend on your component */
  primary: true,
  label: 'Main Data View',
};


export const SecondView = Template.bind({});
SecondView.args = {
  primary: true,
  label: 'Primary Data',
};