
import React, { Suspense } from 'react'
import SearchForm from '../components/SearchForm'
import EventsTable from '../components/EventsTable'
import LoadMore from '../components/LoadMore'
import AddEventButton from '../components/AddEventButton'
import AddEventForm from '../components/AddEventForm'
import SuccessAlert from '../components/SuccessAlert'
import {Event} from '../components/EventsTable'
import {sort} from 'fast-sort'

interface Props {
    searchParams: {
        filter: string;
        sort:string;
        order:string;
        take:string;
    }
}


const EventsPage = async (props: Props) => {

    const _sort = props.searchParams.sort;
    const order = props.searchParams.order;
    const filter = props.searchParams.filter;
    let take = props.searchParams.take ?? 5;

    const res = await fetch(
        process.env.BASE_URL + '/api/events' + '?filter=' + filter /* + '&sort=' + _sort + '&order=' + order */ + '&take=' + take
        , { cache: 'no-store' });
    let data = await res.json();
    let events: Event[] = data.eventObjects;
    let eventTotal = data.eventTotal as number;

        

    let currentOrder = {
        actor_email: 'asc',
        action_name: 'asc',
        occurred_at: 'asc'
      }

    switch (_sort) {
      case "actor_email":
        if (order == 'asc') {
          events = sort(events).asc(e => e.actor_email);
          currentOrder.actor_email = 'desc';
        }
        else {
          events = sort(events).desc(e => e.actor_email);
          currentOrder.actor_email = 'asc';
        }
        break;
  
      case "action_name":
        if (order == 'asc') {
          events = sort(events).asc(e => e.action.name);
          currentOrder.action_name = 'desc';
        }
        else {
          events = sort(events).desc(e => e.action.name);
          currentOrder.action_name = 'asc';
        }
        break;
  
      case "occurred_at":
        if (order == 'asc') {
          events = sort(events).asc(e => e.occurred_at);
          currentOrder.occurred_at = 'desc';
        }
        else {
          events = sort(events).desc(e => e.occurred_at);
          currentOrder.occurred_at = 'asc';
        }
        break;
  
      default:
        break;
  
    }

    return (
        <>
            <SuccessAlert />
            <div className='m-10'>
                <SearchForm sort={_sort} order={order}/>
                <Suspense fallback={<p>Loading...</p>}>
                    <EventsTable take={take} filter={filter} currentOrder={currentOrder} events={events} />
                </Suspense>
                <LoadMore eventTotal={eventTotal} take={take} sort={_sort} order={order} filter={filter}/>

            </div>
            <AddEventButton />
            <AddEventForm />
        </>

    )
}

export default EventsPage