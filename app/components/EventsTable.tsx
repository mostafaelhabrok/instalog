
import React from 'react'
import EventItem from './EventItem'

interface Event {
    id: string;
    object: string;
    actor_id: string;
    actor_name: string;
    group: string;
    action: {
      id: string;
      object: string;
      name: string
    };
    target_id: string;
    target_name: string;
    location: string;
    occurred_at: string;
    metadata: {
      redirect: string;
      description: string;
      x_request_id: string
    };
  }

const EventsTable = async () => {
    const res = await fetch(
        process.env.BASE_URL + '/api/events'
        ,{cache:'no-store'});
    let events: Event[] = await res.json();

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