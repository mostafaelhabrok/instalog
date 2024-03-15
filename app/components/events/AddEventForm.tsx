

import React, { useEffect, useMemo, useState } from 'react'
import CreateEventButton from './CreateEventButton'
import ErrorAlert from '../ErrorAlert'
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import $ from 'jquery';
import { Event } from './EventsTable'
import AddEventButton from './AddEventButton';

interface Props {
    updateData: any;
    event: any;
    clearEvent: any;
}

const AddEventForm = (props: Props) => {

    // date convert
    const event: Event = props.event;
    const date = Object.keys(event).length > 0 ? new Date(event.occurred_at) : new Date();
    const localOffsetMinutes = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() - localOffsetMinutes);
    const isoStringWithOffset = date.toISOString().substring(0, 16).replace('Z', '');
    event.occurred_at = isoStringWithOffset;

    const updateData = props.updateData;

    const {register,handleSubmit,reset,formState: { errors },clearErrors} = useForm({defaultValues: event});

    useEffect(() => {reset(event);}, [reset, event]);

    const _reset = function () {setTimeout(() => {reset();}, 1)};

    const onEventFormSubmit = function() {
        $("#error_alert").parent().fadeOut(400);
        $("#create_event_btn").addClass('loading loading-spinner');

        const occurred_at = new Date($("#occurred_at").val() as string);
        const occurred_at_iso = occurred_at.toISOString();

        const obj = {
            actor_id: $("#actor_id").val(),
            actor_name: $("#actor_name").val(),
            actor_email: $("#actor_email").val(),
            group: $("#group").val(),
            action: {
                id: $("#action_id").val(),
                name: $("#action_name").val()
            },
            target_id: $("#target_id").val(),
            target_name: $("#target_name").val(),
            target_email: $("#target_email").val(),
            location: $("#location").val(),
            occurred_at: occurred_at_iso,
            metadata: {
                redirect: $("#redirect").val(),
                description: $("#description").val(),
                x_request_id: $("#request_id").val()
            }
        }

        const event_id = $("#event_form").attr('data-event_id');
        let url, method, succes_msg;
        if (event_id) {
            url = `/api/events/${event_id}`;
            method = 'PUT';
            succes_msg = 'Event Edited Successfully.';
        }
        else {
            url = `/api/events`;
            method = 'POST';
            succes_msg = 'Event Added Successfully.';
        }

        $.ajax({
            url: url,
            method: method,
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success() {
                $("#close_form").trigger('submit');
                clearErrors();
                reset();

                $(".alert-success span").text(succes_msg);
                $(".alert-success").fadeIn(600).css('display', 'flex');
                setTimeout(() => { $(".alert-success").fadeOut(400); }, 3000);

                updateData(); // update the table events after success
            },
            error(e) {
                let msg = '';
                const error = e.responseJSON.error;
                if ((typeof error) == 'string') msg = error;
                else {
                    for (let i = 0; i < error.length; i++) {
                        msg += error[i].path[0] + ': ' + error[i].message + ', ';
                    }
                }
                $("#error_alert").text(msg).parent().fadeIn(400).css('display', 'flex');
            },
            complete() {
                $("#create_event_btn").removeClass('loading loading-spinner');
            }
        });
    }
    return (
        <>
            <AddEventButton reset={_reset} clearEvent={props.clearEvent} />

            <dialog id="event_form" className="modal">
                <div className="modal-box max-w-4xl">
                    <form onSubmit={() => {clearErrors();}} id='close_form' method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="p-6">
                        <form onSubmit={handleSubmit(onEventFormSubmit)}>
                            <h1 id='event_form_title_name' className='text-2xl font-bold mb-2'>Create Event</h1>
                            <div className='flex space-x-2'>
                                <CustomInput register={register('actor_id', { required: true })} errors={errors.actor_id} label='Actor ID' id='actor_id' type='text' class='w-1/3' />
                                <CustomInput register={register('actor_name', { required: true })} errors={errors.actor_name} label='Actor Name' id='actor_name' type='text' class='w-1/3' />
                                <CustomInput register={register('actor_email', { required: true }) } errors={errors.actor_email} label='Actor Email' id='actor_email' type='email' class='w-1/3' />
                            </div>
                            <div className='flex space-x-2'>
                                <CustomInput register={register('target_id', { required: true }) } errors={errors.target_id} label='Target ID' id='target_id' type='text' class='w-1/3' />
                                <CustomInput register={register('target_name', { required: true }) } errors={errors.target_name} label='Target Name' id='target_name' type='text' class='w-1/3' />
                                <CustomInput register={register('target_email', { required: true }) } errors={errors.target_email} label='Target Email' id='target_email' type='email' class='w-1/3' />
                            </div>
                            <div className='flex space-x-2'>
                                <CustomInput register={register('action.id', { required: true })} errors={errors.action?.id} label='Action ID' id='action_id' type='text' class='w-1/2' />
                                <CustomInput register={register('action.name', { required: true }) } errors={errors.action?.name} label='Action Name' id='action_name' type='text' class='w-1/2' />
                            </div>
                            <div className='flex space-x-2'>
                                <CustomInput register={register('location', { required: true }) } errors={errors.location} label='Location' id='location' type='text' class='w-1/2' />
                                <CustomInput register={register('occurred_at', { required: true }) } errors={errors.occurred_at} label='Occurred At' id='occurred_at' type='datetime-local' class='w-1/2' />
                            </div>
                            <div className='flex space-x-2'>
                                <CustomInput register={register('metadata.redirect', { required: true }) } errors={errors.metadata?.redirect} label='Redirect' id='redirect' type='text' class='w-1/2' />
                                <CustomInput register={register('metadata.x_request_id', { required: true }) } errors={errors.metadata?.x_request_id} label='Request ID' id='request_id' type='text' class='w-1/2' />
                            </div>
                            <CustomInput defaultValue={Object.keys(event).length > 0 ? event.group : ''} register={{ ...register('group', { required: true }) }} errors={errors.group} label='Group' id='group' type='text' class='' />
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Description</span>
                                    </div>
                                    <textarea {...register('metadata.description', { required: true })} placeholder="Description" id='description' className="textarea textarea-bordered h-24" />
                                    {errors.metadata?.description && <p className='text-red-500'>Description is required.</p>}
                                </label>
                            </div>
                            <div className='mt-2'>
                                <ErrorAlert id='error_alert' hidden='hidden' />
                            </div>
                            <div className="flex justify-end mt-2">
                                <CreateEventButton />
                            </div>


                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default AddEventForm