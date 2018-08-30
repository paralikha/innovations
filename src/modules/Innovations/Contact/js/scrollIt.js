/* eslint-disable */
export const scrollIt = (element, behavior = 'smooth') => {
  // element.scrollIntoView()
  window.scrollTo({
    'behavior': behavior,
    'left': 0,
    'top': element.offsetTop
  });
}
