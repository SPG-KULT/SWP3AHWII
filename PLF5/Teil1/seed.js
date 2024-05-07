const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require('@faker-js/faker');
const zooCountTarget = 5;
const abteilungCountTarget = 7;
const tierCountTarget = 20;
const mitarbeiterTarget = 100;
const abteilungFillRange = 4;

async function seed() {
    const zooCount = await prisma.zoo.count();
    for (i = 0; i <= zooCountTarget; i++) {
        const zoo = {
            land: fakerDE.location.country(),
            stadt: fakerDE.location.city(),
            adresse: fakerDE.location.streetAddress(),
            baujahr: fakerDE.number.int({ min: 2000, max: 2021 }),
            abteilungen: {
                //name: fakerDE.animal.type(),

            }




        };

        console.log("seeding");
        const createZoo = await prisma.zoo.create({
            data: zoo,
        });
        console.log(`${await prisma.zoo.count()} Zoo in der DB`);
    }



    //const abteilungCount = await prisma.abteilung.count();
    /*  for (i = 0; i <= abteilungCountTarget; i++) {
         const abteilung = {
             name: fakerDE.animal.type(),
             zoo: {
 
             }
             //mitarbeiter: 
             //tiere: 
 
         };
         console.log("seeding");
         const createAbteilung = await prisma.abteilung.create({
             data: abteilung,
         });
         console.log(`${await prisma.abteilung.count()} Abteilungen in der DB`);
     } 

    const tierCount = await prisma.tier.count();
    for (i = 0; i <= tierCountTarget; i++) {
        const tier = {
            name: fakerDE.person.firstName(),
            art: fakerDE.animal.type(),
            abteilungen: {

            }

        };
        console.log("seeding");
        const createTiere = await prisma.tier.create({
            data: abteilung,
        });
        console.log(`${await prisma.tier.count()} Tiere in der DB`);
    }

    const mitarbeiterCount = await prisma.Mitarbeiter.count();
    for (i = 0; i <= mitarbeiterCountTarget; i++) {
        const tier = {
            name: fakerDE.person.fullName(),
            abteilungen: {

            }

        };
    } */
}

seed();