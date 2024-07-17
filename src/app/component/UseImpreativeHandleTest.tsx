'use client'
import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";

const Child = forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    showMessage() {
      const date = new Date()
      const message = `Hello! It's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <div className={"child-use-imperative-handle"}>{message !== null ? <p>{message}</p> : null}</div>
})

Child.displayName = 'Child'

export default function UseImperativeHandleTest(){
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef}/>
    </div>
  )
}