import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button

}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Text'
  }
}
export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR
  }
}
export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE
  }
}
export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
