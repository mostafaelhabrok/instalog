
import React from 'react'
import EventItem from './EventItem'
import Link from 'next/link';

export interface Event {
  id: string;
  event_id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  actor_email: string;
  group: string;
  action: {
    id: string;
    object: string;
    name: string
  };
  target_id: string;
  target_name: string;
  target_email: string;
  location: string;
  occurred_at: string;
  metadata: {
    redirect: string;
    description: string;
    x_request_id: string
  };
}

interface Props {
  events: Event[];
  currentOrder: {
    actor_email: string;
    action_name: string;
    occurred_at: string;
  };
  filter:string;
  take:string;
}

const EventsTable = async (props: Props) => {

  let events = props.events;

  const currentOrder = props.currentOrder;
  const filter = props.filter;
  const take = props.take;

  return (
    <>
      <div className='overflow-x-auto px-5 pb-3 search-form'>
        <div className='flex t-head px-5 mt-5'>
          <div className='font-bold t-title w-4/12'>
            <Link title={`Sort ${currentOrder.actor_email}`} href={`/events?take=${take}&filter=${filter}&sort=actor_email&order=${currentOrder.actor_email}`}>Actor <i className="fa-solid fa-sort"></i></Link>
          </div>
          <div className='font-bold t-title w-4/12'>
            <Link title={`Sort ${currentOrder.action_name}`} href={`/events?take=${take}&filter=${filter}&sort=action_name&order=${currentOrder.action_name}`}>Action <i className="fa-solid fa-sort"></i></Link>
          </div>
          <div className='font-bold t-title w-3/12'>
            <Link title={`Sort ${currentOrder.occurred_at}`} href={`/events?take=${take}&filter=${filter}&sort=occurred_at&order=${currentOrder.occurred_at}`}>Date <i className="fa-solid fa-sort"></i></Link>
          </div>
          <div className='font-bold t-title w-1/12'></div>
        </div>
      </div>
      <div className="overflow-x-auto t-body  overflow-y-auto max-h-96">
        <ul>
          {events.map(event =>
            <EventItem key={event.event_id} event={event} />
          )}

        </ul>
      </div>
    </>
  )
}

export default EventsTable

function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}
