require('../src/db/mongoose')
const Task = require('../src/models/task.js')

Task.findByIdAndDelete('6162eeb7299c481369dee41d').then((task) => {
    if (task) {
        console.log('Removed task:')
        console.log(task)
    }
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})


