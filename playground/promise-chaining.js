require('../src/db/mongoose')
const User = require('../src/models/user.js')

User.findByIdAndUpdate('6168de2af1446627d795e7df', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

