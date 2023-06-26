/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleViewSelector } from './ArticleViewSelector'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'shared/ArticleViewSelector',
  component: ArticleViewSelector,
  args: {}
}

export default meta
type Story = StoryObj<typeof ArticleViewSelector>

export const Normal: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
