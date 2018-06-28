const fcHalfHeight = 205
const fcHalfWidth = 135

const defaultLightWidth = 40
const defaultLightAngle = 45

const maxRotateX = 6
const maxRotateY = 6

const maxLightWidth = 25
const maxLightAngle = 20

module.exports = {
  handleMoveCard: function(event, index, containerClass, cardClass, lightClass) {
    const fc = document.getElementsByClassName(containerClass)[index]
    const wrapper = document.getElementsByClassName(cardClass)[index]

    // Get mouse position
    const fcRect = fc.getBoundingClientRect()
    const fcOffset = {
      top: fcRect.top + document.body.scrollTop,
      left: fcRect.left + document.body.scrollLeft
    }
    const mouseX = (event.pageX - fcOffset.left) | 0
    const mouseY = (event.pageY - fcOffset.top) | 0

    // Move the floating card
    const diffX = -1 * (fcHalfWidth - mouseX)
    const diffY = fcHalfHeight - mouseY
    const rotateX = diffY / fcHalfHeight * maxRotateX
    const rotateY = diffX / fcHalfWidth * maxRotateY

    wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  },
  handleLeaveCard: function(event, index, containerClass, cardClass, lightClass) {
    const wrapper = document.getElementsByClassName(cardClass)[index]
    const light = document.getElementsByClassName(lightClass)[index]

    // Move the floating card to its initial position
    dynamics.animate(wrapper, {
      rotateX: 0,
      rotateY: 0
    }, {
      type: dynamics.spring,
      duration: 1500
    })
  }
}
