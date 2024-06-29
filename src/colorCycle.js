let r = document.querySelector(':root')
let color = 0.0
export const colorCycle = () => {
    color = color + 0.15
    r.style.setProperty('--color-family', color % 360 + 1)
    requestAnimationFrame(colorCycle)
} 