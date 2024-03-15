
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from '@/prisma/client';
// import  {InstaLog}  from '../../../../../library/instalog'; // new library created
import  {InstaLog}  from 'instalog'; // new library created

interface Props{
    params:{id:string}
}

// update event
export async function PUT(request: NextRequest, {params}:Props){
    const body = await request.json();
    const instalog = new InstaLog('SECRET_KEY',{prisma:prisma,schema:schema});
    const res = await instalog.updateEvent(body,params);
    return NextResponse.json(res.result, { status: res.status });
}

// Delete event
export async function DELETE(request: NextRequest, {params}:Props){
    const instalog = new InstaLog('SECRET_KEY',{prisma:prisma,schema:schema});
    const res = await instalog.deleteEvent(params);
    return NextResponse.json(res.result, { status: res.status });
}