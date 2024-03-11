import Link from 'next/link'
import React from 'react'
import CreateEventButton from './CreateEventButton'

const AddEventForm = () => {
    return (
        <dialog id="event_form" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="p-6">
                    <div className="space-y-2">
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Actor</span>
                                </div>
                                <input type="text" placeholder="Actor" className="input input-bordered w-full" />
                            </label>
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
                                    <span className="label-text">Target Name</span>
                                </div>
                                <input type="text" placeholder="Target Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                        <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Location</span>
                                </div>
                                <input type="text" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                        <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Occurred At</span>
                                </div>
                                <input type="datetime-local" placeholder="Occurred At" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                        <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Action Name</span>
                                </div>
                                <input type="text" placeholder="Action Name" className="input input-bordered w-full" />
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