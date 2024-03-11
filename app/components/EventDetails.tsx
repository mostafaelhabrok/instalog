import React from 'react'

interface Props{
    id:string
}

const EventDetails = (props: Props) => {
    return (
        <div id={props.id} className="card bg-base-100 border hidden ">
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default EventDetails