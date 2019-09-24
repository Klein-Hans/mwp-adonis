'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InquirySchema extends Schema {
  up () {
    this.create('inquiries', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('inquiries')
  }
}

module.exports = InquirySchema
