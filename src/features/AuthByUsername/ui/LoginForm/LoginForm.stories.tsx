import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm

}

export default meta
type Story = StoryObj<typeof LoginForm>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
