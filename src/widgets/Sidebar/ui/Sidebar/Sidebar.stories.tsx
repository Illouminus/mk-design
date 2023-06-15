import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar
}

export default meta
type Story = StoryObj<typeof Sidebar>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: {} }
    })
  ]
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: {} }
    })
  ]
}

export const LightNoAuth: Story = {
  decorators: [
    StoreDecorator({
      user: {}
    })
  ]
}
export const DarkNoAuth: Story = {
  decorators: [ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {}
    })
  ]
}
