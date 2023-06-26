/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
  args: {}
}

export default meta
type Story = StoryObj<typeof Page>

export const Normal: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
