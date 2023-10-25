// import { useState } from 'react'

export const StatusButtons = (target) => {
  // const [activeButton, setActiveButton] = useState(0)
  const dataAllMenuButtons = document.querySelectorAll('.links-formul')

  dataAllMenuButtons.forEach((item) => {
    if (item.id === target.id) {
      item.classList.toggle('push-button')
      target.value = !JSON.parse(target.value)
    }
  })
  const activeButtons = document.querySelectorAll('button[value=true]')
  if (activeButtons.length === 3) {
    const deactivateButtons = document.querySelectorAll('button[value=false]')
    deactivateButtons.forEach((item) => {
      item.disabled = true
    })
  } else {
    const deactivateButtons = document.querySelectorAll('button[value=false]')
    deactivateButtons.forEach((item) => {
      item.disabled = false
    })
  }
}
