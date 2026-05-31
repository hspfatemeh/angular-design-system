import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<Button>;


export const Primary: Story = {
    render: (args) => ({
      props: args,
      template: `
        <ui-button
          [variant]="variant"
          [size]="size"
          [appearance]="appearance"
          [disabled]="disabled"
          [loading]="loading"
         >
          Save
        </ui-button>
      `
    }),
    args: {
      variant: 'primary',
      size: 'md',
      appearance: 'solid',
      disabled: false,
      loading: false,
    }
  };

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};