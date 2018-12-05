import React from 'react'

import { space } from '../constants'

// line height for image construction
const h = 100

export const trebleClef = coord => {
    const height = 7 * space
    const width = (250 / 700) * height
    const x = coord.x * space
    const y = coord.y * space - height * 0.48 // the damn image is not totally centered
    return (
        <svg x={x} y={y} width={width} height={height} viewBox="0 0 250 700">
            <path
                d="m 142.21581,386.12234 c -10.63193,2.92638 -20.2181,9.46771 -29.1071,19.45188 -8.88899,10.1563 -13.246337,21.34543 -13.246337,33.39526 0,7.57422 2.614407,16.18124 7.668947,25.30469 5.05452,9.2956 12.72344,16.00909 22.65819,20.31259 3.3116,0.68857 4.88023,2.40997 4.88023,4.81993 0,0.86071 -1.22005,1.72142 -4.18304,2.40997 -15.86077,-3.95923 -28.93279,-12.39411 -39.041865,-24.96038 -10.109058,-12.7384 -15.337867,-27.19821 -15.686467,-43.72371 0.52289,-17.73049 5.926009,-34.25598 16.209357,-49.40438 C 102.82538,358.4077 116.246,347.56283 132.62964,341.19362 l -12.0263,-61.10992 c -26.841276,22.034 -48.628021,44.92871 -65.534547,69.02839 -16.906516,23.92755 -25.621195,49.92078 -26.318376,77.97971 0.348581,12.56627 2.962995,24.78825 7.84322,36.49381 4.880239,11.8777 12.200587,22.55043 21.961045,32.36243 19.695226,19.45189 45.316438,29.6082 76.515058,30.64103 10.63196,-0.68854 21.96104,-2.58209 34.16162,-5.68063 z m 12.54916,-1.72141 27.18984,132.37613 c 26.84129,-10.67272 40.26193,-33.9117 40.26193,-69.37267 -1.56866,-11.8777 -5.05453,-22.55042 -10.98052,-32.01815 -5.75171,-9.63988 -13.42064,-17.21407 -23.18111,-22.72257 -9.76046,-5.5085 -20.74099,-8.26274 -33.29014,-8.26274 z M 119.03471,205.37468 c 5.7517,-3.44282 12.37488,-9.46775 19.52092,-17.90263 7.14607,-8.26273 14.11779,-18.07478 20.74098,-29.09176 6.79746,-11.18915 12.20056,-22.55042 16.20934,-34.08384 4.00876,-11.36129 5.92599,-22.20614 5.92599,-32.190321 0,-4.303497 -0.34858,-8.607004 -1.22005,-12.394116 -0.69718,-6.197053 -2.61442,-11.016986 -5.92601,-14.287681 -3.31158,-3.098516 -7.49465,-4.819933 -12.72346,-4.819933 -10.45763,0 -19.8695,6.369211 -28.2356,19.107614 -6.44888,11.017017 -11.852,24.099677 -15.68647,38.903777 -4.00877,14.97626 -6.27457,29.78035 -6.62317,44.75657 0.87148,17.04193 3.66017,30.98531 8.01753,42.00232 z m -10.98052,9.98415 c -7.84324,-27.88678 -12.200596,-56.28998 -13.072066,-85.20962 0.17431,-18.59119 2.09154,-35.977386 5.751706,-52.158584 3.48589,-16.181227 8.54043,-30.124625 15.16357,-42.174466 6.44889,-12.049841 13.94353,-21.173306 22.30965,-27.3703566 7.49465,-5.5085111 12.89774,-8.43488686 15.86073,-8.43488686 2.26584,0 4.18307,0.86069846 5.926,2.40995666 1.74293,1.5492762 4.00876,4.1313926 6.79745,7.5741874 20.74101,29.0917744 31.19864,64.2084544 31.19864,105.1779294 0,19.4519 -2.6144,38.38736 -7.84323,57.32284 -5.05452,18.76333 -12.54917,36.66594 -22.48392,53.36357 -10.10905,16.8698 -21.96102,31.50173 -35.73026,44.06801 l 14.11782,67.82339 c 7.66892,-0.86069 12.89773,-1.54925 15.86072,-1.54925 13.24637,0 25.09835,2.75425 36.07887,8.26274 10.98052,5.50852 20.39238,12.91056 28.06133,22.37829 7.66894,9.29559 13.59493,19.96831 17.778,32.01815 4.00876,12.04985 6.27457,24.61612 6.27457,37.69878 0,20.31261 -5.40312,38.9038 -16.20934,55.60145 -10.80624,16.69764 -27.01557,28.91962 -48.80231,36.83809 1.39434,8.43489 3.83447,20.65686 7.49464,36.32166 3.48587,15.83695 6.10029,28.40322 7.84323,37.6988 1.74294,9.29559 2.44012,18.24691 2.44012,27.02608 0,13.59912 -3.31159,25.64896 -9.93477,36.32169 -6.79746,10.6727 -15.86076,18.93546 -27.36414,24.78824 -11.32913,5.85278 -23.87828,8.77916 -37.47321,8.77916 -19.17233,0 -35.904555,-5.33635 -50.196662,-15.83694 -14.292127,-10.67272 -21.961045,-24.96038 -22.658225,-43.20729 0.52287,-8.09061 2.440129,-15.66479 5.925999,-22.89471 3.485859,-7.2299 8.191798,-13.08269 14.292107,-17.55832 5.925988,-4.6478 13.072027,-7.05777 21.263875,-7.57421 6.797456,0 13.246336,1.89355 19.346616,5.50851 5.92601,3.78709 10.80624,8.77917 14.4664,15.14838 3.48588,6.3692 5.40314,13.42698 5.40314,21.00116 0,10.15628 -3.48591,18.76334 -10.45767,25.82106 -6.97175,7.05777 -15.86073,10.67274 -26.492687,10.67274 h -4.008759 c 6.797486,10.32843 17.952296,15.66478 33.464466,15.66478 7.84323,0 15.86074,-1.72137 23.87825,-4.81993 8.19182,-3.27066 14.98928,-7.57419 20.74098,-13.08268 5.75171,-5.50849 9.58619,-11.36129 11.15483,-17.55834 2.96299,-7.05776 4.35734,-16.86977 4.35734,-29.09177 0,-8.26274 -0.87146,-16.52549 -2.44011,-24.78826 -1.56863,-8.09059 -4.00876,-18.93546 -7.32035,-32.36243 -3.31158,-13.25484 -5.75171,-23.58326 -7.14605,-30.64103 -10.45764,2.58211 -21.26384,3.95925 -32.59296,3.95925 -18.99805,0 -36.95032,-3.78711 -53.856854,-11.53344 C 68.31514,519.01491 53.500163,508.34216 40.602396,494.57092 27.878945,480.79969 17.944177,465.307 10.798134,447.74868 3.8263604,430.36246 0.1662032,412.11555 -0.00808775,393.18008 0.68907406,375.62175 4.0006514,358.75197 10.275242,342.91503 c 6.274592,-16.00906 14.292108,-31.15744 24.226875,-45.27298 9.934748,-14.11553 20.218096,-27.02608 30.850044,-38.5595 10.806207,-11.36128 24.924024,-25.99324 42.702029,-43.72372 z"
                id="path9"
            />
        </svg>
    )
}

const quarterHead = (x, y) => {
    const height = h
    const width = 1.26 * height
    return (
        <svg x={x} y={y} width={width} height={height} viewBox="0 0 126 100">
            <ellipse
                cx="35.939014"
                cy="71.906792"
                rx="66.140923"
                ry="45.764378"
                transform="matrix(0.90644793,-0.4223176,0.42291905,0.90616747,0,0)"
            />
        </svg>
    )
}

const quarterUp = ({ x, y }) => {
    const height = 4 * space
    const width = 1.26 * space
    y = (y - 3.5) * space
    return (
        <svg
            x={x * space}
            y={y}
            width={width}
            height={height}
            viewBox="0 0 126 400">
            {quarterHead(0, 300, 100)}
            <rect
                x="115.45"
                y="0"
                width="10"
                height="335"
                fill="black"
                stroke="black"
            />
        </svg>
    )
}

const quarterDown = ({ x, y }) => {
    const height = 4 * space
    const width = 1.26 * space
    x = x * space
    y = (y - 0.5) * space
    return (
        <svg x={x} y={y} width={width} height={height} viewBox="0 0 126 400">
            {quarterHead(0, 0, 100)}
            <rect
                x="0"
                y="65"
                width="12.45"
                height="335"
                fill="black"
                stroke="black"
            />
        </svg>
    )
}

const halfHead = (x, y) => {
    return (
        <svg x={x} y={y} width={1.3 * h} height={h} viewBox="0 0 130 100">
            <path d="m 90.551004,89.080503 c 30.307936,-15.9148 46.457216,-44.7244 36.523136,-66.397 C 116.47783,-0.43389675 80.065994,-6.9579968 45.797754,8.1206032 11.529624,23.199403 -7.6823767,54.199103 2.9139331,77.316503 13.510344,100.4339 49.922094,106.958 84.190324,91.879303 c 2.14174,-0.9423 4.34006,-1.7378 6.36068,-2.7988 z m -9.90435,-19.6067 c -2.15298,1.0872 -4.33292,1.9066 -6.61514,2.9108 -29.2122,12.854 -53.52074,12.3654 -59.07121,0.2562 -5.5504709,-12.1091 9.74862,-31.2759 38.96083,-44.1299 29.2123,-12.8539 55.194276,-12.6387 60.744646,-0.5299 5.11689,11.1631 -8.6138,28.6634 -34.019126,41.4924 z" />
        </svg>
    )
}

const halfUp = ({ x, y }) => {
    const height = 4 * space
    const width = 1.3 * space
    y = (y - 3.5) * space
    x = x * space
    return (
        <svg x={x} y={y} width={width} height={height} viewBox="0 0 130 400">
            {halfHead(0, 300, 100)}
            <rect
                x="117"
                y="0"
                width="13"
                height="335"
                fill="black"
                stroke="black"
            />
        </svg>
    )
}

const halfDown = ({ x, y }) => {
    const height = 4 * space
    const width = 1.3 * space
    y = (y - 0.5) * space
    x = x * space
    return (
        <svg x={x} y={y} width={width} height={height} viewBox="0 0 130 400">
            {halfHead(0, 0, 100)}
            <rect
                x="0"
                y="65"
                width="13"
                height="335"
                fill="black"
                stroke="black"
            />
        </svg>
    )
}

const whole = ({ x, y }) => {
    return (
        <svg
            x={x * space}
            y={(y - 0.5) * space}
            width={1.6 * space}
            height={space}
            viewBox="0 0 160 100">
            <g transform="translate(-225.92857,-388.87683)">
                <g transform="matrix(14.545455,0,0,14.28571,225.92858,388.87692)">
                    <g transform="translate(-199.399,-536.473)">
                        <path d="m 206.04921,542.89329 c -1.717,-0.0908 -3.05874,-1.61496 -3.59713,-3.19103 -0.32619,-0.92504 -0.14703,-2.31276 0.93966,-2.5726 1.57441,-0.2674 2.88086,1.07001 3.61307,2.34987 0.5216,0.94927 0.80997,2.44415 -0.16802,3.19662 -0.23221,0.15573 -0.51292,0.21819 -0.78758,0.21714 z m 2.73525,-5.40329 c -1.93445,-1.1749 -4.37805,-1.26642 -6.49633,-0.6089 -1.34183,0.46915 -2.87644,1.46713 -2.88913,3.0914 -9.3e-4,1.59146 1.48,2.58425 2.79049,3.05709 2.07469,0.67865 4.46847,0.61897 6.40552,-0.4629 1.09648,-0.58336 2.06833,-1.79134 1.73878,-3.13026 -0.18121,-0.86097 -0.84075,-1.5052 -1.54933,-1.94643 z" />
                    </g>
                </g>
            </g>
        </svg>
    )
}

export const note = (coord, type, direction = 'up') => {
    if (type === 'quarter' || type === 'q') {
        if (direction === 'up') return quarterUp(coord)
        else return quarterDown(coord)
    }

    if (type === 'half' || type === 'h') {
        if (direction === 'up') return halfUp(coord)
        else return halfDown(coord)
    }

    if (type === 'whole' || type === 'w') {
        return whole(coord)
    }
}
