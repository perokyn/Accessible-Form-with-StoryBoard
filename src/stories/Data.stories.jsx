import React from 'react';

import { Data } from './Data';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Data',
  component: Data,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Data {...args} />;


export const FirstView = Template.bind({});
FirstView.args = {
  /*๐ The args you need here will depend on your component */
  primary: true,
  label: 'Main Data View',
};


export const SecondView = Template.bind({});
SecondView.args = {
  primary: true,
  label: 'Primary Data',
};