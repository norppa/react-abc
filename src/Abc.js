import React from 'react'

import { space } from './constants'
import { note } from './img/Images'
import Staff from './staff/Staff'

import './Abc.css'

class Abc extends React.Component {
    render() {
        // centerline y coordinate
        const width = 60
        const height = 30

        return (
            <svg
                className="Abc"
                width={width * 20}
                height={height * 20}
                viewBox={`0 0 ${width * space} ${height * space}`}>
            <Staff x={0} y={0} w={60} />
                <Staff x={0} y={10} w={60} />
                    <Staff x={0} y={20} w={60} />

                {/*
                {note(
                    { x: 14, y: c },
                    { type: 'quarter', acc: 'sharp', stem: 'up' }
                )}
                {note({ x: 16, y: c }, { type: 'quarter', stem: 'down' })}
                {note({ x: 18, y: c }, { type: 'half', stem: 'down' })}
                {note({ x: 10, y: c }, { type: 'half', stem: 'up' })}
                {note({ x: 12, y: c + 0.5 }, { type: 'whole' })}
                {note({ x: 20, y: c + 0.5 }, { type: '8th', stem: 'up' })}
                {note({ x: 22, y: c + 0.5 }, { type: '8th', stem: 'down' })}
        */}
            </svg>
        )
    }
}

export default Abc
