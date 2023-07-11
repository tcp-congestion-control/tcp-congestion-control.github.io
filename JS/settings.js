// property naming convension
const basicSettings = {
  version: 'tahoe',
  roundTripTimeMS: 200,
  seqSizeByte: 500,
  transrateKBytePerSecond: 20,
  initialThreshold: 10,
  lang: 'en',
  ratio1pxToMS: 1,
  timeoutSpan: 400
}

const dynamicSettings = [{ ...basicSettings }]

document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelectorAll('form.numeric').forEach((form) => {
    form.addEventListener('submit', (e)=> {
      e.preventDefault()
    })
    form.addEventListener('change', (e) => {
      //Each form has only one input
      const newValue = parseInt(form.elements[1].value)

      if (!newValue > 0) return false

      setNewEntrySettings(form.id, newValue)
      console.log(dynamicSettings)
      e.preventDefault()
    })
  })
  

  document.querySelectorAll('form.string').forEach((form) => {
    form.addEventListener('change', () => {
      const newValue = form.elements.option.value
      setNewEntrySettings(form.id, newValue)
    })
  })

  function setNewEntrySettings(key, newValue) {
    const newEntrySettings = { ...getLastElem(dynamicSettings) }
    newEntrySettings[key] = newValue
    dynamicSettings.push(newEntrySettings)
  }
})
