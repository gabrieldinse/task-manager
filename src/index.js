const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch(() => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})