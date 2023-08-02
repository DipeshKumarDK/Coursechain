import dbConn from "@/utils/dbConn";
import Profile from "@/models/profile";
import {NextResponse} from "next/server";

export async function POST(req, { params }) {
    try {

        const body = await req.json();
        await dbConn();

        const res = await Profile.findOne({email: body.email});

        return NextResponse.json(res, {
            status: 200
        })

    }catch (e) {
        console.log(e);
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
