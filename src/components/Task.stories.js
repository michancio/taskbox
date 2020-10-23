import React from 'react';
import Task from './Task';
import { withDesign } from 'storybook-addon-designs'

export default {
  component: Task,
  title: 'Task',
  decorators: [withDesign]
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2019, 0, 1, 9, 0),
  },
};

Default.parameters = {
   design: {
     type: 'figma',
     url: 'https://www.figma.com/file/BPI2wNqvQI59Wr7hsmVZ8X/Figma-API?node-id=11%3A3',
   },
 };

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
    title: 'Test Task (pinned)'
  },
};

Pinned.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/BPI2wNqvQI59Wr7hsmVZ8X/Figma-API?node-id=11%3A24',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
    title: 'Test Task (archived)'
  },
};