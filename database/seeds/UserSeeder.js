'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run() {
    // Users to pre-populate the db
    const pioneers = [
      {
        username: "jamo", "email": "james@james.com", name: "James"
      },
      {
        username: "mike", "email": "mike@mike.com", name: "Mike"
      },
      {
        username: "leo", "email": "leo@leo.com", name: "Leo"
      },
      {
        username: "michelle", "email": "michelle@michelle.com", name: "Michelle"
      }
    ]

    for (const pioneer of pioneers) {
      const user = await User.findOrCreate({
        "username": pioneer.username,
        "email": pioneer.email
      }, {
        password: "abc.123",
        ...pioneer
      })
    }

  }
}

module.exports = UserSeeder
