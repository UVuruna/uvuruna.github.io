document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
      const currentWidth = parseInt(window.getComputedStyle(button).width)
      const currentHeight = parseInt(window.getComputedStyle(button).height)
      button.style.width = currentWidth + 5 + 'px'
      button.style.height = currentHeight + 5 + 'px'
    })
  })
})
