-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liked" (
    "id" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,
    "imageSrc" TEXT NOT NULL,

    CONSTRAINT "Liked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saved" (
    "id" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,
    "imageSrc" TEXT NOT NULL,

    CONSTRAINT "Saved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Liked_imageId_key" ON "Liked"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Liked_imageSrc_key" ON "Liked"("imageSrc");

-- CreateIndex
CREATE UNIQUE INDEX "Saved_imageId_key" ON "Saved"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Saved_imageSrc_key" ON "Saved"("imageSrc");
