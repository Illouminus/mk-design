/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof CommentCard> = {
  title: 'entities/CommentCard',
  component: CommentCard,
  args: {
    comment:
      {
        id: '1',
        user: { id: '1', username: 'user1' },
        text: 'comment1'
      }
  }
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const Normal: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}
