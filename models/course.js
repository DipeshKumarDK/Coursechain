import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        ownerid: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true
        },
        students:{
            type: Number,
            required:true
        },
        learning: {
            type: Array,
            required: true,
        },
        requirements: {
            type: Array,
            required: true,
        },
        section_title: {
            type: Array,
            required: true,
        },
        section_video: {
            type: Array,
            required: true,
        },
        section_desc: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        level: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        promotional_video: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        why_right_course:{
            type:String,
            required: true
        },
        for_whom: {
            type: String,
            required: true,
        },
        reviews: {
            type: Array,
            required: true,
        },
        announcements: {
            type: Array,
            required: true,
        },
        questions: {
            type: Array,
            required: true,
        },
    }
)

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema)

export default Course;