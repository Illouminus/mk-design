import { fireEvent, screen } from '@testing-library/react'
import { ComponentRender } from 'shared/config/tests/componentRender/componentRender'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
  test('Test render', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })
  test('Increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('increment-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
  test('Decrement', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
