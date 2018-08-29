/* eslint-disable */
export const scrollIt = (element, behavior = 'smooth') => {
  console.log('yeahh', element, element.offsetTop)
  window.scrollTo({
    'behavior': behavior,
    'left': 0,
    'top': element.offsetTop
  });
}
