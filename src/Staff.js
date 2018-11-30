import React from 'react'
import { trebleClef } from './img/Images'

const generateLines = (coord, space) => {
    return [-2, -1, 0, 1, 2].map(i => {
        const yCoord = coord.y + i * space
        return (
            <line
                key={i}
                x1={coord.x}
                y1={yCoord}
                x2={coord.x + coord.w}
                y2={yCoord}
                stroke="black"
            />
        )
    })
}

const Staff = ({ coord, space }) => {
    const lines = generateLines(coord, space)
    console.log(trebleClef)
    return <svg>
    {lines}
    {trebleClef(coord, space)}
    </svg>
}
export default Staff
