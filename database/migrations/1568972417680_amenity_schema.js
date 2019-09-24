'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AmenitySchema extends Schema {
  up () {
    this.create('amenities', (table) => {
      table.increments()
      table.string('name',254).notNullable().unique()
      table.integer('project_id').references('id').inTable('projects')
      table.timestamps()
    })
  }

  down () {
    this.drop('amenities')
  }
}

module.exports = AmenitySchema
