import dbConn from "@/utils/dbConn";
import User from "@/models/user";
import {NextResponse} from "next/server";

export async function POST(req,res) {
    try {

        const body = await req.json();
        await dbConn();

        const res = await User.findOne({email:body.email});

        if(body.password!==res.password){
            return NextResponse.json(
                { message: "Password does not match" },
                { status: 500 }
            )
        }

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