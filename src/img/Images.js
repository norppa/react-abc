import React from 'react'

export const trebleClef = (coord, space) => {
    const height = 7 * space
    const width = (250 / 700) * height
    const x = coord.x
    const y = coord.y - height * 0.48 // the damn image is not totally centered
    return (
        <svg
            x={x}
            y={y}
            width={width}
            height={height}
            viewBox="0 0 250 700">
            <path
                d="m 142.21581,386.12234 c -10.63193,2.92638 -20.2181,9.46771 -29.1071,19.45188 -8.88899,10.1563 -13.246337,21.34543 -13.246337,33.39526 0,7.57422 2.614407,16.18124 7.668947,25.30469 5.05452,9.2956 12.72344,16.00909 22.65819,20.31259 3.3116,0.68857 4.88023,2.40997 4.88023,4.81993 0,0.86071 -1.22005,1.72142 -4.18304,2.40997 -15.86077,-3.95923 -28.93279,-12.39411 -39.041865,-24.96038 -10.109058,-12.7384 -15.337867,-27.19821 -15.686467,-43.72371 0.52289,-17.73049 5.926009,-34.25598 16.209357,-49.40438 C 102.82538,358.4077 116.246,347.56283 132.62964,341.19362 l -12.0263,-61.10992 c -26.841276,22.034 -48.628021,44.92871 -65.534547,69.02839 -16.906516,23.92755 -25.621195,49.92078 -26.318376,77.97971 0.348581,12.56627 2.962995,24.78825 7.84322,36.49381 4.880239,11.8777 12.200587,22.55043 21.961045,32.36243 19.695226,19.45189 45.316438,29.6082 76.515058,30.64103 10.63196,-0.68854 21.96104,-2.58209 34.16162,-5.68063 z m 12.54916,-1.72141 27.18984,132.37613 c 26.84129,-10.67272 40.26193,-33.9117 40.26193,-69.37267 -1.56866,-11.8777 -5.05453,-22.55042 -10.98052,-32.01815 -5.75171,-9.63988 -13.42064,-17.21407 -23.18111,-22.72257 -9.76046,-5.5085 -20.74099,-8.26274 -33.29014,-8.26274 z M 119.03471,205.37468 c 5.7517,-3.44282 12.37488,-9.46775 19.52092,-17.90263 7.14607,-8.26273 14.11779,-18.07478 20.74098,-29.09176 6.79746,-11.18915 12.20056,-22.55042 16.20934,-34.08384 4.00876,-11.36129 5.92599,-22.20614 5.92599,-32.190321 0,-4.303497 -0.34858,-8.607004 -1.22005,-12.394116 -0.69718,-6.197053 -2.61442,-11.016986 -5.92601,-14.287681 -3.31158,-3.098516 -7.49465,-4.819933 -12.72346,-4.819933 -10.45763,0 -19.8695,6.369211 -28.2356,19.107614 -6.44888,11.017017 -11.852,24.099677 -15.68647,38.903777 -4.00877,14.97626 -6.27457,29.78035 -6.62317,44.75657 0.87148,17.04193 3.66017,30.98531 8.01753,42.00232 z m -10.98052,9.98415 c -7.84324,-27.88678 -12.200596,-56.28998 -13.072066,-85.20962 0.17431,-18.59119 2.09154,-35.977386 5.751706,-52.158584 3.48589,-16.181227 8.54043,-30.124625 15.16357,-42.174466 6.44889,-12.049841 13.94353,-21.173306 22.30965,-27.3703566 7.49465,-5.5085111 12.89774,-8.43488686 15.86073,-8.43488686 2.26584,0 4.18307,0.86069846 5.926,2.40995666 1.74293,1.5492762 4.00876,4.1313926 6.79745,7.5741874 20.74101,29.0917744 31.19864,64.2084544 31.19864,105.1779294 0,19.4519 -2.6144,38.38736 -7.84323,57.32284 -5.05452,18.76333 -12.54917,36.66594 -22.48392,53.36357 -10.10905,16.8698 -21.96102,31.50173 -35.73026,44.06801 l 14.11782,67.82339 c 7.66892,-0.86069 12.89773,-1.54925 15.86072,-1.54925 13.24637,0 25.09835,2.75425 36.07887,8.26274 10.98052,5.50852 20.39238,12.91056 28.06133,22.37829 7.66894,9.29559 13.59493,19.96831 17.778,32.01815 4.00876,12.04985 6.27457,24.61612 6.27457,37.69878 0,20.31261 -5.40312,38.9038 -16.20934,55.60145 -10.80624,16.69764 -27.01557,28.91962 -48.80231,36.83809 1.39434,8.43489 3.83447,20.65686 7.49464,36.32166 3.48587,15.83695 6.10029,28.40322 7.84323,37.6988 1.74294,9.29559 2.44012,18.24691 2.44012,27.02608 0,13.59912 -3.31159,25.64896 -9.93477,36.32169 -6.79746,10.6727 -15.86076,18.93546 -27.36414,24.78824 -11.32913,5.85278 -23.87828,8.77916 -37.47321,8.77916 -19.17233,0 -35.904555,-5.33635 -50.196662,-15.83694 -14.292127,-10.67272 -21.961045,-24.96038 -22.658225,-43.20729 0.52287,-8.09061 2.440129,-15.66479 5.925999,-22.89471 3.485859,-7.2299 8.191798,-13.08269 14.292107,-17.55832 5.925988,-4.6478 13.072027,-7.05777 21.263875,-7.57421 6.797456,0 13.246336,1.89355 19.346616,5.50851 5.92601,3.78709 10.80624,8.77917 14.4664,15.14838 3.48588,6.3692 5.40314,13.42698 5.40314,21.00116 0,10.15628 -3.48591,18.76334 -10.45767,25.82106 -6.97175,7.05777 -15.86073,10.67274 -26.492687,10.67274 h -4.008759 c 6.797486,10.32843 17.952296,15.66478 33.464466,15.66478 7.84323,0 15.86074,-1.72137 23.87825,-4.81993 8.19182,-3.27066 14.98928,-7.57419 20.74098,-13.08268 5.75171,-5.50849 9.58619,-11.36129 11.15483,-17.55834 2.96299,-7.05776 4.35734,-16.86977 4.35734,-29.09177 0,-8.26274 -0.87146,-16.52549 -2.44011,-24.78826 -1.56863,-8.09059 -4.00876,-18.93546 -7.32035,-32.36243 -3.31158,-13.25484 -5.75171,-23.58326 -7.14605,-30.64103 -10.45764,2.58211 -21.26384,3.95925 -32.59296,3.95925 -18.99805,0 -36.95032,-3.78711 -53.856854,-11.53344 C 68.31514,519.01491 53.500163,508.34216 40.602396,494.57092 27.878945,480.79969 17.944177,465.307 10.798134,447.74868 3.8263604,430.36246 0.1662032,412.11555 -0.00808775,393.18008 0.68907406,375.62175 4.0006514,358.75197 10.275242,342.91503 c 6.274592,-16.00906 14.292108,-31.15744 24.226875,-45.27298 9.934748,-14.11553 20.218096,-27.02608 30.850044,-38.5595 10.806207,-11.36128 24.924024,-25.99324 42.702029,-43.72372 z"
                id="path9"
            />
        </svg>
    )
}
