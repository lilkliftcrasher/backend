
const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    icon: String,
    title: {
        type: String,
        required: true
    },
    content: String
})

serviceSchema.set('toJSON',{
    transform:(document, returnObject)=>{
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
    }
})

module.exports = mongoose.model('Service',serviceSchema)  