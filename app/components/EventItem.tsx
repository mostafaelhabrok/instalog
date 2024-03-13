import React from 'react'
import DetailsButton from './DetailsButton'
import EventDetails from './EventDetails'
import { Event } from './EventsTable'

interface Props {
    event: Event
}

// Map to store the gradient colors for each letter
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
    // Check if the colors for this letter already exist in the color map
    if (!colorMap[letter]) {
        // If not, generate two new colors and store them in the map
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
                    <input type="checkbox" />
                    <div className="collapse-title p-0 px-5">
                        <div className='flex t-head px-5'>
                            <div className="flex items-center gap-3 w-4/12">

                                <div className="avatar" style={{ background: getAvatarColor(event.actor_name.charAt(0).toUpperCase()) }}>
                                    {event.actor_name.charAt(0).toUpperCase()}
                                </div>

                                <div>
                                    <div className=""> {event.actor_email} </div>
                                </div>
                            </div>
                            <div className=' t-title w-4/12'> {event.action.name} </div>
                            <div className=' t-title w-3/12'> {formattedDateTime} </div>
                            <div className=' t-title w-1/12'><DetailsButton id={event.id} /></div>
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