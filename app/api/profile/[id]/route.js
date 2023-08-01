import dbConn from "@/utils/dbConn";
import Profile from "@/models/profile";
import {NextResponse} from "next/server";

export async function GET(req, { params }) {
    try {

        const body = await req.json();
        await dbConn();

        const { id } = params;

        const res = await Profile.find({userid: id});

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



export async function PUT(req, { params }) {
    try {

        const body = await req.json();
        await dbConn();

        const { id } = params;

        const res = await Profile.findByIdAndUpdate(id, {body});

        return NextResponse.json("Updated", {
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



export async function DELETE(req, { params }) {
    try {

        const body = await req.json();
        await dbConn();

        const { id } = params;

        const res = await Profile.findByIdAndDelete(id);

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