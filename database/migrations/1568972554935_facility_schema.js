'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacilitySchema extends Schema {
  up () {
    this.create('facilities', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('facilities')
  }
}

module.exports = FacilitySchema
