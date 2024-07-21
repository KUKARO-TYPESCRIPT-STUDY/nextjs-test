'use client'
import {memo, useCallback, useState} from "react";

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = ({onClick}: ButtonProps) => {
  console.log('DecrementButton render')
  return (
    <button onClick={onClick}>Decrement</button>
  )
}

const IncrementButton = memo<ButtonProps>(({onClick}: ButtonProps) => {
  console.log('IncrementButton render')
  return (
    <button onClick={onClick}>Increment</button>
  )
})

IncrementButton.displayName = 'IncrementButton'

const DoubleButton = memo<ButtonProps>(({onClick}: ButtonProps) => {
  console.log('DoubleButton render')
  return (
    <button onClick={onClick}>Double</button>
  )
})

DoubleButton.displayName = 'DoubleButton'


export default function UseCallbackTest() {
  const [count, setCount] = useState(1)

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  const double = useCallback(() => {
    setCount(c => c * 2)
  }, [])


  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement}/>
      <IncrementButton onClick={increment}/>
      <DoubleButton onClick={double}/>
    </div>
  )
}