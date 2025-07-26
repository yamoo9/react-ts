import Logo from './logo'
import Output from './output'

interface Props {
  count: number
  targetCount: number
}

export default function App({ count, targetCount }: Props) {
  return (
    <div className="randomCountUpApp">
      <Logo />
      <Output count={count} targetCount={targetCount} />
    </div>
  )
}
