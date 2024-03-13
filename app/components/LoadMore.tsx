import Link from 'next/link'
import React from 'react'


interface Props{
    sort:string;
    order:string;
    filter:string;
    take:string;
    eventTotal:number;
}

const LoadMore = (props:Props) => {

    const sort = props.sort;
    const order = props.order;
    const filter = props.filter;
    const eventTotal = props.eventTotal;
    let take = props.take;
    let disable = '';
    if(parseInt(take) >= eventTotal) disable = 'btn-disabled';
    take = (parseInt(take) + 5).toString();

    const queryString = `?filter=${filter}&sort=${sort}&order=${order}&take=${take}`;


    return (
        <div className={`border bottom-radius load_more `}>
            <Link className={`w-full btn no-radius bottom-radius ${disable}`} href={`/events${queryString}`}>Load More</Link>
            {/* <button className="w-full btn no-radius bottom-radius">

               
            </button> */}
        </div>
    )
}

export default LoadMore