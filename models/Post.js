const mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    body: String,
    currentTime: new Date(),
    category: {
        type: mongoose.Schema.Types.ObjectId, ref:"Category"
    }
})