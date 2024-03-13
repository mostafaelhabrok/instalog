'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Event } from './EventsTable'

interface Props{
    events:Event[];
    onToggle: any;
    isLive:boolean;
    filter:string;
}


const SearchForm = (props: Props) => {
    const [filter, setFilter] = useState(props.filter);

    const queryString = `?filter=${filter}`;

    const onToggle = props.onToggle;
    const isLive = props.isLive;

    const events = props.events;
    const exportToCsv = () => {

        const copyEvents = events.map(event => {
          const copyEvent: any = { ...event }; 
          Object.assign(copyEvent, {
            'action_id': event.action.id,
            'action_object': event.action.object,
            'action_name': event.action.name,
            'meta_redirect': event.metadata.redirect,
            'meta_description': event.metadata.description,
            'meta_x_request_id': event.metadata.x_request_id
          });
          delete copyEvent.action;
          delete copyEvent.metadata;
          return copyEvent;
        });
      
        const coulmn_headers = Object.keys(copyEvents[0]);
        const header = coulmn_headers.join(",") + "\n";
        const rows = copyEvents.map(event => Object.values(event).join(",")).join("\n");

        const data = "data:text/csv;charset=utf-8," + header + rows;
        const result = encodeURI(data);

        const link = document.createElement("a");
        link.setAttribute("href", result);
        link.setAttribute("download", "events.csv");
      
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


    return (

        <div className="overflow-x-auto p-5 search-form top-radius ">
            <div className='flex search'>
                <input
                    type="text"
                    placeholder="Search name, email or action..."
                    className="input input-bordered background w-full no-radius left-radius "
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                    }
                    }
                />

                <Link className='btn no-radius bordered' href={`/events${queryString}`}>
                    <i className="fa-solid fa-filter"></i>
                    Filter
                </Link>

                <button onClick={exportToCsv} className="no-radius btn bordered">
                    <i className="fa-solid fa-file-export"></i>
                    Export
                </button>
                <button onClick={(e) => {
                        onToggle();
                        
                }} className={`no-radius btn bordered right-radius ${isLive ? 'btn-active btn-warning' : ''}`}>
                    <i className="fa-solid fa-record-vinyl"></i>
                    Live
                </button>
            </div>

        </div>
    )
}

export default SearchForm