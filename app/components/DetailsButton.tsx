'use client'

import React from 'react'
import $ from 'jquery';

interface Props{
    id:string
}

const DetailsButton = (props: Props) => {
    return (
        <button onClick={
            () => {
                // (document.getElementById('my_modal_1') as any).showModal();
                $('#' + props.id).toggleClass('hidden');
                $('.card').not('#' + props.id).addClass('hidden');

                let m = 0;
                $('#' + props.id).siblings('li').css('margin-top', m);
                $('.load_more').css('margin-top', m);
                
                if (!$('#' + props.id).hasClass('hidden')) m = parseInt($('#' + props.id).css('height')) ;

                if($('#' + props.id).next('li').first().length) $('#' + props.id).next('li').first().css('margin-top', m * 1.2);
                else $('.load_more').css('margin-top', m);



            }
        }
            className="btn btn-ghost btn-xs">
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    )
}

export default DetailsButton