interface Props {
  count: number
  targetCount: number
}

export default function Output({ count, targetCount }: Props) {
  const isCompleted = count >= targetCount

  return (
    <output className={`output ${isCompleted ? '' : 'is-animate'}`.trim()}>
      {count}
    </output>
  )
}
