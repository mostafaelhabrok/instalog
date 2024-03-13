'use client'

import React from 'react'
import styles from '../events.module.css'

const AddEventButton = () => {
    return (
        <div className={`${styles.add_event}`}>
            <button title='Create Event' onClick={() => {
                (document.getElementById('event_form')as any).showModal();
            }}>
                <i className="fa-solid fa-circle-plus fa-3x"></i>
            </button>
        </div>
    )
}

export default AddEventButton