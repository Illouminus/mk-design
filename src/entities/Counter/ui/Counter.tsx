import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'
import { type FC } from 'react'

interface CounterProps {
  className?: string
}

export const Counter: FC<CounterProps> = ({ className }: CounterProps) => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const increment = (): void => {
    dispatch(counterActions.increment())
  }
  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
      <div >
          <h1 data-testid="value-title">{counterValue}</h1>
          <Button data-testid="increment-button" onClick={increment}>Increment</Button>
          <Button data-testid="decrement-button" onClick={decrement}>Decrement</Button>
      </div>
  )
}
