import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from '@/prisma/client';
// import { randomUUID } from "crypto";
import { Event } from '../../components/EventsTable'


export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const filter = params.get('filter') as string;

    // console.log(filter)
    const events = await prisma.event.findMany(
        {
            where:
                (filter && filter != 'undefined') ?
                    {
                        OR: [
                            { actor_id: { contains: filter } },
                            { actor_name: { contains: filter } },
                            { actor_email: { contains: filter } },
                            { target_id: { contains: filter } },
                            { target_name: { contains: filter } },
                            { target_email: { contains: filter } },
                            { action_id: { contains: filter } },
                            { action_name: { contains: filter } }
                        ]
                    } : {}
        }

    );
    // console.log(events);
    let eventObjects: Event[] = [];
    for (let i = 0; i < events.length; i++) {
        const element = events[i];
        eventObjects.push(
            {
                id: element.id as any,
                event_id: element.event_id,
                object: element.object as string,
                actor_id: element.actor_id,
                actor_name: element.actor_name,
                actor_email: element.actor_email,
                group: element.group,
                action: {
                    id: element.action_id,
                    object: element.action_object as string,
                    name: element.action_name

                },
                target_id: element.target_id,
                target_name: element.target_name,
                target_email: element.target_email,
                location: element.location,
                occurred_at: element.occurred_at as any,
                metadata: {
                    redirect: element.meta_redirect,
                    description: element.meta_description,
                    x_request_id: element.meta_x_request_id
                }
            }
        );

    }
    // console.log(eventObjects);

    return NextResponse.json(eventObjects);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    // console.log(body);
    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    const generateRandomString = function (length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
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
            action_id: body.action.id,
            action_name: body.action.name,
            target_id: body.target_id,
            target_name: body.target_name,
            target_email: body.target_email,
            location: body.location,
            occurred_at: body.occurred_at,
            meta_redirect: body.metadata.redirect,
            meta_description: body.metadata.description,
            meta_x_request_id: body.metadata.x_request_id
        }
    });

    return NextResponse.json(newEvent, { status: 201 });
}