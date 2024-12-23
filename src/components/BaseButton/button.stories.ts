import type { Meta, StoryObj } from '@storybook/vue3';

import BaseButton from './index.vue';

const meta: Meta<typeof BaseButton> = {
  title: 'UI Components/Base Button',
  component: BaseButton,
  tags: ['autodocs'],
  parameters: {
    source: {type: "code"}
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ["filled", "outline", "text", "link", "rounded"] },
  },
  args: {
    // primary: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Filled: Story = {
  args: {
    label: 'Clique aqui',
    variant: "filled"
  },
};

export const Outline: Story = {
  args: {
    label: 'Clique aqui',
    variant: "outline"
  },
};

export const Text: Story = {
  args: {
    label: 'Clique aqui',
    variant: "text"
  },
};

export const Link: Story = {
  args: {
    label: 'Clique aqui',
    variant: "link"
  },
};

export const Rounded: Story = {
  args: {
    label: 'X',
    variant: "rounded"
  },
};