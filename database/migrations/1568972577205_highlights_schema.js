'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HighlightsSchema extends Schema {
  up () {
    this.create('highlights', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('highlights')
  }
}

module.exports = HighlightsSchema
