window.addEventListener('scroll', event => {
   document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
   wrapper: '.wrapper',
   content: '.content',
})

// --transition: transform .75s cubic-bezier(.075, .5, 0, 1); нужно для того чтобы параллакс не ломался, задаем переменную --transition и вставляем там, где есть transform