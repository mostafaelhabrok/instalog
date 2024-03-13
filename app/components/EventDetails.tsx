import React from 'react'
import { Event } from '../components/EventsTable'


interface Props {
    event: Event
}

const EventDetails = (props: Props) => {
    const event = props.event;
    return (
        <div className='contents '>
            <div className='space-y-5 px-10 py-5 border-solid rounded-md border '>
                <div className=' flex w-full'>
                    <div className='w-1/3'>
                        <p className='text-lg mb-2 text-gray-400'>ACTOR</p>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Name</p>
                            <span className='w-3/4 '>{event.actor_name}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Email</p>
                            <span className='w-3/4 '>{event.actor_email}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>ID</p>
                            <span className='w-3/4 '>{event.actor_id}</span>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <p className='text-lg mb-2 text-gray-400'>ACTION</p>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Name</p>
                            <span className='w-3/4 '>{event.action.name}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Object</p>
                            <span className='w-3/4 '>{event.action.object}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>ID</p>
                            <span className='w-3/4 '>{event.action.id}</span>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <p className='text-lg mb-2 text-gray-400'>DATE</p>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Readable</p>
                            <span className='w-3/4 '>{event.occurred_at}</span>
                        </div>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/3'>
                        <p className='text-lg mb-2 text-gray-400'>METADATA</p>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Redirect</p>
                            <span className='w-3/4 '>{event.metadata.redirect}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Description</p>
                            <span className='w-3/4 '>{event.metadata.description}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Request ID</p>
                            <span className='w-3/4 '>{event.metadata.x_request_id}</span>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <p className='text-lg mb-2 text-gray-400'>TARGET</p>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Name</p>
                            <span className='w-3/4 '>{event.target_name}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>Email</p>
                            <span className='w-3/4 '>{event.target_email}</span>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4 text-gray-400'>ID</p>
                            <span className='w-3/4 '>{event.target_id}</span>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default EventDetails