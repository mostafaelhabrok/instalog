
import React from 'react'
// import $, { event } from 'jquery';
import Link from 'next/link';
// import schema from "../api/events/schema";


const CreateEventButton = () => {



    return (
        <>
            <button type="submit" className="btn btn-primary">
                Create
                <span id='create_event_btn' className=""></span>
            </button>
        </>
    )
}

export default CreateEventButton