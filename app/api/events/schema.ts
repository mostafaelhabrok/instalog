import { z } from 'zod';


const schema = z.object({
    actor_id: z.string().min(1),
    actor_name: z.string().min(1),
    actor_email: z.string().email().min(1),
    group: z.string().min(1),
    action_id: z.string().min(1),
    action_name: z.string().min(1),
    target_id: z.string().min(1),
    target_name: z.string().min(1),
    target_email: z.string().email().min(1),
    location: z.string().min(1),
    occurred_at: z.string().datetime().default((new Date()).toISOString()),
    meta_redirect: z.string().min(1),
    meta_description: z.string().min(1),
    meta_x_request_id: z.string().min(1)
});

export default schema;