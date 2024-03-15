'use client'

import React from 'react'
import $ from 'jquery';
import styles from '../events.module.css'

interface Props{
    id:string
}

const DetailsButton = (props: Props) => {
    const id = props.id;
    return (
        <button id={id} onClick={
            () => {
                $("#checkbox_" + id).trigger('click');
                $("#" + id).toggleClass('rotated');
            }
        }
            className={`${styles.detailsButton} hover:bg-inherit btn btn-ghost btn-s`}>
            <i className={`fa-solid fa-chevron-right ${styles.detailsArrow}`}></i>
        </button>
    )
}

export default DetailsButton