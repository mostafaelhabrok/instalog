
import React from 'react'
import CreateEventButton from './CreateEventButton'
import ErrorAlert from '../ErrorAlert'
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import $ from 'jquery';

const AddEventForm = () => {
    const date = new Date();
    const localOffsetMinutes = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() - localOffsetMinutes);
    const isoStringWithOffset = date.toISOString().substring(0, 16).replace('Z', '');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        clearErrors
    } = useForm();

    return (
        <dialog id="event_form" className="modal">
            <div className="modal-box max-w-4xl">
                <form onSubmit={() => {
                    clearErrors();
                    reset();
                    // console.log("close::")
                }} id='close_form' method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="p-6">
                    <form onSubmit={handleSubmit(
                        (data) => {
                            // console.log(data);
                            $("#error_alert").parent().hide(400);


                            const occurred_at = new Date($("#occurred_at").val() as string);
                            // console.log(occurred_at);
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
                            // const validation = schema.safeParse(obj);

                            // if(!validation.success) console.log(validation.error.errors);
                            // if(Validationform("event_form")){}

                            $.ajax({
                                url: '/api/events',
                                method: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify(obj),
                                success(result) {
                                    // console.log(result);
                                    $("#close_form").trigger('submit');
                                    clearErrors();
                                    reset();
                                    $(".alert-success").show(600).css('display', 'flex');
                                    // $(".alert-success").hide(400);
                                    setTimeout(() => { $(".alert-success").hide(400); }, 3000);
                                    document.getElementById('hidden_link')?.click();
                                },
                                error(e) {
                                    let msg = '';

                                    for (let i = 0; i < e.responseJSON.length; i++) {
                                        // if (i % 2 == 0) msg += '<div class="flex">';
                                        // msg += '<div class="w-1/2">'
                                        msg += e.responseJSON[i].path[0] + ': ' + e.responseJSON[i].message + ', ';
                                        // msg += '</div>'
                                        // if (i % 2 == 1) msg += '</div>';
                                    }

                                    $("#error_alert").text(msg).parent().show(400).css('display', 'flex');
                                    // setTimeout(() => { $("#error_alert").parent().hide(400); }, 500);
                                }
                            });

                        }
                    )}>
                        <h1 className='text-2xl font-bold mb-2'>Create Event</h1>
                        <div className='flex space-x-2'>
                            <CustomInput register={{ ...register('actor_id', { required: true }) }} errors={errors.actor_id} label='Actor ID' id='actor_id' type='text' class='w-1/3' />
                            <CustomInput register={{ ...register('actor_name', { required: true }) }} errors={errors.actor_name} label='Actor Name' id='actor_name' type='text' class='w-1/3' />
                            <CustomInput register={{ ...register('actor_email', { required: true }) }} errors={errors.actor_email} label='Actor Email' id='actor_email' type='email' class='w-1/3' />
                        </div>
                        <div className='flex space-x-2'>
                            <CustomInput register={{ ...register('target_id', { required: true }) }} errors={errors.target_id} label='Target ID' id='target_id' type='text' class='w-1/3' />
                            <CustomInput register={{ ...register('target_name', { required: true }) }} errors={errors.target_name} label='Target Name' id='target_name' type='text' class='w-1/3' />
                            <CustomInput register={{ ...register('target_email', { required: true }) }} errors={errors.target_email} label='Target Email' id='target_email' type='email' class='w-1/3' />
                        </div>
                        <div className='flex space-x-2'>
                            <CustomInput register={{ ...register('action_id', { required: true }) }} errors={errors.action_id} label='Action ID' id='action_id' type='text' class='w-1/2' />
                            <CustomInput register={{ ...register('action_name', { required: true }) }} errors={errors.action_name} label='Action Name' id='action_name' type='text' class='w-1/2' />
                        </div>
                        <div className='flex space-x-2'>
                            <CustomInput register={{ ...register('location', { required: true }) }} errors={errors.location} label='Location' id='location' type='text' class='w-1/2' />
                            <CustomInput register={{ ...register('occurred_at', { required: true }) }} errors={errors.occurred_at} label='Occurred At' id='occurred_at' type='datetime-local' class='w-1/2' defaultValue={isoStringWithOffset} />
                        </div>
                        <div className='flex space-x-2'>
                            <CustomInput register={{ ...register('redirect', { required: true }) }} errors={errors.redirect} label='Redirect' id='redirect' type='text' class='w-1/2' />
                            <CustomInput register={{ ...register('request_id', { required: true }) }} errors={errors.request_id} label='Request ID' id='request_id' type='text' class='w-1/2' />
                        </div>
                        <CustomInput register={{ ...register('group', { required: true }) }} errors={errors.group} label='Group' id='group' type='text' class='' />
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <textarea { ...register('description', { required: true }) } placeholder="Description" id='description' className="textarea textarea-bordered h-24" />
                                {errors.description && <p className='text-red-500'>Description is required.</p>}
                            </label>
                        </div>
                        <div className='mt-2'>
                            <ErrorAlert hidden='hidden' />
                        </div>
                        <div className="flex justify-end mt-2">
                            <CreateEventButton />
                        </div>


                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default AddEventForm