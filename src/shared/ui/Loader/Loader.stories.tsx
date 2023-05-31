import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  args: {
    to: '/'
  }
}

export default meta
type Story = StoryObj<typeof Loader>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
