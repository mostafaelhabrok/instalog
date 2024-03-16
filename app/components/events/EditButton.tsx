'use client';

import React from 'react'
import $ from 'jquery';

interface Props {
    id: string;
    getEventData: any;
}


const EditButton = (props: Props) => {
    const id = props.id;
    const getEventData = props.getEventData;

  return (
    <button onClick={() => {
        (document.getElementById('event_form')as any).showModal();
        $("#event_form").attr('data-event_id',id);
        $("#event_form_submit_name").text('Edit');
        $("#event_form_title_name").text('Edit Event');
        // get event data to load on form to edit
        getEventData(id);
    }}  className='btn btn-ghost btn-s' ><i className="fa-solid fa-pen-to-square "></i></button>
  )
}

export default EditButton