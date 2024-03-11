import React from 'react'
import DetailsButton from './DetailsButton'
import EventDetails from './EventDetails'

interface Props {
    event: {
        id:string;
        actor_name:string;
    }
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
    return (
        <>
            <li className='my-4'>
                <div className='flex t-head px-10 mt-5 '>
                    <div className="flex items-center gap-3 w-4/12">
                        
                            <div className="avatar" style={{ background: getAvatarColor(props.event.actor_name.charAt(0).toUpperCase()) }}>
                                {props.event.actor_name.charAt(0).toUpperCase()}
                            </div>
                        
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                        </div>
                    </div>
                    <div className='font-bold t-title w-4/12'>user.login_succeeded</div>
                    <div className='font-bold t-title w-3/12'>Date</div>
                    <div className='font-bold t-title w-1/12'><DetailsButton id={props.event.id} /></div>
                </div>
            </li>
            <EventDetails id={props.event.id} />
        </>

    )
}

export default EventItem