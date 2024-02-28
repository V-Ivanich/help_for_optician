export const StatusButtons = (refItem) => {
  refItem.value = !JSON.parse(refItem.value)
  refItem.classList.toggle('push-button')
}
