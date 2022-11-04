/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const yaml = require('js-yaml')

export async function getPosts() {
  const doc = yaml.load(await fs.readFileSync('./locales/en.yml', 'utf8'))
  return doc
}
