/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  args: {},
  decorators: [
    StoreDecorator({})
  ]
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Normal: Story = {
  args: {
    onSendComment: action('onSendComment')
  }
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
