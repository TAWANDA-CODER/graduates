import { PrismaClient } from "@prisma/client";
import * as readline from 'readline';

const prisma = new PrismaClient();

async function getProfile(x: string)
{
    const entries = await prisma.user.findUnique({
        where: {
            id: x,
        },
        })
        console.log(entries);
    
}

async function getUserTag()
{
    let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('SORT BY TAGS:'+'\n'+'[1]AI'+'\n'+'[2]SECURITY '+'\n'+'[3]DATA ANALYTICS '+'\n'+'[4]SOFTWARE ENGINEERING'+'\n'+'[5]NETWORKING '+'\n'+'[6]DISTRIBUTED SYSTEMS '+'\n'+'[7]FORMAL METHODS'+'\n', async(answer_) => {
        if(answer_ == '1')
        {
            const entries__1_1 = await prisma.userTag.findMany({
                where: {
                tag: 'AI',
                },
                
            })
            console.log(entries__1_1);
            // console.log(entries__1_1.length);
        }
        else if (answer_ == '2') 
        {
            const entries__1_2 = await prisma.userTag.findMany({
                where: {
                tag: 'Security',
                },
            })
            console.log(entries__1_2);
        }
        else if(answer_ == '3')
        {
            const entries__1_3 = await prisma.userTag.findMany({
                where: {
                    tag: 'Data analytics',
                },
            })
            console.log(entries__1_3);
        }
        else if(answer_ == '4')
        {
            const entries__1_4 = await prisma.userTag.findMany({
                where: {
                    tag: 'Software Engineering',
                },
                })
                console.log(entries__1_4); 
        }
        else if(answer_ == '5')
        {
            const entries__1_5 = await prisma.userTag.findMany({
                where: {
                    tag: 'Networking',
                },
                })
                console.log(entries__1_5);
        }
        else if(answer_ == '6')
        {
            const entries__1_6 = await prisma.userTag.findMany({
                where: {
                    tag: 'Distributed Systems',
                },
                })
                console.log(entries__1_6); 
        }
        else if(answer_ == '7')
        {
            const entries__1_7 = await prisma.userTag.findMany({
                where: {
                    tag: 'Formal Methods',
                },
                })
                console.log(entries__1_7);
        }
        else
        {
            const entries__1_8 = await prisma.userTag.findMany({
                orderBy: {
                    tag: 'asc',
                },
            })
            console.log(entries__1_8);
        }
    rl.close();
    });
}


async function getUserLocation()
{
    let rl_2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl_2.question('FILTER BY LOCATION:'+'\n'+'[1]JOHANNESBURG'+'\n'+'[2]PRETORIA '+'\n'+'[3]CAPE TOWN '+'\n'+'[4]GQERBERHA'+'\n'+'[5]BLOEMFONTEIN '+'\n'+'[6]POLOKWANE '+'\n', async(answer_1) => {
        if(answer_1 == '1')
        {
            const entries__2_1 = await prisma.userLocation.findMany({
                where: {
                location: 'Johannesburg',
                },
                
            })
            // console.log(entries__2_1);
            for(var x = 0;x < entries__2_1.length;x++)
            {
                // console.log(entries__2_1.userId);
                getProfile(entries__2_1[x].userId);
            }
        }
        else if (answer_1 == '2') 
        {
            const entries__2_2 = await prisma.userLocation.findMany({
                where: {
                location: 'Pretoria',
                },
            })
            console.log(entries__2_2);
        }
        else if(answer_1 == '3')
        {
            const entries__2_3 = await prisma.userLocation.findMany({
                where: {
                    location: 'Cape Town',
                },
            })
            console.log(entries__2_3);
        }
        else if(answer_1 == '4')
        {
            const entries__2_4 = await prisma.userLocation.findMany({
                where: {
                    location: 'Gqerberha',
                },
                })
                console.log(entries__2_4); 
        }
        else if(answer_1 == '5')
        {
            const entries__2_5 = await prisma.userLocation.findMany({
                where: {
                    location: 'Bloemfontein',
                },
                })
                console.log(entries__2_5);
        }
        else if(answer_1 == '6')
        {
            const entries__2_6 = await prisma.userLocation.findMany({
                where: {
                    location: 'Polokwane',
                },
                })
                console.log(entries__2_6); 
        }
        else
        {
            const entries__1_8 = await prisma.userLocation.findMany({
                orderBy: {
                    location: 'asc',
                },
            })
            console.log(entries__1_8);
        }
    rl_2.close();
    });
}

async function main() 
{
    const rl_1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

    rl_1.question(`SORT BY: \n[1]ALPHABETICALLYA-Z\n[2]ALPHABATICALYZ-A\n[3]USER TAGS\n[4]LOCATION\n`, async (answer) => {
        if(answer == '1')
        {
        const entries = await prisma.user.findMany({
            orderBy: {
                name: 'asc',
            },
            })
            console.log(entries);
        }
        else if(answer == '2')
        {
        const entries_1 = await prisma.user.findMany({
            orderBy: {
                name: 'desc',
            },
            })
            console.log(entries_1);
        }
        else if(answer == '3')
        {
            getUserTag();
        }
        else if(answer == '4')
        {
            getUserLocation();
        }
        else
        {
        const entries_2 = await prisma.user.findMany({
            orderBy:{name:'asc',},
        });
        console.log(entries_2);
        }
        // rl_1.close();
    }); 
}

main();