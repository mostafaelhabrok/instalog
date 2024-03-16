'use client'

import React, { Suspense, useState } from 'react'
import SearchForm from '../components/events/SearchForm'
import EventsTable from '../components/events/EventsTable'
import LoadMore from '../components/events/LoadMore'
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
    let take = props.searchParams.take ?? 5; // for load more button
    const url = '/api/events' + '?filter=' + filter + '&take=' + take;

    //set live value in state
    const [live, setLive] = useState(false);

    // set current event to be edited
    let [event, setEvent] = useState({});

    // use swr hook to have real time data
    const { data, isLoading, error , mutate } = useEvent(url, live);

    // toggle live state 
    const toggleLive = () => {
        setLive(!live);
    };

    // update data after adding or editing or deleting
    const updateData = () => {
        mutate();
    };

    // get event data to edit
    const getEventData = (id:any) => {
        event = events.filter((v) => {return v.id == id})[0];
        setEvent(event);

    };

    // clear event data when creating new one
    const clearEvent = () => {
        setEvent({});
    };

    if (error) return <ErrorAlert id='main_error_alert' error={error} />
    if (isLoading) return <Loading />

    let events: Event[] = data.eventObjects;
    let eventTotal = data.eventTotal as number;

    return (
        <>
            <SuccessAlert />
            <div className='m-2 sm:m-14'>
                <div>
                    <SearchForm filter={filter} events={events} onToggle={toggleLive} isLive={live} />
                    <Suspense fallback={<Loading />}>
                        <EventsTable getEventData={getEventData} updateData={updateData} events={events} />
                    </Suspense>
                    <LoadMore eventTotal={eventTotal} take={take} filter={filter} />
                </div>
            </div>
            <AddEventForm clearEvent={clearEvent} event={event} updateData={updateData}/>
        </>

    )
}

export default EventsPage