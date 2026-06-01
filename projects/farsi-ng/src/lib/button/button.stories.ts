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
          [label]="label" >
          
        </ui-button>
      `
    }),
    args: {
      variant: 'primary',
      size: 'md',
      appearance: 'solid',
      disabled: false,
      loading: false,
      label:'save'
    }
  };

export const Danger: Story = {
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
            حذف
          </ui-button>
        `
      }),
      args: {
        variant: 'danger',
        size: 'md',
        appearance: 'solid',
        disabled: false,
        loading: false,
      }
};

export const warning: Story = {
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
            هشدار
          </ui-button>
        `
      }),
      args: {
        variant: 'warning',
        size: 'md',
        appearance: 'outline',
        disabled: false,
        loading: false,
      }
};

export const secondary: Story = {
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
           ویرایش
          </ui-button>
        `
      }),
      args: {
        variant: 'secondary',
        size: 'md',
        appearance: 'link',
        disabled: true,
        loading: false,
      }
};


export const success: Story = {
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
            تایید
          </ui-button>
        `
      }),
      args: {
        variant: 'success',
        size: 'md',
        appearance: 'solid',
        disabled: false,
        loading: false,
      }
};


export const info: Story = {
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
            اطلاعات
          </ui-button>
        `
      }),
      args: {
        variant: 'info',
        size: 'md',
        appearance: "solid",
        disabled: false,
        loading: true,
      }
};
