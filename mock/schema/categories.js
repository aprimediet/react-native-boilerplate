module.exports = {
  type: 'array',
  minItems: 5,
  maxItems: 5,
  uniqueItems: true,
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        chance: {
          integer: {
            min: 1,
            max: 5,
          },
        },
      },
      count: {
        type: 'integer',
        chance: {
          integer: {
            min: 0,
            max: 5,
          },
        },
      },
      description: {
        type: 'string',
        faker: 'lorem.paragraphs',
      },
      link: {
        type: 'string',
        chance: {
          url: {
            domain: 'example.com',
            path: 'categories',
          },
        },
      },
      name: {
        type: 'string',
        faker: 'lorem.words',
      },
      slug: {
        type: 'string',
        faker: {
          'lorem.slug': 2,
        },
      },
      taxonomy: {
        type: 'string',
        pattern: 'category',
      },
      parent: {
        type: 'integer',
        chance: {
          integer: {
            min: 0,
            max: 0,
          },
        },
      },
      meta: {
        type: 'array',
      },
    },
    required: ['id', 'count', 'description', 'link', 'name', 'slug', 'taxonomy', 'parent', 'meta'],
  },
}
