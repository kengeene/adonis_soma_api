'use strict'

const User = use("App/Models/User")

class RegisterController {
    // Register new user into the system
    async register({ auth, response, request }) {

        const userData = request.only([
            'name', 'username', 'email', 'password'
        ])
        const user = await User.findOrCreate({
            "username": userData.username
        }, userData)
        response.status(201).send({
            data: user,
            message: 'User registered successfuly'
        })
    }
}

module.exports = RegisterController
