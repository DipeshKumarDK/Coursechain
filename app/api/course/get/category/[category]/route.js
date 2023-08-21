import dbConn from "@/utils/dbConn";
import Course from "@/models/course";
import {NextResponse} from "next/server";

export async function POST(req, { params }) {
    try {

        const body = await req.json();
        await dbConn();

        const { category } = params;

        const res = await Course.find({category: category});

        console.log(category)

        return NextResponse.json(res, {
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