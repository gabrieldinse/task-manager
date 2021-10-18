const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateItndex: true,
    useUnifiedTopology: true // Not using this will use deprecated engine
})
