/*
  Warnings:

  - You are about to drop the column `count` on the `Counter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Counter" DROP COLUMN "count",
ADD COLUMN     "finishedPoll" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "startedPoll" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "visits" INTEGER NOT NULL DEFAULT 0;
