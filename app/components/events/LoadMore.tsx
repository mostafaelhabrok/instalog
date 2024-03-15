import Link from 'next/link'
import React from 'react'
import styles from '../events.module.css'


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
        <div className={`border ${styles.bottomRadius} ${styles.loadMore} load_more `}>
            <Link className={`w-full btn ${styles.noRadius} ${styles.bottomRadius} ${disable}`} href={`/events${queryString}`}>Load More</Link>
        </div>
    )
}

export default LoadMore