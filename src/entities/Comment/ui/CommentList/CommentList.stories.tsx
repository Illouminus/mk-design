/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof CommentList> = {
  title: 'shared/CommentList',
  component: CommentList,
  args: {}
}

export default meta
type Story = StoryObj<typeof CommentList>

export const Normal: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
