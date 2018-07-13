module.exports = {
  type: 'array',
  minItems: 2,
  maxItems: 2,
  uniqueItems: true,
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        uniqueItems: true,
        chance: {
          integer: {
            min: 0,
            max: 2,
          },
        },
      },
      username: {
        type: 'string',
        chance: {
          word: {
            syllables: 3,
          },
        },
      },
      url: {
        type: 'string',
        pattern: '',
      },
      description: {
        type: 'string',
        faker: 'lorem.paragraphs',
      },
      link: {
        type: 'string',
        uniqueItems: true,
        chance: {
          url: {
            domain: 'example.com',
          },
        },
      },
      slug: {
        type: 'string',
        faker: {
          'lorem.slug': 2,
        },
      },
      avatar_urls: {
        type: 'object',
        properties: {
          '24': {
            type: 'string',
            pattern:
              'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=24&amp;d=mm&amp;r=g',
          },
          '48': {
            type: 'string',
            pattern:
              'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=48&amp;d=mm&amp;r=g',
          },
          '96': {
            type: 'string',
            pattern:
              'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=48&amp;d=mm&amp;r=g',
          },
        },
        required: ['24', '48', '96'],
      },
      meta: {
        type: 'array',
      },
    },
    required: ['id', 'username', 'url', 'description', 'link', 'slug', 'meta'],
  },
}
