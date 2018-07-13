const jsf = require('json-schema-faker')
const fs = require('fs')
const path = require('path')

// Extends jsf
jsf.extend('faker', () => require('faker'))
jsf.extend('chance', () => {
  const Chance = require('chance')
  return new Chance()
})

// Import schema
const postSchema = require('../schema/posts')
const categorySchema = require('../schema/categories')
const pageSchema = require('../schema/pages')
const userSchema = require('../schema/users')

// Generate mock data
const posts = jsf(postSchema)
const categories = jsf(categorySchema)
const tags = jsf(categorySchema)
const pages = jsf(pageSchema)
const users = jsf(userSchema)

const final = JSON.stringify(
  {
    api: {
      message: 'Mock Development Server',
    },
    posts,
    pages,
    categories,
    tags,
    users,
  },
  null,
  4
)

/* eslint-disable no-undef */
fs.writeFile(path.join(path.dirname(__filename), '..', 'db.json'), final, (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.log(err.message)
  } else {
    console.log('Mock API Data Generated!')
  }
})
