/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_nome_key" ON "Users"("nome");
