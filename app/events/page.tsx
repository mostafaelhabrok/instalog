'use client'

import React, { Suspense, useState } from 'react'
import SearchForm from '../components/SearchForm'
import EventsTable from '../components/EventsTable'
import LoadMore from '../components/LoadMore'
import AddEventButton from '../components/AddEventButton'
import AddEventForm from '../components/AddEventForm'
import SuccessAlert from '../components/SuccessAlert'
import {Event} from '../components/EventsTable'
import useEvent from '../hooks/hook'

interface Props {
    searchParams: {
        filter: string;
        sort:string;
        order:string;
        take:string;
    }
}


const EventsPage =  (props: Props) => {

    const filter = props.searchParams.filter;
    let take = props.searchParams.take ?? 5;

    const [live, setLive] = useState(false);

    const toggleLive = () => {
      setLive(!live); 
    };

    const url = /* process.env.BASE_URL + */ '/api/events' + '?filter=' + filter + '&take=' + take;

    const { data, isLoading, error } = useEvent(url,live);
    
      // console.log(error)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

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
                <SearchForm events={events} onToggle={toggleLive} isLive={live}/>
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