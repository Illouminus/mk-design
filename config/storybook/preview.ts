import type { Preview } from '@storybook/react'
import { styleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    RouteDecorator,
    styleDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
