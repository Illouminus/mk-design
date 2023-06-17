import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  args: {}
}

export default meta
type Story = StoryObj<typeof Code>

export const Normal: Story = {
  args: {
    text: 'import type { Meta, StoryObj } from \'@storybook/react\'\n' +
        '\n' +
        'import { Code } from \'./Code\'\n' +
        'import { ThemeDecorator }' +
        ' from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\'\n' +
        'import { Theme } from \'app/providers/ThemeProvider\'\n' +
        '\n' +
        'const meta: Meta<typeof Code> = {\n' +
        '  title: \'shared/Code\',\n' +
        '  component: Code,\n' +
        '  args: {}\n' +
        '}\n' +
        '\n' +
        'export default meta\n' +
        'type Story = StoryObj<typeof Code>'
  }
}
export const Dark: Story = {
  args: {
    text: 'import type { Meta, StoryObj } from \'@storybook/react\'\n' +
        '\n' +
        'import { Code } from \'./Code\'\n' +
        'import { ThemeDecorator }' +
        ' from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\'\n' +
        'import { Theme } from \'app/providers/ThemeProvider\'\n' +
        '\n' +
        'const meta: Meta<typeof Code> = {\n' +
        '  title: \'shared/Code\',\n' +
        '  component: Code,\n' +
        '  args: {}\n' +
        '}\n' +
        '\n' +
        'export default meta\n' +
        'type Story = StoryObj<typeof Code>'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
