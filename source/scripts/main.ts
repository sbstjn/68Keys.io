console.log('68keys.io')

domready(() => {
  const bar = document.getElementById('bar')
  const content = document.querySelector('.content')
  const toggle = document.getElementById('menu-toggle')

  const barChecker = () => {
    if (!bar || !content || !toggle) {
      return
    }

    const rectTitle = content.getBoundingClientRect()
    const rectBody = document.body.getBoundingClientRect()
    const barThreshold = (rectTitle.top - rectBody.top) - 56
  
    if (window.scrollY > barThreshold) {
      bar.className = 'show'
    } else {
      toggle.checked = false
      bar.className = ''
    }
  
    window.requestAnimationFrame(barChecker)
  }
  
  window.requestAnimationFrame(barChecker)  
})
