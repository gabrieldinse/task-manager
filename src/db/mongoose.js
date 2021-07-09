const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'task 1',
    completed: false
})

task.save().then((result) => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Dinse',
//     age: 24
// })

// const me = new User({
//     name: 'Wrong',
//     age: 'Not a number'
// })

// me.save().then((result) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })