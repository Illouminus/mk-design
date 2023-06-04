import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text

}

export default meta
type Story = StoryObj<typeof Text>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'TITLE',
    text: 'TEXT'
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'TITLE'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'TEXT'
  }
}

export const Dark: Story = {
  args: {
    title: 'TITLE',
    text: 'TEXT'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
  args: {
    title: 'TEXT',
    text: 'TEXT',
    theme: TextTheme.ERROR
  }
}
