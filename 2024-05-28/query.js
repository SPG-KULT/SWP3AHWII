const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient();

async function main() {
    const Accounts = await prisma.account.findMany({
        select: {
            id: true
        }
    });
    for (let currentAccount of allAccounts) {
        const amountOut = await prisma.transaction.findMany({
            select: {
                amount: true
            },
            where: {
                fromAcc: currentAccount.id
            }
        });
        const amountIn = await prisma.transaction.findMany({
            select: {
                amount: true
            },
            where: {
                toAcc: currentAccount.id
            }
        });
        let balance = Math.round((amountIn.reduce((a, b) => a + b.amount, 0) - amountOut.reduce((a, b) => a + b.amount, 0)) * 100) / 100;
        console.log(`Account mit der ID ${currentAccount.id} hat den Kontostand ${balance}`);
    }
}
main().then(() => {
    console.log('query done');
});