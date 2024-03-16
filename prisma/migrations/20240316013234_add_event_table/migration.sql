-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "object" TEXT DEFAULT 'event',
    "actor_id" TEXT NOT NULL,
    "actor_name" TEXT NOT NULL,
    "actor_email" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "action_id" TEXT NOT NULL,
    "action_object" TEXT DEFAULT 'event_action',
    "action_name" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "target_name" TEXT NOT NULL,
    "target_email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "occurred_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "meta_redirect" TEXT NOT NULL,
    "meta_description" TEXT DEFAULT '',
    "meta_x_request_id" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
