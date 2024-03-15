'use client';

import React from 'react'
import $ from 'jquery';
import ErrorAlert from '../ErrorAlert';

interface Props {
    id: string;
    updateData: any;
}



const DeleteButton = (props: Props) => {
    const id = props.id;
    const updateData = props.updateData;

    const submitDelete = function(){
        $("#delete_event_btn").addClass('loading loading-spinner');
    
        $.ajax({
            url: `/api/events/${id}`,
            method: 'DELETE',
            success() {
                $(".alert-success span").text('Event Deleted Successfully.');
                $(".alert-success").fadeIn(600).css('display', 'flex');
                setTimeout(() => { $(".alert-success").fadeOut(400); }, 3000);
                updateData();
            },
            error(e) {
                let msg = e.responseJSON.error;
                $("#delete_error_alert").text(msg).parent().fadeIn(400).css('display', 'flex');
            },
            complete() {
                $("#delete_event_btn").removeClass('loading loading-spinner');
            }
        });
    }

    return (
        <>

            <button onClick={() => {
                (document.getElementById('delete_confirm') as any).showModal();
                $("#delete_error_alert").parent().fadeOut(400);
            }} className='btn btn-ghost btn-s' ><i className="fa-solid fa-trash-can "></i></button>

            <dialog id="delete_confirm" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='space-y-5'>

                        <h3 className="font-bold text-lg text-center">Are You Sure?</h3>
                        <div className='flex space-x-3 justify-center'>
                            <button onClick={submitDelete} className='btn btn-error'>Delete
                                <span id='delete_event_btn' className=""></span>
                            </button>
                            <button onClick={() => {
                                $('#delete_confirm form').trigger('submit');
                            }} className='btn btn-info'>Cancel</button>
                        </div>
                        <ErrorAlert id='delete_error_alert' hidden='hidden' />
                    </div>

                </div>
            </dialog>
        </>
    )
}

export default DeleteButton