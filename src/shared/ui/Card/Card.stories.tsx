/* eslint max-len:0 */
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text } from 'shared/ui/Text/Text'

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  args: {
    children: <Text title={'TEXT'} text={'text'} />
  }
}

export default meta
type Story = StoryObj<typeof Card>

export const Normal: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
