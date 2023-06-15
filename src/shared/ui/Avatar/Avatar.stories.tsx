import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import avatarImg from '../../assets/tests/unnamed.jpg'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar
}

export default meta
type Story = StoryObj<typeof Avatar>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: 150,
    src: avatarImg
  }
}

export const Small: Story = {
  args: {
    size: 50,
    src: avatarImg
  }
}
