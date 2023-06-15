import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import avatar from 'shared/assets/tests/unnamed.jpg'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard
}

export default meta
type Story = StoryObj<typeof ProfileCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: {
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
}

export const isLoading: Story = {
  args: {
    isLoading: true
  }
}

export const withError: Story = {
  args: {
    error: 'ERROR'
  }
}
