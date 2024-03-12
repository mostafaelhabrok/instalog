import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from '@/prisma/client';
// import { randomUUID } from "crypto";

export async function GET(request: NextRequest) {
    const events = await prisma.event.findMany();

    return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    // console.log(body);
    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    const generateRandomString = function(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
        }
          

    const newEvent = await prisma.event.create({
        data: {
            event_id: "evt_" + generateRandomString(12),
            actor_id: body.actor_id,
            actor_name: body.actor_name,
            actor_email: body.actor_email,
            group: body.group,
            action_id: body.action_id,
            action_name: body.action_name,
            target_id: body.target_id,
            target_name: body.target_name,
            target_email: body.target_email,
            location: body.location,
            occurred_at: body.occurred_at,
            meta_redirect: body.meta_redirect,
            meta_description: body.meta_description,
            meta_x_request_id: body.meta_x_request_id
        }
    });

    return NextResponse.json(newEvent, { status: 201 });
}