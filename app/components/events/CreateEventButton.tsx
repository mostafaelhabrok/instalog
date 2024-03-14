
import React from 'react'
// import $, { event } from 'jquery';
import Link from 'next/link';
// import schema from "../api/events/schema";


const CreateEventButton = () => {

        

    return (
        <>
        <button
            type="submit"
            className="btn btn-primary"
        >
            Create
        </button>
        <Link href='/events' id='hidden_link' className='hidden'>Refresh</Link>
        </>
    )
}

export default CreateEventButton