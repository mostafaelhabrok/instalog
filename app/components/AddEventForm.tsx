
import React from 'react'
import CreateEventButton from './CreateEventButton'
import ErrorAlert from './ErrorAlert'

const AddEventForm = () => {
    const date = new Date();
    const localOffsetMinutes = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() - localOffsetMinutes);
    const isoStringWithOffset = date.toISOString().replace('Z', '');
    
    return (
        <dialog id="event_form" className="modal">
            <div className="modal-box max-w-4xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="p-6">
                        <h1 className='text-2xl font-bold mb-2'>Create Event</h1>
                        <div className='flex space-x-2'>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Actor ID</span>
                                    </div>
                                    <input type="text" placeholder="Actor ID" id='actor_id' className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Actor Name</span>
                                    </div>
                                    <input type="text" placeholder="Actor Name" id='actor_name' className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Actor Email</span>
                                    </div>
                                    <input type="email" placeholder="Actor Email" id='actor_email' className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Target ID</span>
                                    </div>
                                    <input type="text" placeholder="Target ID" id='target_id' className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Target Name</span>
                                    </div>
                                    <input type="text" placeholder="Target Name" id='target_name' className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Target Email</span>
                                    </div>
                                    <input type="email" placeholder="Target Email" id='target_email' className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Action ID</span>
                                    </div>
                                    <input type="text" placeholder="Action ID" id='action_id' className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Action Name</span>
                                    </div>
                                    <input type="text" placeholder="Action Name" id='action_name' className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className='flex space-x-2'>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Location</span>
                                    </div>
                                    <input type="text" placeholder="Location" id='location' className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Occurred At</span>
                                    </div>
                                    <input type="datetime-local" defaultValue={isoStringWithOffset} placeholder="Occurred At" id='occurred_at' className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Redirect</span>
                                    </div>
                                    <input type="text" placeholder="Redirect" id='redirect' className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Request ID</span>
                                    </div>
                                    <input type="text" placeholder="Request ID" id='request_id' className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Group</span>
                                </div>
                                <input type="text" placeholder="Group" id='group' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <textarea placeholder="Description" id='description' className="textarea textarea-bordered h-24" />
                            </label>
                        </div>
                        <div className='mt-2'>
                            <ErrorAlert />
                        </div>
                        <div className="flex justify-end mt-2">
                            <CreateEventButton />
                        </div>

                    
                </div>
            </div>
        </dialog>
    )
}

export default AddEventForm