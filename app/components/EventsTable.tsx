
import React from 'react'
import EventItem from './EventItem'

const EventsTable = () => {
    let events = [
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

    return (
        <div className="overflow-x-auto t-body ">
            <ul>
                {events.map(event =>
                        <EventItem key={event.id} event={event} />
                )}

            </ul>
        </div>
    )
}

export default EventsTable