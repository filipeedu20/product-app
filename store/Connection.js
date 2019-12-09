const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://userTeste:4018388@cluster0-jiwbo.mongodb.net/comments?retryWrites=true'

const openConnection = () => mongoose.connect(connectionString)

module.exports = {
    openConnection,
}