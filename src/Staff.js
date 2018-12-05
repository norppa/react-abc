import React from 'react'

import { space } from './constants'
import { trebleClef } from './img/Images'


const generateLines = ({x, y, w}) => {
    const centerLine = y * space
    const x1 = x
    const x2 = x + w * space
    return [-2, -1, 0, 1, 2].map(i => {
        const y = centerLine + i * space
        return (
            <line
                key={i}
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="black"
            />
        )
    })
}

const Staff = ({coord}) => {
    return (
        <svg>
            {generateLines(coord)}
            {trebleClef(coord)}
        </svg>
    )
}
export default Staff
