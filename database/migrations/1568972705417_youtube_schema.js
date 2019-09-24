'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class YoutubeSchema extends Schema {
  up () {
    this.create('youtubes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('youtubes')
  }
}

module.exports = YoutubeSchema
