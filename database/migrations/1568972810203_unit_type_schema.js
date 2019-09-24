'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitTypeSchema extends Schema {
  up () {
    this.create('unit_types', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('unit_types')
  }
}

module.exports = UnitTypeSchema
