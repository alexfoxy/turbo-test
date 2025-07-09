'use client'
import React from 'react'
import { store } from './store'
import { observer } from 'mobx-react-lite'

const Counter = () => {
  return <>
    <li>Count: {store.count}</li>

    <button onClick={() => {
      store.increment()
    }}>Click me</button>
  </>
}

export default observer(Counter)