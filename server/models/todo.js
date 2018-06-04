const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

// new Todo({text: ''}).save().then(doc =>{
//     console.log('Saved todo');
//     console.log(doc);
// }).catch(err => {
//     console.log('Error');
// });
