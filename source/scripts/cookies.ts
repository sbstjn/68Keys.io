declare const ckies: any;

const handleEvent = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (target) {
    const type = target.getAttribute('data-cookie-type');

    if (target.checked) {
      ckies.allow(type);
    } else {
      ckies.deny(type);
    }
  }
};

const initCheckbox = (item: Element) => {
  const type = item.getAttribute('data-cookie-type');

  if (ckies.use(type)) {
    item.setAttribute('checked', 'checked');
  } else {
    item.removeAttribute('checked');
  }

  item.addEventListener('change', handleEvent);
};

const wrapper = document.querySelector('#cookie-banner')
const inputs = document.querySelectorAll('input[data-cookie-type]');

if (inputs.length > 0) {
  Array.from(inputs).forEach(initCheckbox);
}

if (wrapper) {
  if (ckies.Banner.needed()) {
    wrapper.className = wrapper.className
      .replace('do-hide', '')
      .replace('do-remove', '')

    if (wrapper.className.indexOf('is-home') != -1) {
      window.requestAnimationFrame(moveCookieBanner)
    }
  }
  
  const form = document.querySelector('#cookie-banner-form')

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault()

      wrapper.className += ' do-hide'
      ckies.Banner.confirm()

      setTimeout(
        () => wrapper.className += ' do-remove',
        400
      )
    })
  }
}

function moveCookieBanner() {
  const offset = window.pageYOffset

  if (!wrapper) {
    return
  }

  if (offset != 0
    && wrapper.className.indexOf('is-home') != -1) {
    wrapper.className = wrapper.className.replace('is-home', '')
  }

  if (offset == 0
    && wrapper.className.indexOf('is-home') == -1
    && ['/', '/index.html'].indexOf(location.pathname) != -1) {
    wrapper.className += ' is-home'
  }

  window.requestAnimationFrame(moveCookieBanner);
}