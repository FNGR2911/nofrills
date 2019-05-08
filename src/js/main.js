'use strict'

document.addEventListener('DOMContentLoaded', function() {
  /**
   * Cookie Banner
   */
  window.getCookie = name => {
    let match = document.cookie.match(new RegExp(name + '=([^;]+)'))
    if (match) return match[1]
  }

  window.setCookie = (name, value, days) => {
    let d = new Date()
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
    let expires = d.toUTCString()
    document.cookie = `${name}=${value};expires=${expires};path=/`
  }

  const cookieBanner = document.querySelector('#cookie-banner')
  const cookieButton = cookieBanner.querySelector('.button')

  const cookiesAccepted = getCookie('cookies_accepted')

  const acceptCookies = e => {
    setCookie('cookies_accepted', 'true', 365)
    cookieBanner.style.display = 'none'
  }

  if (!cookiesAccepted) {
    cookieBanner.style.display = 'block'
  }

  cookieButton.addEventListener('click', acceptCookies)
})
