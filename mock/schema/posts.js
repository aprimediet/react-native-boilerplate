module.exports = {
  type: 'array',
  minItems: 5,
  maxItems: 10,
  uniqueItems: true,
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        chance: {
          integer: {
            min: 1,
            max: 10,
          },
        },
      },
      date: {
        type: 'string',
        format: 'date-time',
      },
      date_gmt: {
        type: 'string',
        format: 'date-time',
      },
      modified: {
        type: 'string',
        format: 'date-time',
      },
      modified_gmt: {
        type: 'string',
        format: 'date-time',
      },
      slug: {
        type: 'string',
        faker: {
          'lorem.slug': 2,
        },
      },
      status: {
        type: 'string',
        pattern: 'publish',
      },
      type: {
        type: 'string',
        pattern: 'post',
      },
      link: {
        type: 'string',
        chance: {
          url: {
            domain: 'example.com',
            path: 'posts',
          },
        },
      },
      title: {
        type: 'object',
        properties: {
          rendered: {
            type: 'string',
            faker: 'lorem.sentence',
          },
        },
        required: ['rendered'],
      },
      content: {
        type: 'object',
        properties: {
          rendered: {
            type: 'string',
            faker: {
              'lorem.paragraphs': [5],
            },
          },
          protected: {
            type: 'boolean',
            chance: {
              bool: {
                likelihood: 0,
              },
            },
          },
        },
        required: ['rendered', 'protected'],
      },
      excerpt: {
        type: 'object',
        properties: {
          rendered: {
            type: 'string',
            faker: {
              'lorem.paragraphs': [5],
            },
          },
          protected: {
            type: 'boolean',
            chance: {
              bool: {
                likelihood: 0,
              },
            },
          },
        },
        required: ['rendered', 'protected'],
      },
      author: {
        type: 'integer',
        uniqueItems: true,
        chance: {
          integer: {
            min: 1,
            max: 2,
          },
        },
      },
      featured_media: {
        type: 'integer',
        chance: {
          integer: {
            min: 0,
            max: 0,
          },
        },
      },
      comment_status: {
        type: 'string',
        pattern: 'open|closed',
      },
      ping_status: {
        type: 'string',
        pattern: 'open|closed',
      },
      format: {
        type: 'string',
        pattern: 'standard',
      },
      sticky: {
        type: 'boolean',
        chance: {
          bool: {
            likelihood: 0,
          },
        },
      },
      template: {
        type: 'string',
        pattern: '',
      },
      categories: {
        type: 'array',
        minItems: 0,
        maxItems: 5,
        uniqueItems: true,
        items: {
          type: 'integer',
          minimum: 1,
          maximum: 5,
        },
      },
      tags: {
        type: 'array',
      },
      meta: {
        type: 'array',
      },
    },
    required: [
      'id',
      'date',
      'date_gmt',
      'modified',
      'modified_gmt',
      'slug',
      'status',
      'type',
      'link',
      'title',
      'content',
      'excerpt',
      'author',
      'featured_media',
      'comment_status',
      'ping_status',
      'format',
      'sticky',
      'template',
      'categories',
      'tags',
      'meta',
    ],
  },
}
