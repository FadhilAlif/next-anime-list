-- AlterTable
ALTER TABLE `comment` ADD COLUMN `anime_title` VARCHAR(191) NULL,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
