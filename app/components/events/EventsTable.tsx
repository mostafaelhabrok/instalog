'use client'
import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'
import Link from 'next/link';
import { sort } from 'fast-sort';
import styles from '../events.module.css'

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
}

const EventsTable = (props: Props) => {

  const [events, setEvents] = useState<Event[]>(props.events);

  const [sortDirections, setSortDirections] = useState<{ [key: string]: 'asc' | 'desc' }>({
    actor_email: 'asc',
    action: 'asc',
    occurred_at: 'asc',
  });


  // Update state when props.events changes
  useEffect(() => {
    setEvents(props.events);
  }, [props.events]);



  // events  = props.events;
  const handleSort = (_sort:keyof Event) => {
    const currentDirection = sortDirections[_sort];

    setEvents(sort(events)[currentDirection](e => _sort != 'action' ? e[_sort] : e.action.name));
    const nextDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    setSortDirections({ ...sortDirections, [_sort]: nextDirection });
  };


  

  return (
    <>
      <div className={`overflow-x-auto px-5 pb-3 ${styles.searchForm} `}>
        <div className='flex t-head px-5 mt-5'>
          <div className={`font-bold ${styles.tTitle} w-4/12`}>
            <button title={`Sort ${sortDirections.actor_email}`} onClick={() => handleSort('actor_email')}>ACTOR <i className="fa-solid fa-sort"></i></button>
          </div>
          <div className={`font-bold ${styles.tTitle} w-4/12`}>
          <button title={`Sort ${sortDirections.action}`} onClick={() => handleSort('action')}>ACTION <i className="fa-solid fa-sort"></i></button>
          </div>
          <div className={`font-bold ${styles.tTitle} w-3/12`}>
          <button title={`Sort ${sortDirections.occurred_at}`} onClick={() => handleSort('occurred_at')}>DATE <i className="fa-solid fa-sort"></i></button>
          </div>
          <div className={`font-bold ${styles.tTitle} w-1/12`}></div>
        </div>
      </div>
      <div className={`overflow-x-auto ${styles.tBody}  overflow-y-auto max-h-96`}>
        <ul className={`${styles.mobileWrap}`}>
          {events.map(event =>
            <EventItem key={event.event_id} event={event} />
          )}

        </ul>
      </div>
    </>
  )
}

export default EventsTable
