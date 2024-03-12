import { z } from 'zod';


const schema = z.object({
    actor_id: z.string().min(1),
    actor_name: z.string().min(1),
    actor_email: z.string().email().min(1),
    group: z.string().min(1),
    action: z.object({
        id: z.string().min(1),
        name: z.string().min(1),
    }),
    target_id: z.string().min(1),
    target_name: z.string().min(1),
    target_email: z.string().email().min(1),
    location: z.string().min(1),
    occurred_at: z.string().datetime().default((new Date()).toISOString()),
    metadata: z.object({
        redirect: z.string().min(1),
        description: z.string().min(1),
        x_request_id: z.string().min(1)
    }),
});

export default schema;