const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener("click", (e)=> {
    //get the x and y of a click relative to view port
    const x = e.clientX
    const y = e.clientY

    //get the x and y of the starting position of the btn
    const btnTop = e.target.offsetTop
    const btnLeft = e.target.offsetLeft

    // get the position of the click inside the btn
    const xInside = x - btnLeft
    const yInside = y - btnTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    e.target.appendChild(circle)

    setTimeout(()=> circle.remove(), 500)
  })
})