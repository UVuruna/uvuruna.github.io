function initializeCarousel (carouselId) {
  var checkExist = setInterval(function () {
    const carousel = document.querySelector(carouselId)

    if (carousel) {
      const prev = carousel.querySelector('.prev')
      const next = carousel.querySelector('.next')
      const track = carousel.querySelector('.track')
      const cards = carousel.querySelectorAll('.card-container')

      if (prev && next && track && cards.length > 0) {
        clearInterval(checkExist)

        let cardWidth = cards[0].offsetWidth
        let carouselWidth = carousel.offsetWidth
        let index = 0

        function updateDimensions () {
          cardWidth = cards[0].offsetWidth
          carouselWidth = carousel.offsetWidth
          track.style.transform = 'translateX(' + index * -cardWidth + 'px)'
        }

        window.addEventListener('resize', updateDimensions)

        next.addEventListener('click', function (e) {
          e.preventDefault()
          if (index < cards.length - 1) {
            index++
            track.style.transform = 'translateX(' + index * -cardWidth + 'px)'
            prev.classList.add('show')
          }

          if (track.offsetWidth - index * cardWidth <= carouselWidth) {
            next.classList.add('hide')
          }
        })

        prev.addEventListener('click', function () {
          if (index > 0) {
            index--
            track.style.transform = 'translateX(' + index * -cardWidth + 'px)'
            next.classList.remove('hide')
          }

          if (index === 0) {
            prev.classList.remove('show')
          }
        })

        console.log(`Carousel "${carouselId}" initialized!`)
      } else {
        console.log(`Waiting for elements inside "${carouselId}"...`)
      }
    }
  }, 50)
}

initializeCarousel('#partners-carousel')
initializeCarousel('#verticles-carousel')
