'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NearbySchema extends Schema {
  up () {
    this.create('nearbies', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('nearbies')
  }
}

module.exports = NearbySchema
