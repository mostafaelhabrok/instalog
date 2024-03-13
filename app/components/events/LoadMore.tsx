import Link from 'next/link'
import React from 'react'


interface Props{
    filter:string;
    take:string;
    eventTotal:number;
}

const LoadMore = (props:Props) => {

    const filter = props.filter;
    const eventTotal = props.eventTotal;
    let take = props.take;
    let disable = '';
    if(parseInt(take) >= eventTotal) disable = 'btn-disabled';
    take = (parseInt(take) + 5).toString();

    const queryString = `?filter=${filter}`+`&take=${take}`;


    return (
        <div className={`border bottom-radius load_more `}>
            <Link className={`w-full btn no-radius bottom-radius ${disable}`} href={`/events${queryString}`}>Load More</Link>
        </div>
    )
}

export default LoadMore