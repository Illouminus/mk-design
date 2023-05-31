import type { Meta, StoryObj } from '@storybook/react'

import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage
}

export default meta
type Story = StoryObj<typeof AboutPage>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
