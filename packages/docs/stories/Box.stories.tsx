import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps } from '@diebraga/react'

export default {
  title: 'Layout/Button',
  component: Box,
  args: {
    children: <>test</>,
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
