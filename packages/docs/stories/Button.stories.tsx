import type { StoryObj, Meta } from '@storybook/react'

import { Button } from '../../react/src'
import type { ButtonProps } from '../../react/src'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const SM: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const LG: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}
