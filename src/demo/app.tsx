import { useEffect, useState } from 'react'
import RandomCountApp from './random-count-up'
import Logo from './logo'

export default function App() {
  const [replay, setReplay] = useState(0)

  useEffect(() => {
    const replay = () => setReplay((r) => r + 1)
    document.addEventListener('click', replay)
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && e.shiftKey) replay()
    })
  })

  return (
    <div className="randomCountUpApp">
      <Logo />
      <RandomCountApp key={replay} />
    </div>
  )
}
