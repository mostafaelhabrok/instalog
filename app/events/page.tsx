'use client'

import React, { Suspense, useState } from 'react'
import SearchForm from '../components/events/SearchForm'
import EventsTable from '../components/events/EventsTable'
import LoadMore from '../components/events/LoadMore'
import AddEventButton from '../components/events/AddEventButton'
import AddEventForm from '../components/events/AddEventForm'
import SuccessAlert from '../components/SuccessAlert'
import { Event } from '../components/events/EventsTable'
import useEvent from '../hooks/hook'
import Loading from '../components/Loading'
import ErrorAlert from '../components/ErrorAlert'

interface Props {
    searchParams: {
        filter: string;
        sort: string;
        order: string;
        take: string;
    }
}


const EventsPage = (props: Props) => {

    const filter = props.searchParams.filter;
    let take = props.searchParams.take ?? 5;

    const [live, setLive] = useState(false);

    const toggleLive = () => {
        setLive(!live);
    };

    const url = /* process.env.BASE_URL + */ '/api/events' + '?filter=' + filter + '&take=' + take;

    const { data, isLoading, error } = useEvent(url, live);

    // console.log(error)
    if (error) return <ErrorAlert error={error} />
    if (isLoading) return <Loading />

    // const res = await fetch(
    //     process.env.BASE_URL + '/api/events' + '?filter=' + filter + '&take=' + take
    //     , { cache: 'no-store' });
    // let data = await res.json();
    let events: Event[] = data.eventObjects;
    let eventTotal = data.eventTotal as number;




    return (
        <>
            <SuccessAlert />
            <div className='m-10'>
                <div>
                    <SearchForm filter={filter} events={events} onToggle={toggleLive} isLive={live} />
                    <Suspense fallback={<Loading />}>
                        <EventsTable events={events} />
                    </Suspense>
                    <LoadMore eventTotal={eventTotal} take={take} filter={filter} />
                </div>
            </div>
            <AddEventButton />
            <AddEventForm />
        </>

    )
}

export default EventsPage