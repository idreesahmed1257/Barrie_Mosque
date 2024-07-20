import { NextResponse } from 'next/server';
import { getBusinesses } from '../../../../../Backend/controllers/business.controller';
import connectToDatabase from '../../../../../Backend/lib/db';

export async function GET(req, res) {
    await connectToDatabase();

    try {
        const business = await getBusinesses(req, res);
        if (!business?.length) {
            return NextResponse.json({ error: "Error In Business" }, { status: 400 });
        }
        return NextResponse.json({ message: "Business Fetched Sucessfully", data: business }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Error In Business" }, { status: 400 });
    }
}

export function otherMethods(req, res) {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}

// This is just to make sure other HTTP methods are caught
export const POST = otherMethods;
export const PUT = otherMethods;
export const DELETE = otherMethods;
