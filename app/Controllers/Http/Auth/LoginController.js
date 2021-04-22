'use strict'

class LoginController {
    async authenticate({ auth, response, request }) {
        const { email, password } = request.post()
        const tokens = await auth.attempt(email, password)
        response.send(tokens)
    }
}

module.exports = LoginController
