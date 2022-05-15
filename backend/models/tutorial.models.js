import mongoose from "mongoose";

const tutorialSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    published: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

export default Tutorial;