function height_calc (heightFrom, heightTo) {
  const mediaQuery = window.matchMedia('(max-width: 200px)')

  function checkMediaQuery () {
    if (!mediaQuery.matches) {
      var checkExist = setInterval(function () {
        var whatWeDo1 = document.querySelector(heightFrom)
        var whatWeDo2 = document.querySelector(heightTo)

        if (whatWeDo1 && whatWeDo2 && whatWeDo1.offsetHeight > 0) {
          clearInterval(checkExist)

          var height = whatWeDo1.offsetHeight
          whatWeDo2.style.height = height + 'px'
          console.log(heightTo, ' height set to: ', height)
        } else {
          console.log('!!! Waiting for elements: ', heightFrom, heightTo)
        }
      }, 50)
    } else {
      console.log('Unavailable for this width !!!')
    }
  }

  checkMediaQuery()
  mediaQuery.addEventListener('change', checkMediaQuery)
}

height_calc('#what-we-do-1', '#what-we-do-2')
height_calc('#who-we-are-1', '#who-we-are-2')
height_calc('.data-driven-frame', '.powered-by-data-frame')
height_calc('.contact-1-frame', '.contact-2-frame')
