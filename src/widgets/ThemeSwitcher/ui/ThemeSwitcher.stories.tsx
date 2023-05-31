import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
