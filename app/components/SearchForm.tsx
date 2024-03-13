'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Event } from '../components/EventsTable'




const SearchForm = () => {
    const [filter, setFilter] = useState('');

    const queryString = `?filter=${filter}`;






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

                <button className="no-radius btn bordered">
                    <i className="fa-solid fa-file-export"></i>
                    Export
                </button>
                <button className="no-radius btn bordered right-radius">
                    <i className="fa-solid fa-record-vinyl"></i>
                    Live
                </button>
            </div>

        </div>
    )
}

export default SearchForm