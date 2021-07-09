const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }
    
    const db = client.db(databaseName)


    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'task 1'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60e1a775ffa36006efd8ff69")
    // // }, {
    // //     $set: {
    // //         name: 'Jeansen'
    // //     }
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


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


    // db.collection('tasks').findOne({_id: new ObjectID('60e1a7a97366fc079c4529a3')}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })
})
