import React from 'react'
import DetailsButton from './DetailsButton'
import EventDetails from './EventDetails'
import { Event } from './EventsTable'
import styles from '../events.module.css'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

interface Props {
    event: Event;
    updateData: any;
    getEventData: any;
}

// get avatar background color
function getColor(letter: string): string {
    var hue = letter.charCodeAt(0) * 10;
    return 'hsl(' + hue + ', 70%, 50%)';
}

function lightenColor(color: string, percent: number): string {
    var num = parseInt(color.slice(1), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;

    return "#" + (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
}

function createAvatarPlaceholder(firstLetter: string): string {
    const gradientColor1 = getColor(firstLetter);
    const gradientColor2 = lightenColor(gradientColor1, 20); // Lighten the color for gradient
    const style = 'linear-gradient(45deg, ' + gradientColor1 + ', ' + gradientColor2 + ')';
    return style;
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
                    <div className="collapse-title p-0 sm:px-5">
                        <div className='flex t-head px-1 sm:px-5'>
                            <div className="flex items-center gap-3 w-4/12 lg:w-3/12">
                                <div className={`w-2/12 lg:w-3/12 ${styles.avatar}`} style={{ background: createAvatarPlaceholder(event.actor_name.charAt(0).toUpperCase()) }}>
                                    {event.actor_name.charAt(0).toUpperCase()}
                                </div>
                                <div className='w-10/12 lg:w-9/12'>
                                    <div> {event.actor_email} </div>
                                </div>
                            </div>
                            <div className={` ${styles.tTitle} w-3/12 items-center flex`}> {event.action.name} </div>
                            <div className={` ${styles.tTitle} w-2/12 lg:w-3/12 items-center flex`}> {formattedDateTime} </div>
                            <div className={` ${styles.tTitle} w-1/12 items-center flex`}><DetailsButton id={event.id} /></div>
                            <div className={` ${styles.tTitle} w-1/12 items-center flex`}><EditButton getEventData={props.getEventData} id={event.id} /> </div>
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