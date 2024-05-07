-- CreateTable
CREATE TABLE "Zoo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "land" TEXT NOT NULL,
    "stadt" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "baujahr" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Abteilung" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "zooId" TEXT NOT NULL,
    CONSTRAINT "Abteilung_zooId_fkey" FOREIGN KEY ("zooId") REFERENCES "Zoo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tier" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "art" TEXT NOT NULL,
    "abteilungId" TEXT NOT NULL,
    CONSTRAINT "Tier_abteilungId_fkey" FOREIGN KEY ("abteilungId") REFERENCES "Abteilung" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mitarbeiter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AbteilungToMitarbeiter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AbteilungToMitarbeiter_A_fkey" FOREIGN KEY ("A") REFERENCES "Abteilung" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AbteilungToMitarbeiter_B_fkey" FOREIGN KEY ("B") REFERENCES "Mitarbeiter" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Abteilung_zooId_key" ON "Abteilung"("zooId");

-- CreateIndex
CREATE UNIQUE INDEX "Tier_abteilungId_key" ON "Tier"("abteilungId");

-- CreateIndex
CREATE UNIQUE INDEX "_AbteilungToMitarbeiter_AB_unique" ON "_AbteilungToMitarbeiter"("A", "B");

-- CreateIndex
CREATE INDEX "_AbteilungToMitarbeiter_B_index" ON "_AbteilungToMitarbeiter"("B");
