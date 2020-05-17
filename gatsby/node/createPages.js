import { resolve } from 'path'

const createPages = ({ actions: { createPage } }) =>
  Promise.all([
    createPage({
      path: '/',
      component: resolve('src/components', 'test.js')
    })
  ])

export default createPages
