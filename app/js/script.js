const elBody = document.querySelector('body')
const toggle = document.querySelector('#dark')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('theme') == 'dark') {
  elBody.classList.add('dark')
  toggle.checked = true
}

toggle.addEventListener('pointerdown', e => {
  if (!toggle.checked) {
    elBody.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    elBody.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})
