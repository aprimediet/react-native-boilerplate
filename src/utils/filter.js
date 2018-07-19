export const removeHTMLTag = (input) => input
  .replace(/&(lt|gt);/g, (strMatch, p1) => (p1 === 'lt' ? '<' : '>'))
  .replace(/<\/?[^>]+(>|$)/g, '')
