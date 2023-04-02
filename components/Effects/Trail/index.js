import React from 'react'
import { useTrail, a } from '@react-spring/web'

const Trail = ({ open, children, color }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div style={{ color }}>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          // eslint-disable-next-line react/no-array-index-key
          key={index.toString()}
          style={style}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default Trail
