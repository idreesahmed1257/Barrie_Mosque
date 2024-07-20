import { NextResponse } from 'next/server';
import { createBusiness } from '../../../../../Backend/controllers/business.controller';
import connectToDatabase from '../../../../../Backend/lib/db';

export async function POST(req, res) {
    await connectToDatabase();

    try {
        const business = await createBusiness(req, res);
        if (!business) {
            return NextResponse.json({ error: "Error In Business" }, { status: 400 });
        }
        return NextResponse.json({ message: "Business Created Sucessfully", data: business }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Error In Business" }, { status: 400 });
    }
}

export function otherMethods(req, res) {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}

// This is just to make sure other HTTP methods are caught
export const GET = otherMethods;
export const PUT = otherMethods;
export const DELETE = otherMethods;
