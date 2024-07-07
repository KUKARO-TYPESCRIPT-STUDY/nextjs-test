'use client'
import {useState} from "react";

type UseStateTestProps = {
  initialValue: number
}

export default function UseStateTest({initialValue}: UseStateTestProps) {
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>value: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}