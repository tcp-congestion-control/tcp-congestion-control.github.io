function displayFirstUnAckedBar() {
  
  const firstUnackedSegmentNum = getServerState('firstUnackedSegmentNum')
  //Delete previous Bar
  try {
    document.querySelector('#timeoutBar').remove()
  } catch (error) {}
  if(serverSegments.length <= firstUnackedSegmentNum) return
  
  const start = serverSegments[firstUnackedSegmentNum].sendingCompleteMS
  if(start == NONE) return
  const newTimeoutBar = document.createElementNS(NAME_SPACE_URI, 'line') 
  newTimeoutBar.setAttribute('stroke', 'pink')
  newTimeoutBar.setAttribute('stroke-width', '1')
  newTimeoutBar.setAttribute('x1', '91%')
  newTimeoutBar.setAttribute('y1', (start/SMALL_FACTOR).toString())
  newTimeoutBar.setAttribute('x2', '99%')
  newTimeoutBar.setAttribute('y2', (start/SMALL_FACTOR).toString())
  newTimeoutBar.setAttribute('id', 'timeoutBar')
  document.querySelector('#timeoutBarSvg').append(newTimeoutBar)
}

function displayTimeout() {
  const firstUnackedSegmentNum = getServerState('firstUnackedSegmentNum')
  const start = serverSegments[firstUnackedSegmentNum].sendingCompleteMS
  const timeoutSpan = getConfigState('timeoutSpan')
  const end = start + timeoutSpan

  const newTimeoutBar = document.createElementNS(NAME_SPACE_URI, 'path')
  newTimeoutBar.setAttribute('stroke', 'pink')
  newTimeoutBar.setAttribute('fill', 'pink')
  newTimeoutBar.setAttribute('d',
  'M94 ' + (start/SMALL_FACTOR)
  + 'L96 ' + (start/SMALL_FACTOR)
  + 'L96 ' + (end/SMALL_FACTOR)
  + 'L94 ' + (end/SMALL_FACTOR)
  + 'Z'
  )
  newTimeoutBar.setAttribute('id', 'timeoutBlock')
  document.querySelector('#timeoutBarSvg').append(newTimeoutBar)
}