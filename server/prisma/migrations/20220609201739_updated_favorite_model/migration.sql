/*
  Warnings:

  - You are about to drop the column `recommendationId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Favorite` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "addedById" INTEGER,
    "addedRecommendationId" INTEGER,
    CONSTRAINT "Favorite_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Favorite_addedRecommendationId_fkey" FOREIGN KEY ("addedRecommendationId") REFERENCES "Recommendation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Favorite" ("id") SELECT "id" FROM "Favorite";
DROP TABLE "Favorite";
ALTER TABLE "new_Favorite" RENAME TO "Favorite";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
