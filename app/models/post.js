const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        id: {
            type: [String],
            required: true,
            index: {
                unique: true,
            }
        },
        texto: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            required: true,
        },  
        uid: {
            type: String,
            required: true,
        }      
    })
    return mongoose.model('Post', schema);
}();