'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDescriptionToBooksSchema extends Schema {
  up () {
    this.table('add_description_to_books', (table) => {
      // alter table
    })
  }

  down () {
    this.table('add_description_to_books', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddDescriptionToBooksSchema
