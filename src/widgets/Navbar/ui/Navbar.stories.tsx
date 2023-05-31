import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navbar> = {
  title: 'widget/Navbar',
  component: Navbar
}

export default meta
type Story = StoryObj<typeof Navbar>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
