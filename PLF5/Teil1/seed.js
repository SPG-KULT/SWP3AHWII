const { fakerDE } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');

const ZOO_COUNT_TARGET = 5;
const ABTEILUNG_COUNT_TARGET = 7;
const TIER_COUNT_TARGET = 20;
const MITARBEITER_TARGET = 100;
const ABTEILUNG_FILL_RANGE = 4;

const prisma = new PrismaClient();
async function main() {

    console.log('Seeding ...');
    for (let i = 0; i < ZOO_COUNT_TARGET; i++) {
        await prisma.zoo.create({
            data: {
                land: fakerDE.location.country(),
                stadt: fakerDE.location.city(),
                adresse: fakerDE.location.streetAddress(),
                baujahr: fakerDE.number.int({ min: 1700, max: 2023 }),
            },
        });
    }


    const zoos = await prisma.zoo.findMany();
    for (zooAktuell of zoos)
        for (let i = 0; i < fakerDE.number.int({ min: 2, max: 7 }); i++) {
            await prisma.abteilung.create({
                data: {
                    name: fakerDE.animal.type(),
                    zoo:
                    {
                        connect: {
                            id: zooAktuell.id
                        },
                    },
                },
            });
        }


    const abteilungArr = await prisma.abteilung.findMany();
    for (let abteilungAktuell of abteilungArr) {
        for (i = 0; i < fakerDE.number.int({ min: 5, max: TIER_COUNT_TARGET }); i++) {
            await prisma.tier.create({
                data: {
                    name: fakerDE.person.firstName(),
                    art: fakerDE.animal[abteilungAktuell.name](),
                    abteilungen:
                    {
                        connect: {
                            id: abteilungAktuell.id
                        },
                    },
                },
            });
        }
    }

    for (let i = 0; i < MITARBEITER_TARGET; i++) {
        await prisma.mitarbeiter.create({
            data: {
                name: fakerDE.person.firstName(),
            },
        });
        const abteilungenZoo = await prisma.abteilung.findMany({
            where: {
                zoo: {
                    id: zoos[fakerDE.number.int({ min: 0, max: zoos.length - 1 })].id,
                }
            }
        });
        const mitArbeiterArr = await prisma.mitarbeiter.findMany();
        for (let j = 0; j < fakerDE.number.int({ min: 1, max: 3 }); j++) {
            await prisma.mitarbeiter.update({
                data: {
                    abteilungen: {
                        connect: abteilungenZoo[fakerDE.number.int({ min: 0, max: 4 })],
                    },
                },
                where: {
                    id: mitArbeiterArr[i].id
                }
            });
        }
    }
}

main().then(console.log("seeding done"))
    .catch(console.error).finally(async () => {
        await prisma.$disconnect();
    });