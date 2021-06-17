import mongoose from "mongoose";

//table, schema, collection
const Schema = mongoose.Schema;

//인스턴스화 instance = 객체 
const Student = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        school: {
            type: String,
            required: true,
        },
        grade: {
            type: Number,
            required: true,
        },
        ban: {
            type: Number,
            required: true,
        },
        birth: {
            type: String,
            required: true,
        },
        hobby: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model(`Student`, Student, `Student`)