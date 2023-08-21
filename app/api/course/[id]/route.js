import dbConn from "@/utils/dbConn";
import Course from "@/models/course";
import {NextResponse} from "next/server";

export async function GET(req, { params }) {
    try {

        const body = await req.json();
        await dbConn();

        const { id } = params;

        const res = await Course.find({userid: id});

        return NextResponse.json(res, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}



export async function PUT(req, { params }) {
    try {

        await dbConn();

        const { id } = params;

        const { ownerid:ownerid, username:username, learning:learning, requirements:requirements, section_title:section_title, section_video:section_video, section_desc:section_desc, title:title, subtitle:subtitle, description:description, language:language, level:level, category:category, promotional_video:promotional_video, image:image, price:price, email:email } = await req.json();

        const res = await Course.findByIdAndUpdate(id, {ownerid, username, learning, requirements, section_title, section_video, section_desc, title, subtitle, description, language, level, category, promotional_video, image, price, email});

        return NextResponse.json("Updated", {
            status: 200
        })

    }catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}



export async function DELETE(req, { params }) {
    try {

        const body = await req.json();
        await dbConn();

        const { id } = params;

        const res = await Course.findByIdAndDelete(id);

        return NextResponse.json("Deleted", {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}