-- AlterTable
ALTER TABLE `ticket` MODIFY `priority` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL DEFAULT 'MEDIUM';
