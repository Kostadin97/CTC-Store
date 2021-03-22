const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    savedProducts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ]
})

module.exports = User = mongoose.model('users', UserSchema);