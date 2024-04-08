console.log('here is my query:');
// TODO


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function query() {

    const getWatchlistNamesQuery = await prisma.watchlist.findMany({
        select: { name: true },
        where: { benutzerId: 1 },
    });

    const TracksQuery = await prisma.watchlist.findMany({
        select: { Track: true },
        where: { benutzerId: 7 },
    });

    getWatchlistNamesQuery.forEach((watchlist) => {
        console.log(watchlist);
    });

    TracksQuery.forEach((track) => {
        track.Track.forEach((t) => {
            console.log(t);
        });
    });

}

query()
    .then(() => console.log('done'));