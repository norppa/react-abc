import React from 'react'
import { note } from './img/Images'
import Staff from './Staff'

import {space} from './constants'
import './Abc.css'

class Abc extends React.Component {



    render() {
        // centerline y coordinate
        const c = 10

        return (
            <svg width="1200" height="600" className="Abc">
                <Staff coord={{ x: 0, y: 10, w: 60}} />
                {note({ x: 4, y: c}, 'quarter', 'up')}
                {note({ x: 6, y: c}, 'quarter', 'down')}
                {note({ x: 8, y: c}, 'half', 'down')}
                {note({ x: 10, y: c}, 'half', 'up')}
                {note({ x: 12, y: c + 0.5}, 'whole')}
            </svg>
        )
    }
}

export default Abc
