document.addEventListener('scroll', () => {

    document.documentElement.style.setProperty("--scroll", window.scrollY + "px")

    document.querySelectorAll('.parallax').forEach((poem) => {
        let box = poem.getBoundingClientRect()

        poem.style.setProperty("--poem-scroll", (box.top - (box.height * .5)) + "px")

    })

})

document.addEventListener('mousemove', (event) => {
    document.documentElement.style.setProperty("--mouse-x", event.clientX + "px")
    document.documentElement.style.setProperty("--mouse-y", event.clientY + "px")
})