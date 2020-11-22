import React from 'react'
import { useTwix, folder, button, Twix } from 'use-twix'

function Comp1() {
  const t = useTwix(
    { first: { value: 0 } },
    { color: '#fff', number: { value: 1000, min: 3 } },
    { colorObj: { r: 1, g: 2, b: 3 } },
    folder(
      'folder',
      { boolean: false, spring: { tension: 4, friction: 30 } },
      folder(
        { name: 'sub folder', collapsed: false },
        { number: 5 },
        button('Button 1', () => console.log('hello')),
        folder('sub3', { pos: { x: 3, y: 4 } })
      )
    )
  )
  return (
    <div>
      <h1>Comp1</h1>
      <pre>{JSON.stringify(t, null, 2)}</pre>
    </div>
  )
}

function Comp2() {
  const t = useTwix(
    'folder.sub folder',
    { number: 4 },
    { string: 'some string' },
    button('Button 2', () => console.log('hello2'))
  )
  return (
    <div>
      <h1>Comp2</h1>
      <pre>{JSON.stringify(t, null, 2)}</pre>
    </div>
  )
}

function Comp3() {
  const t = useTwix('folder3', { comp3: { s: 'heya' } })

  return (
    <div>
      <h1>Comp3</h1>
      <pre>{JSON.stringify(t, null, 2)}</pre>
    </div>
  )
}

export default function App() {
  const [c2, setC2] = React.useState(false)
  const [c1, setC1] = React.useState(false)
  return (
    <div>
      <Twix />
      <Comp1 />
      {c2 && <Comp2 />}
      {c1 && <Comp1 />}
      {/* <Comp3 /> */}
      <button onClick={() => setC2(t => !t)}>{c2 ? 'Hide' : 'Show'} Comp2</button>
      <button onClick={() => setC1(t => !t)}>{c1 ? 'Hide' : 'Show'} Last Comp1</button>
    </div>
  )
}
