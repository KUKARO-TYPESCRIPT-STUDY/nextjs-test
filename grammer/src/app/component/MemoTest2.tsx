'use client'
import {memo, useState} from "react";

type FizzProps = {
  isFizz: boolean
}

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

function Fizz({isFizz}: FizzProps) {
  console.log(`Fizz render. isFizz=${isFizz}`)
  return (
    <div>
      {isFizz ? 'Fizz' : ''}
    </div>
  )

}


const Buzz = memo<BuzzProps>(({isBuzz, onClick}: BuzzProps) => {
  console.log(`Buzz render. isBuzz=${isBuzz}`)
  return (
    <div onClick={onClick}>
      {isBuzz ? 'Buzz' : ''}
    </div>
  )
})

Buzz.displayName = 'Buzz'

export default function MemoTest() {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  const onBuzzClick = () => {
    console.log(`Buzz clicked. count=${count}`)
  }
  console.log(`MemoTest render. count=${count}`)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase 1</button>
      <p>Count: {count}</p>
      <Fizz isFizz={isFizz}/>
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
    </div>
  )
}