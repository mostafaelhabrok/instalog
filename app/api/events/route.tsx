import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from '@/prisma/client';

import  {InstaLog}  from 'instalog'; // new library created

// get events
export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const filter = params.get('filter') as string;
    const take = params.get('take') as string;
    const instalog = new InstaLog('SECRET_KEY',{prisma:prisma,schema:schema});
    const res = await instalog.listEvents({limit:take,filter:filter});
    return NextResponse.json({ eventObjects: res.result.eventObjects, eventTotal: res.result.eventTotal }, { status: res.status });
}

// create events
export async function POST(request: NextRequest) {
    const body = await request.json();
    const instalog = new InstaLog('SECRET_KEY',{prisma:prisma,schema:schema});
    const res = await instalog.createEvent(body);
    return NextResponse.json(res.result, { status: res.status });
}