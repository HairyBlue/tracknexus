-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPERADMIN', 'ADMIN', 'COADMIN', 'DRIVER', 'USER') NOT NULL DEFAULT 'USER',
    `driver` BOOLEAN NOT NULL DEFAULT false,
    `status` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Routes` (
    `routesId` INTEGER NOT NULL AUTO_INCREMENT,
    `route` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`routesId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Destination` (
    `destinationId` INTEGER NOT NULL AUTO_INCREMENT,
    `point` VARCHAR(191) NOT NULL,
    `routes_id` INTEGER NOT NULL,

    PRIMARY KEY (`destinationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bus` (
    `busId` INTEGER NOT NULL AUTO_INCREMENT,
    `busNumber` INTEGER NOT NULL,
    `status` ENUM('waiting', 'intransit', 'lastride', 'issue', 'offline', 'notavailable') NOT NULL DEFAULT 'notavailable',
    `routes_id` INTEGER NOT NULL,
    `destination_id` INTEGER NOT NULL,

    PRIMARY KEY (`busId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Destination` ADD CONSTRAINT `Destination_routes_id_fkey` FOREIGN KEY (`routes_id`) REFERENCES `Routes`(`routesId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bus` ADD CONSTRAINT `Bus_routes_id_fkey` FOREIGN KEY (`routes_id`) REFERENCES `Routes`(`routesId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bus` ADD CONSTRAINT `Bus_destination_id_fkey` FOREIGN KEY (`destination_id`) REFERENCES `Destination`(`destinationId`) ON DELETE RESTRICT ON UPDATE CASCADE;
