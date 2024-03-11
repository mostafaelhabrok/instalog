/*
  Warnings:

  - You are about to drop the column `event_name` on the `event` table. All the data in the column will be lost.
  - Added the required column `action_name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `event_name`,
    ADD COLUMN `action_name` VARCHAR(191) NOT NULL;
