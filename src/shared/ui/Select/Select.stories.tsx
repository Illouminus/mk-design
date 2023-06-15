import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select
}

export default meta
type Story = StoryObj<typeof Select>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Label',
    options: [
      { value: '123', content: 'first' },
      { value: '456', content: 'second' },
      { value: '789', content: 'threet' }
    ]
  }
}
