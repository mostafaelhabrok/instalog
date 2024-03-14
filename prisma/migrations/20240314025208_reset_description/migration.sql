/*
  Warnings:

  - Made the column `meta_description` on table `event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `meta_description` VARCHAR(191) NOT NULL;
