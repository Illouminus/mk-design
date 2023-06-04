import type { Meta, StoryObj } from '@storybook/react'

import { Button, SizeButton, ThemeButton } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button

}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Text'
  }
}
export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR
  }
}
export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE
  }
}
export const OutlineSizeL: Story = {
  args: {
    children: 'OutlineSizeL',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L
  }
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'OutlineSizeXL',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL
  }
}
export const Background: Story = {
  args: {
    children: 'Background',
    theme: ThemeButton.BACKGROUND
  }
}

export const InvertedBackground: Story = {
  args: {
    children: 'InvertedBackground',
    theme: ThemeButton.BACKGROUND_INVERTED
  }
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true
  }
}

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L
  }
}
export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL
  }
}

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    disabled: true
  }
}
