import React from 'react'

import { space } from '../constants'
import * as clefs from '../img/Clefs'
import * as accidentals from '../img/Accidentals'
import { numbers } from '../img/Numbers'

export const lines = (center, width) => {
    return [-2, -1, 0, 1, 2].map(n => {
        return (
            <line
                key={`staffline(${center}${n})`}
                x1={0}
                y1={(center + n) * space}
                x2={width * space}
                y2={(center + n) * space}
                stroke="black"
                strokeWidth="3"
            />
        )
    })
}

const clef = (type, caret) => {
    if (type === 'treble') {
        const output = clefs.treble(caret)
        caret.x = caret.x + output.props.width / space + 0.5
        return output
    }
    console.log('invalid clef type', type)
    return null
}

const timeSignature = (type, caret) => {
    const values = type.split('/')
    if (values.length !== 2) {
        console.log('invalid time signature', type)
    }

    const x = caret.x * space
    const y = (caret.center - 2) * space

    const higher = numbers[values[0]](0, 0)
    const lower = numbers[values[1]](0, 2 * space)

    caret.x = caret.x + higher.props.width / space + 0.5

    return (
        <svg x={x} y={y} width={160} height={400} viewBox="0 0 160 400">
            {higher}
            {lower}
        </svg>
    )
}

const keySignature = (value, caret) => {
    if (value < -7 || value > 7) {
        console.log('Images.signature: invalid value', value)
        return undefined
    }

    let w = 0
    const { placements, accidental } =
        value > 0
            ? {
                  placements: [2, 0.5, 2.5, 1, -0.5, 1.5, 0].slice(0, value),
                  accidental: accidentals.sharp
              }
            : {
                  placements: [0, 1.5, -0.5, 1, -1, 0.5, -1.5].slice(0, -value),
                  accidental: accidentals.flat
              }
    return placements.map((m, i) => {
        const acc = accidental(caret.x + w, caret.center - m)
        w = w + acc.props.width / space
        return acc
    })
}

const Staff = ({ x, y, w }) => {
    const h = 8
    const caret = { x, center: h / 2 }

    return (
        <svg
            x={x * space}
            y={y * space}
            width={w * space}
            height={h * space}
            viewBox={`0 0 ${w * space} ${h * space}`}>
            {lines(h / 2, w)}
            {clef('treble', caret)}
            {timeSignature('3/4', caret)}
            {keySignature(-5, caret)}
        </svg>
    )
}
export default Staff
