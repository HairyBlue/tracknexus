import { PrismaClient } from "@prisma/client";
import faker, { fakerEN } from "@faker-js/faker";
import { route, point, bus } from "./data";
const prisma = new PrismaClient();

async function main() {
  // SEED SUPERADMIN
  await prisma.user.create({
    data: {
      name: "Nicki Marty Pecision",
      email: "pecision.nickimarty@gmail.com",
      password: "superadmin",
      role: "SUPERADMIN",
    },
  });

  // SEED ADMIN
  await prisma.user.create({
    data: {
      name: "Nicki Marty Pecision",
      email: "pecision.iking@gmail.com",
      password: "admin",
      role: "ADMIN",
    },
  });

  // SEED COADMIN
  for (let i = 0; i < 2; i++) {
    await prisma.user.create({
      data: {
        name: `${fakerEN.person.firstName()} ${fakerEN.person.middleName()} ${fakerEN.person.lastName()}`,
        email: fakerEN.internet.email(),
        password: fakerEN.internet.password(),
        role: "COADMIN",
      },
    });
  }

  // SEED EMPLOYEE
  for (let i = 0; i < 50; i++) {
    await prisma.user.create({
      data: {
        name: `${fakerEN.person.firstName()} ${fakerEN.person.middleName()} ${fakerEN.person.lastName()}`,
        email: fakerEN.internet.email(),
        password: fakerEN.internet.password(),
        role: "USER",
      },
    });
  }
  // // SEED ROUTES
  // route.forEach(async (prop) => {
  //   await prisma.routes.create({
  //     data: {
  //       route: prop,
  //     },
  //   });
  // });

  // // SEED DESTINATION
  // point.forEach(async (prop) => {
  //   await prisma.destination.create({
  //     data: {
  //       point: prop.name,
  //       routes_id: prop.routeId,
  //     },
  //   });
  // });

  // // SEED BUS
  // bus.forEach(async (prop) => {
  //   await prisma.bus.create({
  //     data: {
  //       busNumber: prop.number,
  //       routes_id: prop.routeId,
  //       destination_id: prop.destinationId,
  //     },
  //   });
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });
