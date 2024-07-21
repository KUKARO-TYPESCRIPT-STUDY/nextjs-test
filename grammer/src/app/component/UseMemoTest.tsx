'use client'
import React, {useMemo, useState} from "react";

export default function UseMemoTest() {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setItems((prevItems) => [...prevItems, text])
    setText('')
  }


  const numberOfCharacters1 = (() => {
    console.log('numberOfCharacters1')
    return items.reduce((acc, item) => acc + item.length, 0)
  })()

  const numberOfCharacters2 = useMemo(() => {
    console.log('numberOfCharacters2')
    return items.reduce((acc, item) => acc + item.length, 0)
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput}/>
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (<p key={index}>{item}</p>))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}