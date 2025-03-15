function loadScript (url) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.async = true

    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`))

    document.head.appendChild(script)
  })
}

loadScript('./JS/html_load.js')
loadScript('./JS/carousel.js')
loadScript('./JS/vector_height.js')

