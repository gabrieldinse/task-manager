// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }
    
    const db = client.db(databaseName)

    // db.collection('users').find({name: 'Dinse'}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({name: 'Dinse'}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').findOne({name: 'Dinse'}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find.')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Jeansee',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'task 1',
    //         completed: true
    //     },
    //     {
    //         description: 'task 2',
    //         completed: false
    //     },
    //     {
    //         description: 'task 3',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert task.')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gabrriel',
    //         age: 24
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertOne({
    //     name: 'Dinse',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').findOne({_id: new ObjectID('60e1a7a97366fc079c4529a3')}, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
})
