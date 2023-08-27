-- DropForeignKey
ALTER TABLE "content_images" DROP CONSTRAINT "content_images_section_id_fkey";

-- AlterTable
ALTER TABLE "content_images" ALTER COLUMN "section_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "content_images" ADD CONSTRAINT "content_images_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;
