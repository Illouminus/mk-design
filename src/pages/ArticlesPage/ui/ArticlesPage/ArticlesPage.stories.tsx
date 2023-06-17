import type { Meta, StoryObj } from '@storybook/react'

import ArticlesPage from './ArticlesPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  args: {}
}

export default meta
type Story = StoryObj<typeof ArticlesPage>

export const Normal: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
