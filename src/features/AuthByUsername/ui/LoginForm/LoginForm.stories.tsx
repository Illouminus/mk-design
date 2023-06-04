import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: '123' }
    })
  ]
}

export default meta
type Story = StoryObj<typeof LoginForm>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}

export const withError: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'ERROR' }
  })]
}

export const isLoading: Story = {
  decorators: [StoreDecorator({
    loginForm: { isLoading: true }
  })]
}
