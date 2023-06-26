/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  args: {
    comments: [
      {
        id: '1',
        user: { id: '1', username: 'user1' },
        text: 'comment1'
      },
      {
        id: '2',
        user: { id: '2', username: 'user2' },
        text: 'comment2'
      }
    ]
  }
}

export default meta
type Story = StoryObj<typeof CommentList>

export const Normal: Story = {
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true
  }
}
