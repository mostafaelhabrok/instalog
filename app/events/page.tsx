

import React, { Suspense } from 'react'
import SearchForm from '../components/SearchForm'
import EventsTable from '../components/EventsTable'
import LoadMore from '../components/LoadMore'
import AddEventButton from '../components/AddEventButton'
import AddEventForm from '../components/AddEventForm'



const EventsPage = () => {
    return (
        <>
            {/* <link rel='stylesheet' href='events.css'></link> */}
            <Suspense fallback={<p>Loading...</p>}>
                <div className='m-10'>
                    <SearchForm />
                    <EventsTable />
                    <LoadMore />
                    <AddEventButton />
                    <AddEventForm />
                </div>
            </Suspense>


        </>

    )
}

export default EventsPage