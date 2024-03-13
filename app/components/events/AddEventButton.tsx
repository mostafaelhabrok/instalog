'use client'

import React from 'react'

const AddEventButton = () => {
    return (
        <div className='add_event'>
            <button onClick={() => {
                (document.getElementById('event_form')as any).showModal();
            }}>
                <i className="fa-solid fa-circle-plus fa-3x"></i>
            </button>
        </div>
    )
}

export default AddEventButton