const mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    body: String,
    createdDate: Date,
    category: String
    // {
    //     type: mongoose.Schema.Types.ObjectId, ref:"Category"
    // }
})