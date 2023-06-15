import type { Meta, StoryObj } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import avatar from 'shared/assets/tests/unnamed.jpg'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          first: 'Edouard',
          lastname: 'Baillot',
          avatar,
          age: 26,
          currency: Currency.EUR,
          country: Country.France,
          city: 'Paris',
          username: 'admin'
        }
      }
    })
  ]
}

export default meta
type Story = StoryObj<typeof ProfilePage>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
  }
}
