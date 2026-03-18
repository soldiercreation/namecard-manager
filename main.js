const header = document.querySelector('.site-header')
const menuToggle = document.querySelector('#menu-toggle')
const globalNav = document.querySelector('#global-nav')

const updateHeaderState = () => {
  if (window.scrollY > 10) {
    header?.classList.add('is-scrolled')
  } else {
    header?.classList.remove('is-scrolled')
  }
}

window.addEventListener('scroll', updateHeaderState, { passive: true })
updateHeaderState()

if (menuToggle && globalNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('is-open')
    menuToggle.setAttribute('aria-expanded', String(isOpen))
  })

  globalNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      globalNav.classList.remove('is-open')
      menuToggle.setAttribute('aria-expanded', 'false')
    })
  })
}

const revealTargets = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.2 }
)

revealTargets.forEach((item) => observer.observe(item))

document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question')
  if (!question) return

  question.addEventListener('click', () => {
    item.classList.toggle('is-open')
  })
})
