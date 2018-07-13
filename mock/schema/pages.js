const posts = require('./posts')

module.exports = {
  ...posts,
  items: {
    ...posts.items,
    properties: {
      ...posts.items.properties,
      type: {
        type: 'string',
        pattern: 'page',
      },
    },
  },
}
