'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TownshipSchema extends Schema {
  up () {
    this.create('townships', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('townships')
  }
}

module.exports = TownshipSchema
