-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `object` VARCHAR(191) NULL DEFAULT 'event',
    `actor_id` VARCHAR(191) NOT NULL,
    `actor_name` VARCHAR(191) NOT NULL,
    `actor_email` VARCHAR(191) NOT NULL,
    `group` VARCHAR(191) NOT NULL,
    `action_id` VARCHAR(191) NOT NULL,
    `action_object` VARCHAR(191) NULL DEFAULT 'event_action',
    `event_name` VARCHAR(191) NOT NULL,
    `target_id` VARCHAR(191) NOT NULL,
    `target_name` VARCHAR(191) NOT NULL,
    `target_email` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `occurred_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `meta_redirect` VARCHAR(191) NOT NULL,
    `meta_description` VARCHAR(191) NOT NULL,
    `meta_x_request_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
