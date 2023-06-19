/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof CommentCard> = {
  title: 'shared/CommentCard',
  component: CommentCard,
  args: {}
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const Normal: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
