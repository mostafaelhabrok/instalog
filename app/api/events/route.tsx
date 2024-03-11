import { NextRequest, NextResponse } from "next/server";
// import schema from "./schema";
// import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
    // const users =  await prisma.user.findMany();
    const events = [
        {
            "id": "evt_15B56WILKW5K",
            "object": "event",
            "actor_id": "user_3VG74289PUA2",
            "actor_name": "Ali Salah",
            "group": "instatus.com",
            "action": {
                "id": "evt_action_PGTD81NCAOQ2",
                "object": "event_action",
                "name": "user.login_succeeded"
            },
            "target_id": "user_DOKVD1U3L030",
            "target_name": "ali@instatus.com",
            "location": "105.40.62.95",
            "occurred_at": "2022-01-05T14:31:13.607Z",
            "metadata": {
                "redirect": "/setup",
                "description": "User login succeeded.",
                "x_request_id": "req_W1Y13QOHMI5H"
            },
        },
        {
            "id": "evt_15B56WILKW5",
            "object": "event",
            "actor_id": "user_3VG74289PUA2",
            "actor_name": "Mostafa",
            "group": "instatus.com",
            "action": {
                "id": "evt_action_PGTD81NCAOQ2",
                "object": "event_action",
                "name": "user.login_succeeded"
            },
            "target_id": "user_DOKVD1U3L030",
            "target_name": "ali@instatus.com",
            "location": "105.40.62.95",
            "occurred_at": "2022-01-05T14:31:13.607Z",
            "metadata": {
                "redirect": "/setup",
                "description": "User login succeeded.",
                "x_request_id": "req_W1Y13QOHMI5H"
            },
        },
        {
            "id": "evt_15B56WILKW",
            "object": "event",
            "actor_id": "user_3VG74289PUA2",
            "actor_name": "saad",
            "group": "instatus.com",
            "action": {
                "id": "evt_action_PGTD81NCAOQ2",
                "object": "event_action",
                "name": "user.login_succeeded"
            },
            "target_id": "user_DOKVD1U3L030",
            "target_name": "ali@instatus.com",
            "location": "105.40.62.95",
            "occurred_at": "2022-01-05T14:31:13.607Z",
            "metadata": {
                "redirect": "/setup",
                "description": "User login succeeded.",
                "x_request_id": "req_W1Y13QOHMI5H"
            },
        }
    ];

    return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
    // const body = await request.json();
    // const validation = schema.safeParse(body);

    // if(!validation.success) 
    //     return NextResponse.json(validation.error.errors,{status:400});

    // const user = await prisma.user.findUnique({
    //     where:{email:body.email}
    // });

    // if(user) return NextResponse.json({error:'User Already Exists'},{status:400});

    // const newUser = await prisma.user.create({
    //     data:{
    //         name:body.name,
    //         email:body.email
    //     }
    // });

    // return NextResponse.json(newUser,{status:201});
}