const serviceSliderCard = {
  height: ['475px', '800px', '440px', '500px', '540px', '540px'],
}

export default {
  sectionSlider: {
    alignItems: [null, null, 'center', null, null, null],
    display: 'block',
    minHeight: [null, '1000px', null, null, null, null],
    position: 'relative',
    px: [2, null, null, null, null, null],
    scrollSnapType: 'y mandatory',
    zIndex: 3,
    py: 6,
  },

  serviceSliderArticle: {
  pl: [0, 2, 0, 5, 5, 5],
  pr: [0, 2, 0, 0, 4, 5],
  py: [1, 2, 5, 4, 4, 4],
},
containerSlider: {
  maxWidth: ['container.5', null, null, null, 'container.4', null],
  height: '100%',
  position: 'relative',
},

// ? servicesSliderContainer, Slider elements as noted,

serviceSlider: {
  ...serviceSliderCard,
  height: serviceSliderCard.height,
  display: ['block', null, null, null, null, null],
  position: ['relative', null, null, null, null, null],
  '.slick-list, .slick-slider, .slick-track': {
    height: serviceSliderCard.height,
  },
},

serviceSliderCard: {
  ...serviceSliderCard,
  height: serviceSliderCard.height,
  bg: 'surface',
  px: [4, 5, 5, 5, 5, 5],
  // py: [4, 6, 5, 5, 5, 5],
  width: ['90vw', '544px', '392px', '392px', '392px', '392px'],
  borderRadius: 6,
  cursor: 'grab',
},
}