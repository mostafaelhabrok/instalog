import Link from 'next/link'
import React from 'react'
import CreateEventButton from './CreateEventButton'

const AddEventForm = () => {
    return (
        <dialog id="event_form" className="modal">
            <div className="modal-box max-w-4xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="p-6">
                    <div className="space-y-2">
                        <div className='flex space-x-2'>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Actor ID</span>
                                    </div>
                                    <input type="text" placeholder="Actor ID" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Actor Name</span>
                                    </div>
                                    <input type="text" placeholder="Actor Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Actor Email</span>
                                    </div>
                                    <input type="text" placeholder="Actor Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Target ID</span>
                                    </div>
                                    <input type="text" placeholder="Target ID" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Target Name</span>
                                    </div>
                                    <input type="text" placeholder="Target Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/3'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Target Email</span>
                                    </div>
                                    <input type="text" placeholder="Target Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Action ID</span>
                                    </div>
                                    <input type="text" placeholder="Action ID" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Action Name</span>
                                    </div>
                                    <input type="text" placeholder="Action Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className='flex space-x-2'>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Location</span>
                                    </div>
                                    <input type="text" placeholder="Location" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Occurred At</span>
                                    </div>
                                    <input type="datetime-local" placeholder="Occurred At" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Redirect</span>
                                    </div>
                                    <input type="text" placeholder="Redirect" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Request ID</span>
                                    </div>
                                    <input type="text" placeholder="Request ID" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Group</span>
                                </div>
                                <input type="text" placeholder="Group" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <textarea placeholder="Description" className="textarea textarea-bordered h-24" />
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <CreateEventButton />
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default AddEventForm