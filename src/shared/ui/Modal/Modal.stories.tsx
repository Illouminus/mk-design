import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal

}

export default meta
type Story = StoryObj<typeof Modal>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Text',
    isOpen: true
  }
}

export const Dark: Story = {
  args: {
    children: 'Text',
    isOpen: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
