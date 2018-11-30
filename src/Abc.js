import React from 'react'
import Staff from './Staff'

class Abc extends React.Component {
    render() {
        const staffCoord = { x: 0, y: 50, w: 400 }
        return (
            <svg>
                <Staff coord={staffCoord} space={10} />
            </svg>
        )
    }
}

export default Abc
