'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up() {
    this.create('books', (table) => {
      table.increments() // id column
      table.integer('owner_id').unsigned().references('id').inTable('users')
      table.string('author').nullable()
      table.string('title').notNullable()
      table.string('description').notNullable()
      // since string is limited to 255 chars
      table.text('cover').nullable()
      table.timestamps() // created_at & updated_at column
    })
  }

  down() {
    this.drop('books')
  }
}

module.exports = BookSchema
