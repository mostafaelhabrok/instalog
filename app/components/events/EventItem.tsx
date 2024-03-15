import React from 'react'
import DetailsButton from './DetailsButton'
import EventDetails from './EventDetails'
import { Event } from './EventsTable'
import styles from '../events.module.css'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

interface Props {
    event: Event;
    updateData:any;
    getEventData:any;
}

const colorMap: { [key: string]: string[] } = {};

// Function to generate a random gradient background color
function getRandomGradient(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getAvatarColor(letter: string): string {
    if (!colorMap[letter]) {
        const color1 = getRandomGradient();
        const color2 = getRandomGradient();
        colorMap[letter] = [color1, color2];
    }
    const [color1, color2] = colorMap[letter];
    return `linear-gradient(${color1}, ${color2})`;
}

const EventItem = (props: Props) => {
    const event = props.event;
    const dateTimeString = event.occurred_at;

    const date = new Date(dateTimeString);
    const options: any = {
        month: 'short',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    const formattedDateTime = date.toLocaleString('en-US', options);

    return (
        <>
            <li className='my-4'>
                <div className="collapse ">
                    <input id={`checkbox_${event.id}`} className='hidden' type="checkbox" />
                    <div className="collapse-title p-0 px-5">
                        <div className='flex t-head px-5'>
                            <div className="flex items-center gap-3 w-3/12">
                                <div className={`${styles.avatar}`} style={{ background: getAvatarColor(event.actor_name.charAt(0).toUpperCase()) }}>
                                    {event.actor_name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div className=""> {event.actor_email} </div>
                                </div>
                            </div>
                            <div className={` ${styles.tTitle} w-3/12 items-center flex`}> {event.action.name} </div>
                            <div className={` ${styles.tTitle} w-3/12 items-center flex`}> {formattedDateTime} </div>
                            <div className={` ${styles.tTitle} w-1/12 items-center flex`}><DetailsButton id={event.id} /></div>
                            <div className={` ${styles.tTitle} w-1/12 items-center flex`}><EditButton  getEventData={props.getEventData} id={event.id}/> </div>
                            <div className={` ${styles.tTitle} w-1/12 items-center flex`}><DeleteButton updateData={props.updateData} id={event.id} /> </div>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <EventDetails event={event} />
                    </div>
                </div>
            </li>
        </>

    )
}

export default EventItem