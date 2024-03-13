
import React, { Suspense } from 'react'
import SearchForm from '../components/SearchForm'
import EventsTable from '../components/EventsTable'
import LoadMore from '../components/LoadMore'
import AddEventButton from '../components/AddEventButton'
import AddEventForm from '../components/AddEventForm'
import SuccessAlert from '../components/SuccessAlert'
import {Event} from '../components/EventsTable'

interface Props {
    searchParams: {
        filter: string;
        sort:string;
        order:string;
        take:string;
    }
}


const EventsPage = async (props: Props) => {

    const filter = props.searchParams.filter;
    let take = props.searchParams.take ?? 5;

    const res = await fetch(
        process.env.BASE_URL + '/api/events' + '?filter=' + filter + '&take=' + take
        , { cache: 'no-store' });
    let data = await res.json();
    let events: Event[] = data.eventObjects;
    let eventTotal = data.eventTotal as number;

        


    return (
        <>
            <SuccessAlert />
            <div className='m-10'>
                <SearchForm />
                <Suspense fallback={<p>Loading...</p>}>
                    <EventsTable events={events} />
                </Suspense>
                <LoadMore eventTotal={eventTotal} take={take}  filter={filter}/>

            </div>
            <AddEventButton />
            <AddEventForm />
        </>

    )
}

export default EventsPage