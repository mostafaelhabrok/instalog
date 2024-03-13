'use client'

import React from 'react'
import $ from 'jquery';
// import schema from "../api/events/schema";


const CreateEventButton = () => {

        

    return (
        <button
            onClick={() => {
                $("#error_alert").parent().hide(400);


                const occurred_at = new Date($("#occurred_at").val() as string);
                // console.log(occurred_at);
                const occurred_at_iso = occurred_at.toISOString();
            
                const obj = {
                    actor_id: $("#actor_id").val(),
                    actor_name: $("#actor_name").val(),
                    actor_email: $("#actor_email").val(),
                    group: $("#group").val(),
                    action:{
                        id:$("#action_id").val(),
                        name:$("#action_name").val()
                    },
                    target_id: $("#target_id").val(),
                    target_name: $("#target_name").val(),
                    target_email: $("#target_email").val(),
                    location: $("#location").val(),
                    occurred_at: occurred_at_iso,
                    metadata:{
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
                        console.log(result);
                        $("#event_form form").trigger('submit');
                        $(".alert-success").show(600).css('display','flex');
                        // $(".alert-success").hide(400);
                        setTimeout(() => { $(".alert-success").hide(400); }, 3000);

                    },
                    error(e) {
                        let msg = '';

                        for (let i = 0; i < e.responseJSON.length; i++) {
                            // if (i % 2 == 0) msg += '<div class="flex">';
                            // msg += '<div class="w-1/2">'
                            msg += e.responseJSON[i].path[0] + ': ' + e.responseJSON[i].message + ', ' ;
                            // msg += '</div>'
                            // if (i % 2 == 1) msg += '</div>';
                        }

                        $("#error_alert").text(msg).parent().show(400).css('display','flex');
                        // setTimeout(() => { $("#error_alert").parent().hide(400); }, 500);
                    }
                });
            }}
            type="submit"
            className="btn btn-primary"
        >
            Create
        </button>
    )
}

export default CreateEventButton