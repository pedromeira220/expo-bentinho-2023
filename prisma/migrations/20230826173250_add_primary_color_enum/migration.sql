/*
  Warnings:

  - Changed the type of `primary_color` on the `blogs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PrimaryColor" AS ENUM ('PURPLE', 'ORANGE', 'BLUE', 'GREEN', 'YELLOW');

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "primary_color",
ADD COLUMN     "primary_color" "PrimaryColor" NOT NULL;
