import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, username, password } = await req.json();

        await connectDB();

        // Create a new user
        await User.create({
            email,
            username,
            password, 
        });

        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
    }
}
