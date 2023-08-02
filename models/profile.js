import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        headline: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: true,
        },
        twitter: {
            type: String,
            required: true,
        },
        linkedin: {
            type: String,
            required: true,
        },
        youtube: {
            type: String,
            required: true,
        },
        biography: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        }
    }
)

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema)

export default Profile;