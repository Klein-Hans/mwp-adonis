'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HlurbSchema extends Schema {
  up () {
    this.create('hlurbs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('hlurbs')
  }
}

module.exports = HlurbSchema
