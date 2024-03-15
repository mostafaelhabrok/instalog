'use client'

import React from 'react'
import styles from '../events.module.css'
import $ from 'jquery';

interface Props {
    clearEvent: any;
    reset:any;
}
const AddEventButton = (props: Props) => {
    const clearEvent = props.clearEvent;
    const reset = props.reset;

    return (
        <div className={`${styles.add_event}`}>
            <button title='Create Event' onClick={() => {
                clearEvent();
                reset();
                
                (document.getElementById('event_form') as any).showModal();
                $("#event_form").removeAttr('data-event_id');
                $("#event_form_submit_name").text('Create');
                $("#event_form_title_name").text('Create Event');
                $("#error_alert").parent().fadeOut(400);

            }}>
                <i className="fa-solid fa-circle-plus fa-3x"></i>
            </button>
        </div>
    )
}

export default AddEventButton