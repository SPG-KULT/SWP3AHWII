const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function query() {
    let zoos = await prisma.zoo.findMany({
        select: {
            stadt: true,
        },
    },
    );

    for (let zoo of zoos) {
        console.log(zoo.stadt);
    }

    let zooInfo = await prisma.zoo.findUnique({
        where: {
            id: 'id',
        },
        select: {
            abteilungen: {
                select: {
                    name: true,
                    tiere: {
                        select: {
                            _count: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    console.log("Zoo Info:\n\n");
    console.log(zooInfo.land, zooInfo.stadt, zooInfo.adresse, zooInfo.baujahr);
    console.log("Abteilungen:");
    for (abteilung of zooInfo.abteilungen) {
        console.log(abteilung.name);
        console.log("Tiere:");
        for (tier of abteilung.tiere) {
            console.log(tier.name);
        }
    }
    const mitArbeiterZoo = await prisma.mitarbeiter.findMany({
        select: {
            name: true,
            abteilungen: {
                select: {
                    name: true,
                    zoo: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
        where: {
            abteilungen:
            {
                some: {
                    zoo: {
                        id: 'id',
                    },
                },
            },
        },
    });

    console.log("Mitarbeiter + Abteilungen:\n\n");
    for (mitArbeiter of mitArbeiterZoo) {
        console.log(mitArbeiter.name);

        mitArbeiter.abteilungen.forEach(abteilung => {
            console.log(" " + abteilung.name);
        });
    }
}

query();